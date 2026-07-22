import { useEffect, useMemo } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { colors } from "../theme";

const PARTICLE_COUNT = 14;
const PARTICLE_COLORS = [colors.der, colors.die, colors.das, "#ffd166"];
const BURST_DURATION = 700;

interface Particle {
  color: string;
  translate: Animated.ValueXY;
  opacity: Animated.Value;
  targetX: number;
  targetY: number;
}

// A minimal, one-shot particle burst — no animation/confetti library, just
// react-native's built-in Animated API so it works the same on web and any
// future native build. Plays once on mount, then fades out on its own.
export function Fireworks() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + Math.random() * 0.4;
      const distance = 60 + Math.random() * 50;
      return {
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        translate: new Animated.ValueXY({ x: 0, y: 0 }),
        opacity: new Animated.Value(1),
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance,
      };
    });
  }, []);

  useEffect(() => {
    const animations = particles.map((p) =>
      Animated.parallel([
        Animated.timing(p.translate, {
          toValue: { x: p.targetX, y: p.targetY },
          duration: BURST_DURATION,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(p.opacity, {
          toValue: 0,
          duration: BURST_DURATION,
          delay: 150,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    Animated.parallel(animations).start();
  }, [particles]);

  return (
    <View style={styles.container} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {particles.map((p, i) => (
        <Animated.View
          key={i}
          style={[
            styles.particle,
            {
              backgroundColor: p.color,
              opacity: p.opacity,
              transform: [{ translateX: p.translate.x }, { translateY: p.translate.y }],
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  particle: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

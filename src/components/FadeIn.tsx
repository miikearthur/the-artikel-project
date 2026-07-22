import { useEffect, useRef } from "react";
import { Animated, Easing, StyleProp, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

// Wraps a top-level screen so switching between Mode/Level/Category/Quiz
// fades and slides it in on mount, instead of the previous hard cut. Each
// screen swap unmounts the old branch and mounts a new FadeIn instance, so
// the animation re-triggers naturally with no key management needed.
export function FadeIn({ children, style }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 220, useNativeDriver: true }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 220,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[style, { opacity, transform: [{ translateY }] }]}>{children}</Animated.View>
  );
}

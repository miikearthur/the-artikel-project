import { useRef } from "react";
import {
  AccessibilityRole,
  AccessibilityState,
  Animated,
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
  hitSlop?: PressableProps["hitSlop"];
}

// Animating Pressable itself (rather than wrapping it in a separate Animated
// View) keeps `style` — which often carries layout-affecting props like
// flex: 1 for equal-width button rows — applied to the one element actually
// participating in the parent's flex layout.
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// A drop-in Pressable that springs down slightly on press instead of (or in
// addition to) a color/opacity change — cheap, native-driver-backed, no
// added dependency, used in place of plain Pressable for the app's primary
// tap targets (cards, chips, CTA buttons).
export function PressableScale({ onPress, disabled, style, children, ...accessibility }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue: number) => {
    Animated.spring(scale, { toValue, useNativeDriver: true, speed: 40, bounciness: 6 }).start();
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => animateTo(0.95)}
      onPressOut={() => animateTo(1)}
      style={[style, { transform: [{ scale }] }]}
      {...accessibility}
    >
      {children}
    </AnimatedPressable>
  );
}

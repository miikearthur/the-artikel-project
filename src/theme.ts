export const colors = {
  background: "#0d0c22",
  gradientTop: "#1c1840",
  surface: "#1e1c3f",
  surfaceAlt: "#29275a",
  surfaceHigh: "#332f66",
  text: "#f7f6fd",
  textMuted: "#a9a6d6",
  der: "#4d9fff",
  die: "#ff6b9d",
  das: "#4ddb9e",
  correct: "#4ddb9e",
  incorrect: "#ff6b6b",
  border: "#3d3a72",
};

// Top-to-bottom background wash, rendered once behind the whole app —
// subtle on purpose, just enough to break up the old flat single-color fill.
export const gradientColors = [colors.gradientTop, colors.background] as const;

export const articleColors: Record<"der" | "die" | "das", string> = {
  der: colors.der,
  die: colors.die,
  das: colors.das,
};

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Cross-platform shadow presets via RN's unified `boxShadow` style prop —
// real box-shadow on web, native shadow on iOS/Android, no shadowColor/
// elevation split and no extra dependency needed.
export const shadows = {
  card: {
    boxShadow: [{ offsetX: 0, offsetY: 10, blurRadius: 24, color: hexToRgba("#000000", 0.35) }],
  },
  soft: {
    boxShadow: [{ offsetX: 0, offsetY: 3, blurRadius: 10, color: hexToRgba("#000000", 0.22) }],
  },
};

// A colored ambient glow, used on the der/die/das buttons and primary CTAs
// so the accent color reads as light/depth rather than just a flat border.
export function glow(color: string, opacity = 0.4) {
  return {
    boxShadow: [{ offsetX: 0, offsetY: 0, blurRadius: 18, color: hexToRgba(color, opacity) }],
  };
}

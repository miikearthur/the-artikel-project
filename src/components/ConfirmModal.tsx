import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, glow, shadows } from "../theme";
import { PressableScale } from "./PressableScale";

interface Props {
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

// react-native-web's Alert.alert() is a documented no-op on web, so a real
// confirm dialog has to be a hand-rolled overlay rather than the RN Alert API.
export function ConfirmModal({ message, confirmLabel, cancelLabel, onConfirm, onCancel }: Props) {
  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onCancel} accessibilityLabel={cancelLabel} accessibilityRole="button" />
      <View style={styles.card}>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonRow}>
          <PressableScale
            style={styles.cancelButton}
            onPress={onCancel}
            accessibilityRole="button"
            accessibilityLabel={cancelLabel}
          >
            <Text style={styles.cancelText}>{cancelLabel}</Text>
          </PressableScale>
          <PressableScale
            style={styles.confirmButton}
            onPress={onConfirm}
            accessibilityRole="button"
            accessibilityLabel={confirmLabel}
          >
            <Text style={styles.confirmText}>{confirmLabel}</Text>
          </PressableScale>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 10,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(10, 10, 24, 0.75)",
  },
  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: colors.surfaceHigh,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
    gap: 20,
    ...shadows.card,
  },
  message: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    paddingVertical: 12,
    alignItems: "center",
  },
  cancelText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "700",
  },
  confirmButton: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: colors.incorrect,
    paddingVertical: 12,
    alignItems: "center",
    ...glow(colors.incorrect, 0.35),
  },
  confirmText: {
    color: "#1a0b0b",
    fontSize: 14,
    fontWeight: "800",
  },
});

import { StyleSheet, Platform } from "react-native";

export const SuccesSentStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "MulishMedium",
    width: "120%",
    alignSelf: "center",
  },
  blurView: {
    flex: 1,
    backgroundColor:
      Platform.OS === "android" ? "rgba(0, 40, 89, 0.5)" : "(0, 40, 89, 0.2)",
    paddingBottom: 20,
  },

  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    color: "#002859",
    lineHeight: 40.56,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 20,
    color: "#647184",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#035AC5",
    width: "90%",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    gap: 10,
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

import { StyleSheet, Platform } from "react-native";

export const CurrencyModalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  blurView: {
    flex: 1,
    backgroundColor:
      Platform.OS === "android" ? "rgba(0, 40, 89, 0.5)" : "(0, 40, 89, 0.2)",
    width: "100%",
    alignItems: "center",
  },
  modalView: {
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
    height: "50%",
    width: "95%",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "MulishMedium",
    lineHeight: 40.56,
    color: "#002859",
  },
  modalSubtitle: {
    fontFamily: "MulishMedium",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#647184",
  },
  btnOk: {
    backgroundColor: "#035AC5",
    fontFamily: "MulishMedium",
    borderRadius: 4,
    gap: 16,
    width: 320,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
  btnOkText: {
    color: "#FFFFFF",
    fontFamily: "MulishMedium",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 16,
  },
});

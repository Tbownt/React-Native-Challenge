import { StyleSheet } from "react-native";

export const NewPaymentStyles = StyleSheet.create({
  PaymentContainer: {
    backgroundColor: "#F9FAFC",
    width: "100%",
    height: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    // paddingBottom: 20,
  },
  btnContainer: { flexDirection: "row-reverse", gap: 10 },
  btnTitle: {
    fontFamily: "MulishMedium",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 25,
    color: "#035AC5",
  },
});

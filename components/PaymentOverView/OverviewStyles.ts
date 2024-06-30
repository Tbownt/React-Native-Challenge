import { StyleSheet } from "react-native";

export const OverviewStyles = StyleSheet.create({
  ContainerOverview: {
    backgroundColor: "#F9FAFC",
    width: "100%",
    height: 150,
    padding: 16,
    borderRadius: 12,
    gap: 8,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  ContentOverview: {
    justifyContent: "center",
    flexDirection: "row-reverse",
    gap: 8,
    width: "100%",
  },
  PaymentWrapper: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  TitleOverview: {
    fontFamily: "Mulish",
    lineHeight: 20,
    fontSize: 15,
    color: "#647184",
    textAlign: "center",
  },
  TotalAmount: {
    fontSize: 30,
    lineHeight: 38,
    fontFamily: "Mulish",
    color: "#002859",
  },
  WalletIcon: { width: 58, height: 58 },

  SubtitleAmount: {
    fontFamily: "Mulish",
    lineHeight: 16,
    fontSize: 15,
    color: "#647184",
  },
});

import { StyleSheet } from "react-native";

export const OverviewStyles = StyleSheet.create({
  ContainerOverview: {
    backgroundColor: "#F9FAFC",
    width: "100%",
    height: 114,
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
    fontFamily: "MulishMedium",
    fontWeight: "400",
    lineHeight: 20,
    fontSize: 15,
    color: "#647184",
    textAlign: "center",
    marginBottom: 5,
  },
  TotalAmount: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
    fontFamily: "MulishMedium",
    color: "#002859",
    // marginLeft: 3,
  },
  WalletIcon: { width: 58, height: 58 },

  SubtitleAmount: {
    fontFamily: "MulishMedium",
    fontWeight: "400",
    lineHeight: 16,
    fontSize: 12,
    color: "#647184",
  },
});

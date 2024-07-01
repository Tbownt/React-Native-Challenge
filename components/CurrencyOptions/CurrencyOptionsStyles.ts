import { StyleSheet } from "react-native";

export const currencyOptionsStyles = StyleSheet.create({
  containerOptions: {
    padding: 20,
    flexDirection: "column",
    gap: 40,
  },
  btnOptions: {
    flexDirection: "row",
    gap: 4,
  },
  imageOptions: {
    marginTop: 5,
    marginRight: 5,
  },
  wrapperOptions: { flexShrink: 1, flexBasis: "80%", flexGrow: 1 },
  titleOptions: {
    fontFamily: "Mulish",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
    color: "#002859",
  },
  subTitleOptions: {
    fontFamily: "MulishMedium",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: "#647184",
  },
  subjectOptions: { flexBasis: "6%", flexGrow: 1 },
});

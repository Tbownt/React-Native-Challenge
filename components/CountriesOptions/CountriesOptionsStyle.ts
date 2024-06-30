import { StyleSheet } from "react-native";

export const CountriesOptionsStyle = StyleSheet.create({
  containerOptions: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btnOptions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#EFF2F7",
    borderWidth: 1,
    padding: 15,
    marginVertical: 15,
  },
  imageOptions: {
    marginTop: 5,
  },
  wrapperOptions: { flexGrow: 1 },
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
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#647184",
  },
});

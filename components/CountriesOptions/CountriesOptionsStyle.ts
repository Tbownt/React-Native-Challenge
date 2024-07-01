import { StyleSheet } from "react-native";

export const CountriesOptionsStyle = StyleSheet.create({
  containerOptions: {
    flex: 1,
    padding: 20,
    width: "100%",
    gap: 40,
  },
  btnOptions: {
    flex: 1,
    flexDirection: "row",

    padding: 15,
    marginVertical: 15,
    gap: 4,
  },
  imageOptions: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  rounded: {
    borderRadius: 150,
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
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#647184",
  },
});

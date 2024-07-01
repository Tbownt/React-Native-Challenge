import { StyleSheet } from "react-native";

export const CurrencyPageStyle = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  inputWrapper: {
    marginTop: 5,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#E5E9F2",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 14,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  searchBar: {
    width: "90%",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "MulishMedium",
  },
  inputPlaceholder: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Mulish",
  },
});

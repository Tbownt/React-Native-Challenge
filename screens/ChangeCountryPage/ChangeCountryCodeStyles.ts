import { StyleSheet } from "react-native";

export const ChangeCountryCodeStyle = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  inputWrapper: {
    marginTop: 5,
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
    // borderColor: "black",
    // borderWidth: 2,
    width: "90%",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Mulish",
  },
  inputPlaceholder: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Mulish",
  },
});

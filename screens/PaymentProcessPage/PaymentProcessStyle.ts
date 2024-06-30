import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const getLeftPosition = () => {
  if (width <= 385) {
    return 290;
  } else if (width <= 393) {
    return 300;
  } else {
    return 320;
  }
};

export const paymentPageStyle = StyleSheet.create({
  containerPage: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    width: "100%",
  },
  childrenContainer: {
    flex: 1,
    width: "100%",
    marginVertical: 16,
    gap: 25,
  },
  shareQrContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareQrContent: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D3DCE6",
  },
  shareQrIcon: {
    marginLeft: 10,
  },
  shareQrClipboard: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    borderRadius: 6,
    paddingRight: 10,
    width: "70%",
  },
  shareQrButtonText: {
    fontSize: 16,
    fontFamily: "MulishMedium",
    fontWeight: "400",
    textAlign: "justify",
    lineHeight: 15,
    color: "#002859",
  },
  shareQrImage: {
    height: 61.5,
    width: 61.5,
  },
  inputIcon: {
    // height: 65,
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D3DCE6",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 50,
    borderRadius: 6,
    width: "100%",
  },
  inputContentFocused: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#035AC5",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 50,
    borderRadius: 6,
    width: "100%",
  },
  inputContainerWhatsApp: {
    width: "100%",
    alignItems: "center",
    height: 65,
  },
  inputContentWhatsApp: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#D3DCE6",
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 5,
  },
  inputContentWhatsAppFocused: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#035AC5",
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    paddingRight: 5,
  },
  inputTextStyleWhatsApp: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginRight: 15,
    borderRadius: 6,
    textAlign: "left",
    width: "80%",
    fontSize: 16,
    fontFamily: "MulishMedium",
    color: "#002859",
  },
  inputImage: {
    width: 25,
    height: 25,
  },
  pressableInput: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 12,
    borderRadius: 6,
    height: 65,
    justifyContent: "center",
  },
  pressableTitle: {
    fontSize: 16,
    fontFamily: "MulishMedium",
    color: "#002859",
  },
  inputTextStyle: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 12,
    borderRadius: 6,
    width: "90%",
    fontSize: 16,
    fontFamily: "MulishMedium",
    color: "#002859",
    height: 65,
  },

  btnSendEvent: {
    backgroundColor: "#035AC5",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 10,
  },
  btnSendEventWhatsApp: {
    position: "absolute",
    left: getLeftPosition(),
    backgroundColor: "#035AC5",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 10,
  },
  btnSendEventDisabled: {
    display: "none",
  },
  btnChangeCountryCode: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    height: "100%",
    width: "20%",
  },
  btnChangeCountryCodeNonVisible: {
    display: "none",
  },
  btnSendTitle: {
    color: "#FFFFFF",
    fontFamily: "MulishMedium",
  },
  btnChangePhoneNumber: {
    fontFamily: "MulishMedium",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    fontWeight: "400",
    color: "#002859",
  },
});
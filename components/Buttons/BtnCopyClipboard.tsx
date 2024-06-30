import { useStateManagment } from "@/hooks/useStateManagment";
import { paymentPageStyle } from "@/screens/PaymentProcessPage/PaymentProcessStyle";
import { Image, Pressable, Text, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-root-toast";

const qrImage = require("../../assets/images/qrimage.png");
const qrIcon = require("../../assets/images/link.png");

export const BtnCopyClipboard = () => {
  const { currencyState, navigator } = useStateManagment();

  const copyText = async (text: string) => {
    const url = await Clipboard.setStringAsync(text);
    Toast.show("Copiado al Portapapeles", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });

    return url;
  };

  return (
    <View style={paymentPageStyle.shareQrContainer}>
      <View style={paymentPageStyle.shareQrContent}>
        <Image source={qrIcon} style={paymentPageStyle.shareQrIcon} />
        <Pressable
          style={paymentPageStyle.shareQrClipboard}
          onPress={() => copyText(currencyState.web_url)}
        >
          <Text style={paymentPageStyle.shareQrButtonText} numberOfLines={1}>
            {currencyState.web_url.length > 0
              ? currencyState.web_url
              : "pay.bitnovo.com"}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigator.navigate("QrPage")}>
        <Image source={qrImage} style={paymentPageStyle.shareQrImage} />
      </Pressable>
    </View>
  );
};

import { Image, Pressable, Text, View, Share } from "react-native";
import { paymentPageStyle } from "@/screens/PaymentProcessPage/PaymentProcessStyle";
import { useStateManagment } from "../../hooks/useStateManagment";

const exportIcon = require("../../assets/images/export.png");

export const ShareWithOtherApps = () => {
  const { currencyState } = useStateManagment();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: currencyState.web_url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Compartido con actividad:", result.activityType);
        } else {
          console.log("Compartido");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Compartir cancelado");
      }
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  return (
    <View style={paymentPageStyle.inputIcon}>
      <View style={paymentPageStyle.inputContent}>
        <Image source={exportIcon} style={paymentPageStyle.inputIcon} />
        <Pressable
          style={paymentPageStyle.pressableInput}
          onPress={() => onShare()}
        >
          <Text style={paymentPageStyle.pressableTitle}>
            Compartir con otras aplicaciones
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

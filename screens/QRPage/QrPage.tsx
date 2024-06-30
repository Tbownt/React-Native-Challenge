import { View, Text, Image, ActivityIndicator, Dimensions } from "react-native";
import Qrcode from "react-native-qrcode-svg";
import { useFormPayment } from "@/hooks/useFormPayment";
import { QrPageStyles } from "./QrPageStyles";
import { useStateManagment } from "@/hooks/useStateManagment";

const infoCircle = require("../../assets/images/info-circle.png");

export const QrPage = () => {
  const { currencyState } = useStateManagment();
  const { checkCurrency } = useFormPayment();
  const { width } = Dimensions.get("window");

  return (
    <View style={QrPageStyles.containerPage}>
      <View style={QrPageStyles.pageContent}>
        <Image source={infoCircle} />
        <Text>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </Text>
      </View>
      <View style={QrPageStyles.qrBackground}>
        {currencyState.web_url.length < 1 ? (
          <ActivityIndicator size="large" />
        ) : (
          <Qrcode
            value={currencyState.web_url}
            size={width > 400 ? 340 : 280}
          />
        )}
      </View>
      <Text style={QrPageStyles.totalAmount}>
        {currencyState.web_url.length < 1 ? (
          <ActivityIndicator />
        ) : (
          `${currencyState.amount} ${checkCurrency()}`
        )}
      </Text>
      <Text style={QrPageStyles.refreshAdvice}>
        Esta pantalla se actualizará automáticamente.
      </Text>
    </View>
  );
};

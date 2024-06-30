import { Image, Text, View } from "react-native";
import { useFormPayment } from "@/hooks/useFormPayment";
import { useStateManagment } from "@/hooks/useStateManagment";
import { OverviewStyles } from "./OverviewStyles";

const moneyTimer = require("../../assets/images/money-time.png");

export const PaymentOverview = () => {
  const { currencyState } = useStateManagment();
  const { checkCurrency } = useFormPayment();
  return (
    <View style={OverviewStyles.ContainerOverview}>
      <View style={OverviewStyles.ContentOverview}>
        <View style={OverviewStyles.PaymentWrapper}>
          <Text
            style={{
              ...OverviewStyles.TitleOverview,
              fontWeight: 700,
            }}
          >
            Solicitud de pago
          </Text>
          <Text
            style={{
              ...OverviewStyles.TotalAmount,
              fontWeight: 700,
            }}
          >{`${currencyState.amount} ${checkCurrency()}`}</Text>
        </View>
        <Image source={moneyTimer} style={OverviewStyles.WalletIcon} />
      </View>
      <Text
        style={{
          ...OverviewStyles.SubtitleAmount,
          fontWeight: 700,
        }}
      >
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
};

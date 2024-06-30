import { useStateManagment } from "@/hooks/useStateManagment";
import { clearState } from "@/store/currencySlice";
import { Pressable, Text, Image, View } from "react-native";
import { NewPaymentStyles } from "./NewPaymentStyles";

const wallet = require("../../assets/images/wallet.png");

export const NewPayment = () => {
  const { dispatch, navigator } = useStateManagment();

  const newProcess = () => {
    dispatch(clearState());
    navigator.navigate("Home");
  };

  return (
    <View style={NewPaymentStyles.PaymentContainer}>
      <Pressable
        style={NewPaymentStyles.btnContainer}
        onPress={() => newProcess()}
      >
        <Image source={wallet} />
        <Text
          style={{
            ...NewPaymentStyles.btnTitle,
            fontWeight: 700,
          }}
        >
          Nueva solicitud
        </Text>
      </Pressable>
    </View>
  );
};

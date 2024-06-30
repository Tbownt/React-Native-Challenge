import { Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useStateManagment } from "@/hooks/useStateManagment";
import { CurrencyButtonStyles } from "./ChangeCurrencyButtonStyles";

export const ChangeCurrencyButton = () => {
  const { navigator, currencyState } = useStateManagment();

  return (
    <Pressable
      style={CurrencyButtonStyles.containerCurrencyButton}
      onPress={() => navigator.navigate("ChangeCurrencyPage")}
    >
      <Text style={CurrencyButtonStyles.textButtonCurrency}>
        {currencyState.currency.toString()}
      </Text>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#002859" />
    </Pressable>
  );
};

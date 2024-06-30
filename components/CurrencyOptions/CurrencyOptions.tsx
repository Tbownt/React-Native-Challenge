import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useStateManagment } from "@/hooks/useStateManagment";
import currencyData from "../../utils/currencyData";
import { currentCurrency } from "@/store/currencySlice";
import { currencyOptionsStyles } from "./CurrencyOptionsStyles";

interface Props {
  searchCurrency: string;
}

export const CurrencyOptions = ({ searchCurrency }: Props) => {
  const { dispatch, navigator } = useStateManagment();

  const setCurrency = (e: string) => {
    dispatch(currentCurrency(e));
    navigator.navigate("Home");
  };

  const getCurrencyByName = (name = "") => {
    name = name.toLowerCase().trim();
    if (name.length === 0) return currencyData;
    return currencyData.filter((currency) =>
      currency.name.toLowerCase().includes(name)
    );
  };

  const filtered = getCurrencyByName(searchCurrency);

  return (
    <View style={currencyOptionsStyles.containerOptions}>
      {filtered.map((flag) => (
        <TouchableOpacity
          key={flag.name}
          style={currencyOptionsStyles.btnOptions}
          onPress={() => setCurrency(flag.currency)}
        >
          <Image
            source={flag.image}
            style={currencyOptionsStyles.imageOptions}
          />
          <View style={currencyOptionsStyles.wrapperOptions}>
            <Text style={currencyOptionsStyles.titleOptions}>{flag.name}</Text>
            <Text style={currencyOptionsStyles.subTitleOptions}>
              {flag.currency}
            </Text>
          </View>
          <Text style={currencyOptionsStyles.subjectOptions}>
            <AntDesign name="right" size={18} color="black" />
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

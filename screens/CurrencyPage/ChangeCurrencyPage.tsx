import { useState } from "react";
import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CurrencyOptions } from "@/components/CurrencyOptions/CurrencyOptions";
import { CurrencyPageStyle } from "./ChangeCurrencyPageStyles";

export const ChangeCurrencyPage = () => {
  const [searchCurrency, setSearchCurrency] = useState("");

  return (
    <View style={CurrencyPageStyle.pageContainer}>
      <View style={CurrencyPageStyle.inputWrapper}>
        <AntDesign name="search1" size={20} color="#647184" />
        <TextInput
          style={CurrencyPageStyle.searchBar}
          placeholder="Buscar"
          onChangeText={setSearchCurrency}
          value={searchCurrency}
        />
      </View>
      <CurrencyOptions searchCurrency={searchCurrency} />
    </View>
  );
};

import { useState } from "react";
import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ChangeCountryCodeStyle } from "./ChangeCountryCodeStyles";
import { CountriesOptions } from "@/components/CountriesOptions/CountriesOptions";

export const ChangeCountryCode = () => {
  const [searchCountry, setSearchCountry] = useState("");

  const handleChange = (value: string) => {
    setSearchCountry(value);
  };

  return (
    <View style={ChangeCountryCodeStyle.pageContainer}>
      <View style={ChangeCountryCodeStyle.inputWrapper}>
        <AntDesign name="search1" size={20} color="#647184" />
        <TextInput
          style={ChangeCountryCodeStyle.searchBar}
          placeholder="Buscar"
          value={searchCountry}
          onChangeText={handleChange}
        />
      </View>
      <CountriesOptions searchCountry={searchCountry} />
    </View>
  );
};

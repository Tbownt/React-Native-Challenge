import { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CountriesOptionsStyle } from "./CountriesOptionsStyle";
import { useStateManagment } from "../../hooks/useStateManagment";
import { setWsCode } from "@/store/currencySlice";
import { countriesData } from "@/utils/countriesData";
import { CountriesOptionsProps, CountryArr } from "@/types";

export const CountriesOptions: React.FC<CountriesOptionsProps> = ({
  searchCountry,
}) => {
  const { dispatch, navigator } = useStateManagment();
  const [filteredCountries, setFilteredCountries] = useState<CountryArr[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filtered = getCountriesByName(searchCountry);
    setFilteredCountries(filtered.slice(0, 20));
    setPage(1);
  }, [searchCountry]);

  const getCountriesByName = (name: string = "") => {
    name = name.toLowerCase().trim();
    if (name.length === 0) return countriesData;
    return countriesData.filter((country) =>
      country.name.toLowerCase().includes(name)
    );
  };

  const setDialCode = (code: string) => {
    dispatch(setWsCode(code));
    navigator.navigate("PaymentProcess");
  };

  const loadMore = () => {
    if (!loading) {
      setLoading(true);
      const filtered = getCountriesByName(searchCountry);
      const newPage = page + 1;
      setFilteredCountries((prevCountries) => [
        ...prevCountries,
        ...filtered.slice(page * 20, newPage * 20),
      ]);
      setPage(newPage);
      setLoading(false);
    }
  };

  return (
    <View style={CountriesOptionsStyle.containerOptions}>
      <FlatList
        style={{ width: "100%" }}
        data={filteredCountries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={CountriesOptionsStyle.btnOptions}
            onPress={() => setDialCode(item.dialCode)}
            activeOpacity={0.2}
          >
            <View style={CountriesOptionsStyle.wrapperOptions}>
              <Text style={CountriesOptionsStyle.titleOptions}>
                {item.dialCode}
              </Text>
              <Text style={CountriesOptionsStyle.subTitleOptions}>
                {item.name}
              </Text>
            </View>
            <AntDesign name="right" size={18} color="black" />
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
};

import { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  ImageBackground,
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
  const { dispatch, navigator, currencyState } = useStateManagment();
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
            activeOpacity={0.1}
          >
            <Image
              source={{
                uri: `https://flagcdn.com/w80/${item.code.toLowerCase()}.png`,
              }}
              style={CountriesOptionsStyle.imageOptions}
            />

            <View style={CountriesOptionsStyle.wrapperOptions}>
              <Text style={CountriesOptionsStyle.titleOptions}>
                {item.dialCode}
              </Text>
              <Text style={CountriesOptionsStyle.subTitleOptions}>
                {item.name}
              </Text>
            </View>
            {currencyState.wsCode === item.dialCode ? (
              <AntDesign
                name="checkcircle"
                size={18}
                color="rgb(91,209,215)"
                style={{ alignSelf: "center" }}
              />
            ) : (
              <AntDesign
                name="right"
                size={18}
                color="black"
                style={{ alignSelf: "center" }}
              />
            )}
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

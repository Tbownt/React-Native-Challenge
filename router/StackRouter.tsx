import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import {
  Home,
  ChangeCountryCode,
  ChangeCurrencyPage,
  PaymentProcess,
  QrPage,
} from "@/screens";
import { ChangeCurrencyButton } from "@/components/Buttons";

const Stack = createNativeStackNavigator();

export const StackRouter = () => {
  const [fontsLoaded] = useFonts({
    Mulish: require("../assets/fonts/Mulish-VariableFont_wght.ttf"),
    MulishMedium: require("../assets/fonts/Mulish-Medium.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerRight: () => <ChangeCurrencyButton />,
            title: "Crear pago",
            headerTitleStyle: {
              color: "#002859",
              fontFamily: "Mulish",
              fontWeight: "700",
              fontSize: 18,
            },
          }}
        />
        <Stack.Screen
          name="ChangeCurrencyPage"
          component={ChangeCurrencyPage}
          options={{
            title: "Selecciona una divisa",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#002859",
              fontFamily: "Mulish",
              fontWeight: "700",
              fontSize: 18,
            },
            headerTintColor: "#002859",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="PaymentProcess"
          component={PaymentProcess}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="QrPage"
          component={QrPage}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="ChangeCountryCode"
          component={ChangeCountryCode}
          options={{
            title: "Seleccionar país",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#002859",
              fontFamily: "Mulish",
              fontWeight: "700",
              fontSize: 20,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

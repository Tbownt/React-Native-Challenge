import { useState } from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import * as Linking from "expo-linking";
import { useStateManagment } from "@/hooks/useStateManagment";
import { whatsappIcon } from "@/screens/PaymentProcessPage";
import { paymentPageStyle } from "@/screens/PaymentProcessPage/PaymentProcessStyle";
import { AntDesign } from "@expo/vector-icons";
import { SuccessSentModal } from "../Modals/SuccessSentModal";

export const ShareWhatsAppNumber = () => {
  const { currencyState, navigator } = useStateManagment();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showCountrieBtn, setShowCountrieBtn] = useState(false);

  const sendMessage = () => {
    const fullPhoneNumber = currencyState.wsCode + phoneNumber;
    const url = `whatsapp://send?phone=${fullPhoneNumber}&text=${encodeURIComponent(
      currencyState.web_url
    )}`;
    Linking.openURL(url)
      .then(() => {
        setModalVisible(true);
        setShowCountrieBtn(false);
        setPhoneNumber("");
      })
      .catch(() => {
        Alert.alert(
          "Error",
          "Parece que WhatsApp no está instalado en tu dispositivo."
        );
      });
  };

  return (
    <View style={paymentPageStyle.inputContainerWhatsApp}>
      <View
        style={
          isFocused
            ? paymentPageStyle.inputContentWhatsAppFocused
            : paymentPageStyle.inputContentWhatsApp
        }
      >
        <Image source={whatsappIcon} />
        <Pressable
          onPressIn={() => navigator.navigate("ChangeCountryCode")}
          style={
            showCountrieBtn
              ? paymentPageStyle.btnChangeCountryCode
              : paymentPageStyle.btnChangeCountryCodeNonVisible
          }
        >
          <Text
            style={paymentPageStyle.btnChangePhoneNumber}
            ellipsizeMode="tail"
          >
            {currencyState.wsCode.length > 0 ? currencyState.wsCode : "+1"}
          </Text>
          <AntDesign name="down" size={16} />
        </Pressable>
        <TextInput
          placeholder={
            isFocused ? "123-456-789" : "Enviar a número de WhatsApp"
          }
          placeholderTextColor="#002859"
          style={paymentPageStyle.inputTextStyleWhatsApp}
          onChangeText={setPhoneNumber}
          keyboardType="number-pad"
          value={phoneNumber}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onPress={() => setShowCountrieBtn(true)}
        />
        <Pressable
          style={
            phoneNumber.length > 0
              ? paymentPageStyle.btnSendEventWhatsApp
              : paymentPageStyle.btnSendEventDisabled
          }
          onPressIn={sendMessage}
          disabled={phoneNumber.length > 0 ? false : true}
        >
          <Text style={{ ...paymentPageStyle.btnSendTitle, fontWeight: 700 }}>
            Enviar
          </Text>
        </Pressable>
      </View>
      <SuccessSentModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

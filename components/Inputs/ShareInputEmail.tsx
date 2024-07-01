import { useState } from "react";
import { Image, TextInput, View, Pressable, Text } from "react-native";
import { paymentPageStyle } from "@/screens/PaymentProcessPage/PaymentProcessStyle";
import { useSendEmail } from "@/hooks/useSendEmail";
import { emailIcon } from "@/screens/PaymentProcessPage";

export const ShareInputEmail = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { email, setEmail, sendEmail } = useSendEmail();

  return (
    <View
      style={
        isFocused
          ? paymentPageStyle.inputContentFocused
          : paymentPageStyle.inputContent
      }
    >
      <Image source={emailIcon} />
      <TextInput
        placeholder={"Enviar por correo electrónico"}
        placeholderTextColor="#002859"
        style={paymentPageStyle.inputTextStyle}
        value={email}
        onChangeText={setEmail}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Pressable
        onPress={() => sendEmail()}
        style={
          email.length > 0
            ? paymentPageStyle.btnSendEvent
            : paymentPageStyle.btnSendEventDisabled
        }
        disabled={email.length > 0 ? false : true}
      >
        <Text style={paymentPageStyle.btnSendTitle}>Enviar</Text>
      </Pressable>
    </View>
  );
};

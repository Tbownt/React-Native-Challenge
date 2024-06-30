import { useState } from "react";
import {
  Pressable,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { homeStyles } from "./HomeStyles";
import { useFormPayment } from "@/hooks/useFormPayment";
import { DissmissKeyBoard } from "@/components/DissmissKeyboard/DissmissKeyBoard";

export const Home = () => {
  const {
    characterCountText,
    checkCurrency,
    handleChange,
    handleSubmit,
    paymentForm,
    formatAmount,
  } = useFormPayment();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DissmissKeyBoard>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
          style={
            Platform.OS === "android"
              ? homeStyles.homeContainer
              : homeStyles.homeContainerIos
          }
        >
          <View style={homeStyles.homeDirection}>
            <Text
              style={
                Number(paymentForm.expected_output_amount) >= 0.1
                  ? homeStyles.fiatStyleValid
                  : homeStyles.fiatStyle
              }
            >
              {checkCurrency() + " "}
            </Text>
            <TextInput
              keyboardType="numeric"
              style={
                Number(paymentForm.expected_output_amount) >= 0.1
                  ? homeStyles.fiatAmountInputValid
                  : homeStyles.fiatAmountInput
              }
              value={paymentForm.expected_output_amount}
              onChangeText={(value) => {
                const formattedValue = formatAmount(value);
                handleChange("expected_output_amount", formattedValue);
              }}
              maxLength={10}
            />
          </View>

          <View style={homeStyles.conceptInputContainer}>
            <Text style={homeStyles.subjectInput}>Concepto</Text>
            <TextInput
              placeholder="Añade descripción del pago"
              style={
                isFocused
                  ? homeStyles.conceptInputFocused
                  : homeStyles.conceptInput
              }
              maxLength={140}
              numberOfLines={3}
              multiline
              value={paymentForm.note}
              onChangeText={(value) => handleChange("note", value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Text
              style={
                paymentForm.note.length > 0
                  ? homeStyles.limitCharacters
                  : homeStyles.nonVisibleCharacters
              }
            >
              {characterCountText}
            </Text>
          </View>

          <Pressable
            style={
              Number(paymentForm.expected_output_amount) >= 0.1
                ? homeStyles.submitEnabled
                : homeStyles.submitDisabled
            }
            onPress={() => handleSubmit()}
            disabled={
              Number(paymentForm.expected_output_amount) < 0.1 ? true : false
            }
          >
            <Text
              style={
                Number(paymentForm.expected_output_amount)
                  ? homeStyles.buttonContentEnabled
                  : homeStyles.buttonContentDisabled
              }
            >
              Continuar
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </DissmissKeyBoard>
    </SafeAreaView>
  );
};

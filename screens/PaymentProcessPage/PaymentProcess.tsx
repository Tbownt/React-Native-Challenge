import { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, View, Platform } from "react-native";
import { CurrencyModal } from "@/components/Modals";
import { PaymentOverview } from "@/components/PaymentOverView";
import { ShareInputEmail, ShareWhatsAppNumber } from "@/components/Inputs";
import {
  BtnCopyClipboard,
  NewPayment,
  ShareWithOtherApps,
} from "@/components/Buttons";
import { DissmissKeyBoard } from "@/components/DissmissKeyboard";
import { paymentPageStyle } from "./PaymentProcessStyle";
import { useStateManagment } from "@/hooks/useStateManagment";
import { handleSocketMessage } from "@/utils/checkStatusData";
import { showModal } from "@/store/currencySlice";

const apiUrl = process.env.EXPO_PUBLIC_API;

export const PaymentProcess = () => {
  const { currencyState, dispatch } = useStateManagment();

  const [handleModal, setHandleModal] = useState("");

  const socket = new WebSocket(`${apiUrl + currencyState.identifier}`);

  useEffect(() => {
    socket.onopen = () => {
      console.log("Connection stablished");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleSocketMessage(data?.status, setHandleModal, dispatch, showModal);
    };
    return () => {
      socket.onclose = (event) => {
        console.log("WebSocket closed:", event.reason);
      };
    };
  }, [socket]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={90}
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <DissmissKeyBoard>
        <ScrollView contentContainerStyle={{ flexGrow: 3 }}>
          <View style={paymentPageStyle.containerPage}>
            <PaymentOverview />
            <View style={paymentPageStyle.childrenContainer}>
              <BtnCopyClipboard />
              <ShareInputEmail />
              <ShareWhatsAppNumber />
              <ShareWithOtherApps />
            </View>
            <NewPayment />
          </View>
        </ScrollView>
      </DissmissKeyBoard>
      <CurrencyModal handleModal={handleModal} />
    </KeyboardAvoidingView>
  );
};

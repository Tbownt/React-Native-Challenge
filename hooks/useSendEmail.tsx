import { useState } from "react";
import { Alert } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { useStateManagment } from "./useStateManagment";

export const useSendEmail = () => {
  const [email, setEmail] = useState("");
  const { currencyState } = useStateManagment();

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  // Función para enviar el correo electrónico
  const sendEmail = () => {
    if (!validateEmail(email)) {
      Alert.alert(
        "Error",
        "Por favor, introduce una dirección de correo válida."
      );
      return;
    }

    MailComposer.composeAsync({
      recipients: [email],
      subject: "Link a la pasarela de Bitnovo",
      body: `Hola, aquí tienes el enlace hacia la pasarela: ${currencyState.web_url}`,
    });
  };
  return {
    sendEmail,
    email,
    setEmail,
  };
};

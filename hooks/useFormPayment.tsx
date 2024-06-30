import { useMemo, useState } from "react";
import { useStateManagment } from "./useStateManagment";
import { createPayment } from "@/store/thunks";
import { setAmount } from "@/store/currencySlice";

export const useFormPayment = () => {
  const initialFormState = {
    expected_output_amount: "0.00",
    note: "",
    currency: "USD",
  };
  const { currencyState, dispatch, navigator } = useStateManagment();

  const [paymentForm, setPaymentForm] = useState(initialFormState);

  const handleChange = (name: string, value: string) => {
    setPaymentForm({
      ...paymentForm,
      [name]: value,
      currency: currencyState.currency.toString(),
    });
  };

  const handleSubmit = () => {
    if (paymentForm === initialFormState) {
      return;
    }
    if (Number(paymentForm.expected_output_amount) >= 0.1) {
      dispatch(setAmount(paymentForm.expected_output_amount));
      dispatch(createPayment(paymentForm));
      setPaymentForm(initialFormState);
      navigator.navigate("PaymentProcess");
    }
  };

  const checkCurrency = () => {
    if (currencyState.currency === "EUR") {
      return "€";
    } else if (currencyState.currency === "USD") {
      return "$";
    } else {
      return "£";
    }
  };

  const characterCountText = useMemo(() => {
    return `${paymentForm.note.length}/140 caracteres`;
  }, [paymentForm.note.length]);

  const formatAmount = (value: string) => {
    // Remove letters
    const cleanInput = value.replace(/\D/g, "");

    if (cleanInput === "") {
      return "0.00";
    }

    // Remove leading zeros from the input
    const trimmedInput = cleanInput.replace(/^0+/, "");

    // Extract the integer part of the number, defaulting to '0' if empty
    const integerPart = trimmedInput.slice(0, -2) || "0";

    // Extract the decimal part of the number, padding with zeros if necessary
    const decimalPart = trimmedInput.slice(-2).padStart(2, "0");

    // Combine integer and decimal parts
    const formattedInput = `${integerPart}.${decimalPart}`;
    return `${formattedInput}`;
  };

  return {
    characterCountText,
    checkCurrency,
    handleSubmit,
    handleChange,
    paymentForm,
    formatAmount,
  };
};

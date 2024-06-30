import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaymentStructure } from "@/types";
import axios from "axios";

const headers = process.env.EXPO_PUBLIC_HEADERS;
const paymentApi = process.env.EXPO_PUBLIC_CREATE_PAYMENT;

export const createPayment = createAsyncThunk(
  "createPayment/post",
  async (data: PaymentStructure) => {
    try {
      const response = await axios.post(`${paymentApi}`, data, {
        headers: {
          "X-Device-Id": `${headers}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

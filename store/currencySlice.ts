import { CurrencyState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { createPayment } from "./thunks";

const initialState: CurrencyState = {
  currency: "USD",
  isModalShown: false,
  identifier: "",
  web_url: "",
  error: {},
  isLoading: false,
  amount: "",
  wsCode: "",
};

export const currencySlice = createSlice({
  name: "Currency",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
    currentCurrency: (state, { payload }) => {
      state.currency = payload;
    },
    setAmount: (state, { payload }) => {
      state.amount = payload;
    },
    setWsCode: (state, { payload }) => {
      state.wsCode = payload;
    },
    clearState: (state) => {
      state.amount = "";
      state.currency = "USD";
      state.error = {};
      state.identifier = "";
      state.isLoading = false;
      state.isModalShown = false;
      state.web_url = "";
      state.wsCode = "";
    },
  },
  extraReducers: (builder) => {
    const formatUrl = (url: string) => {
      return url.replace(/^https?:\/\//, "");
    };
    builder.addCase(createPayment.fulfilled, (state, { payload }) => {
      state.identifier = payload.identifier;
      state.web_url = formatUrl(payload.web_url);
      state.isLoading = false;
    });
    builder.addCase(createPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPayment.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const { showModal, currentCurrency, setAmount, setWsCode, clearState } =
  currencySlice.actions;

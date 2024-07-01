export type NavigatorType = StackNavigationProp<RootStackParams>;

export type RootStackParams = {
  Home: undefined;
  PaymentProcess: undefined;
  ChangeCurrencyPage: undefined;
  QrPage: undefined;
};

export interface CurrentFiat {
  fiat: "USD" | "EUR" | "GBP";
}

export interface CurrencyState {
  currency: CurrentFiat | string;
  isModalShown: boolean;
  identifier: string;
  web_url: string;
  error: object | unknown;
  isLoading: boolean;
  amount: string;
  wsCode: "";
}

export interface PaymentStructure {
  expected_output_amount: string;
  note: string;
  currency: CurrencyAvailables;
}

export interface ModalStatusProps {
  handleModal: "CA" | "CO" | "EX" | "IA" | string;
}

export interface SuccessSentModalProps {
  visible: boolean;
  onClose?: () => void;
}

interface CountriesOptionsProps {
  searchCountry: string;
}

export interface CountryArr {
  id: number;
  name: string;
  dialCode: string;
  code: string;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

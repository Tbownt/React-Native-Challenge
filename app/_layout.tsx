import { StackRouter as CurrencyRouter } from "@/router/StackRouter";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { RootSiblingParent } from "react-native-root-siblings";
import "react-native-svg";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <CurrencyRouter />
      </RootSiblingParent>
    </Provider>
  );
}

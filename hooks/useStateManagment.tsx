import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useNavigation } from "@react-navigation/native";
import { NavigatorType } from "@/types";

export const useStateManagment = () => {
  const navigator = useNavigation<NavigatorType>();
  const dispatch = useDispatch<AppDispatch>();
  const currencyState = useSelector((state: RootState) => state.currency);

  return {
    dispatch,
    currencyState,
    navigator,
  };
};

import { ReactNode } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

type DismissKeyboardProps = {
  children: ReactNode;
};

export const DissmissKeyBoard = ({ children }: DismissKeyboardProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

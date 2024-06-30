import { View, Modal, Text, Pressable, Image } from "react-native";
import { CurrencyModalStyles } from "./CurrencyModalStyles";
import { useStateManagment } from "@/hooks/useStateManagment";
import { BlurView } from "expo-blur";
import { showModal } from "@/store/currencySlice";
import { getModalContent } from "@/utils/getModalContent";
import { ModalStatusProps } from "@/types";
import Warning from "../Svgs/Warning";

const successIcon = require("../../assets/images/IconSucces.png");

export const CurrencyModal = ({ handleModal }: ModalStatusProps) => {
  const { currencyState, dispatch, navigator } = useStateManagment();

  const modalContent = getModalContent(handleModal);

  const resetAndClose = () => {
    dispatch(showModal());
    navigator.navigate("Home");
  };

  const closeModal = () => {
    dispatch(showModal());
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={currencyState.isModalShown}
    >
      <BlurView intensity={100} style={CurrencyModalStyles.blurView}>
        <View style={CurrencyModalStyles.centeredView}>
          <View style={CurrencyModalStyles.modalView}>
            {handleModal === "CO" ? (
              <Image source={successIcon} style={{ marginBottom: 20 }} />
            ) : (
              <Warning />
            )}
            <Text style={CurrencyModalStyles.modalText}>
              {modalContent?.title}
            </Text>
            <Text style={CurrencyModalStyles.modalSubtitle}>
              {modalContent?.message}
            </Text>
            {handleModal === "IA" ? (
              <Pressable
                style={CurrencyModalStyles.btnOk}
                onPress={() => closeModal()}
              >
                <Text style={CurrencyModalStyles.btnOkText}>Entendido</Text>
              </Pressable>
            ) : (
              <Pressable
                style={CurrencyModalStyles.btnOk}
                onPress={() => resetAndClose()}
              >
                <Text style={CurrencyModalStyles.btnOkText}>Entendido</Text>
              </Pressable>
            )}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

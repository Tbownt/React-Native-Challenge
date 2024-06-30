import React from "react";
import { Modal, View, Text, Pressable, Image } from "react-native";
import { SuccesSentStyles } from "./SuccessSentModalStyles";
import { BlurView } from "expo-blur";
import { SuccessSentModalProps } from "@/types";

const successIcon = require("../../assets/images/IconSucces.png");

export const SuccessSentModal = ({
  visible,
  onClose,
}: SuccessSentModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <BlurView intensity={100} style={SuccesSentStyles.blurView}>
        <View style={SuccesSentStyles.modalOverlay}>
          <View style={SuccesSentStyles.modalContent}>
            <Image source={successIcon} style={{ marginVertical: 25 }} />
            <Text style={SuccesSentStyles.modalTitle}>Solicitud enviada</Text>
            <Text style={SuccesSentStyles.modalSubtitle}>
              Tu solicitud de pago ha sido enviada con éxito por WhatsApp.
            </Text>
            <Pressable style={SuccesSentStyles.button} onPress={onClose}>
              <Text style={SuccesSentStyles.buttonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export const getModalContent = (state: string) => {
  if (state === "CA") {
    return {
      title: "Solicitud Cancelada",
      message: "Tu solicitud de pago ha sido cancelada.",
    };
  } else if (state === "CO") {
    return {
      title: "Solicitud Confirmada",
      message: "Tu pago ha sido confirmado con éxito.",
    };
  } else if (state === "EX") {
    return {
      title: "Solicitud Expirada",
      message: "La sesion del pago expiro, por favor intente de nuevo",
    };
  } else if (state === "IA") {
    return {
      title: "Monto insuficiente",
      message:
        "El monto depositado es menor al requerido, por favor ingrese el monto completo",
    };
  }
};

export const handleSocketMessage = (
  data: string,
  setHandleModal: Function,
  dispatch: Function,
  showModal: Function
) => {
  switch (data) {
    case "CO":
      setHandleModal("CO");
      dispatch(showModal());
      break;
    case "CA":
      setHandleModal("CA");
      dispatch(showModal());
      break;
    case "IA":
      setHandleModal("IA");
      dispatch(showModal());
      break;
    case "EX":
      setHandleModal("EX");
      dispatch(showModal());
      break;
    default:
      console.log("Unknown status:", data);
      break;
  }
};

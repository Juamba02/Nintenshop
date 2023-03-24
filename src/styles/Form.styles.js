const styles = {
    formDiv: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "80vh",
      backgroundColor: "white",
      padding: "3em",
      borderRadius: "3px",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "35%",
      alignItems: "center",
    },
    inputDiv: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    input: {
      height: "2em",
      marginBottom: "1em",
    },
    confirmInactive: {
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      marginBottom: "1em",
      width: "30%",
    },
    confirmActive: {
      backgroundColor: "#D60000",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      cursor: "pointer",
      marginBottom: "1em",
      width: "30%",
    },
    cancel: {
      background: "none",
      border: "none",
      color: "grey",
      textDecoration: "underline",
    },
    modal: {
      backgroundColor: "white",
      width: "45%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      padding: "3em",
    },
    modalInactive: {
      display: "none",
    },
    modalActive: {
      backgroundColor: "rgba(0, 0, 0, 0.211)",
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "1",
      overflow: "hidden",
      outline: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    backInactive: {
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      marginBottom: "1em",
      width: "100%",
    },
    backActive: {
      backgroundColor: "#D60000",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      cursor: "pointer",
      marginBottom: "1em",
      width: "100%",
    },
  };

export default styles;
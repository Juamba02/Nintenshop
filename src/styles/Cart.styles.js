const styles = {
    container: {
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "red",
    },
    productContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "10vh",
      width: "50%",
      marginTop: "1em",
      borderBottom: "1px grey solid",
    },
    img: {
      height: "9vh",
    },
    name: {
      fontSize: "1em",
      width: "25%",
    },
    qtyDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "12%",
    },
    qty: {
      fontSize: "1.2em",
      lineHeight: "20px",
    },
    price: {
      width: "10%",
    },
    total: {
      fontSize: "2em",
      marginBlock: "1em",
    },
    checkoutInactive: {
      backgroundColor: "red",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      marginBottom: "1em",
    },
    checkoutActive: {
      backgroundColor: "#D60000",
      color: "white",
      border: "none",
      padding: "0.5em",
      fontSize: "1.3em",
      borderRadius: "3px",
      transition: "200ms ease-in-out",
      cursor: "pointer",
      marginBottom: "1em",
    },
    clearCart: {
      background: "none",
      border: "none",
      color: "red",
      textDecoration: "underline",
      marginBottom: "2em",
    },
  };

  export default styles;
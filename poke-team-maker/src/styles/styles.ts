export const button = {
    backgroundImage: "linear-gradient(-180deg, #cc0000, #880000, #880000, #880000)",
    borderRadius: "4px",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "inlineBlock",
    fontWeight: "bold", 
    width: "100%",
    userSelect: "none",
    border: "0",
    fontSize: "1.2em",
    transition: "box-shadow .2s",
    marginTop: "0.3em",
    marginBottom: "0.3em",
    fontFamily: "Arial",
    "&:hover": {
        boxShadow: "rgba(253, 76, 0, 0.5) 0 3px 8px",
        transition: ".2s",
        opacity: "0.90",
      },
    
  }

  export const secondaryButton = {
    backgroundColor: "#eeeeee",
    borderRadius: "4px",
    color: "#880000",
    cursor: "pointer",
    display: "inlineBlock",
    fontWeight: "bold",
    width: "100%",
    userSelect: "none",
    border: "0",
    fontSize: "1.2em",
    transition: "box-shadow .2s",
    marginTop: "0.3em",
    marginBottom: "0.3em",
    "&:hover": {
        boxShadow: "rgba(150, 150, 150, 0.3) 0 3px 8px",
        transition: ".2s",
        opacity: "0.90",
      },
    
  }

export const pokemonImage = {
    padding: "2em",
    backgroundImage: "red",
    fontSize: "1.2em",
    textAlign: "center !important",
    "&:hover": {
        transition: ".2s",
        opacity: "0.75",
      },
  }

export const pointerImage = {
    cursor: "pointer"
  }

export const block = {
  padding: "20px"
}

export const h1 = {
  marginTop: "0",
  textAlign: "center",
  fontSize: "2em",
  fontFamily: "Arial",
  fontWeight: "bold"
}

export const h2 = {
  fontSize: "1.2em",
  marginTop: "0.3em",
  marginBottom: "0.3em"
}

export const tableHeader = {
  backgroundColor: "#880000",
}

export const tableHeaderCell = {
  color: "#FFFFFF !important",
  fontWeight: "bold",
  fontSize: "1.1em"
}

export const tableRowCell = {
  color: "#000000 !important",
  fontSize: "1.1em"
}

export const tableRow = {
  '&:nth-of-type(odd)': {
    backgroundColor: "#EEEEEE",
  },
}

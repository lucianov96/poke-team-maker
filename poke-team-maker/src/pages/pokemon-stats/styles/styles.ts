export const progressBarContainer = {
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
}

export const progressBar = (stat: any) => {
    return {
        width: `${(stat * 100 / 200)}%`,
        borderRadius: "5px",
        backgroundImage: "linear-gradient(-180deg, #9999bb, #000099, #000099, #000099)",
        minHeight: "1.3em",
    }
}

export const statValue = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "1.2em"
} 

// 

export const effectiveTitle = {
    fontSize: "1.2em",
    textAlign: "center"
}
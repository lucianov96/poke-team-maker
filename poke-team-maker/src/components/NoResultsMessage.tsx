import { Box, Typography } from "@mui/material";
import React, {FC} from 'react';
import { h2 } from "../styles/styles";

type Props = {
    message: string,
}

export const NoResultsMessage: FC<Props> = ({message}) => {

    return (
        <Box  sx={{padding: 6, display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
            <img style={{width: "40px", paddingRight: "10px"}} src={"pikachu-sad.png"}/>
            <Typography  variant={"h2"} sx={{...h2, paddingTop: "5px"}}>
                {message}
            </Typography>
        </Box>
    )
}
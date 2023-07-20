import Navbar from "scenes/navBar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Form } from "react-router-dom";
import Form from "./Form";


const LoginPage = () => {
    const theme = useTheme();
    const nisNonMediaScreens = useMediaQuery("(min-width: 1000px)");


    return (
        <Box >
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                p="1rem 6%"
                textAlign="center" 
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    CloudTech
                </Typography>
            </Box>

            <Box 
                width={isNonMibileScreens? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant="h5" sm={{mb:"1.5rem"}}>
                    Unleash the Power of Cloud: Empowering Your Tech Journey!
                </Typography>
                <Form />
                
            </Box>
        </Box>
    )
}

export default LoginPage;
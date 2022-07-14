import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactSection from "../components/ContactSection";

const Contact = () => {
    return (
        <Box className="flex-center section">
            <Container>
                <ContactSection />
            </Container>
        </Box>
    );
};

export default Contact;

import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactSection from "../components/ContactSection";
import { primary } from "../themes/primary";

const Contact = () => {
    return (
        <Box
            className="flex-center section"
            sx={{ backgroundColor: primary.palette.custom.light }}
        >
            <Container>
                <ContactSection />
            </Container>
        </Box>
    );
};

export default Contact;

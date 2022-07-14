import { Box } from "@mui/system";
import React from "react";
import ContactSection from "../components/ContactSection";

const Contact = () => {
    return (
        <Box className="flex-center" sx={{ height: "50vw" }}>
            <ContactSection />
        </Box>
    );
};

export default Contact;

import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { primary } from "../themes/primary";
import { validateEmail } from "../utils/utils";

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        setEmailError(!validateEmail(e.target.value));
        setEmail(e.target.value);
    };

    const sendEmail = () => {
        var templateParams = {
            website: "portfolio",
            email: email,
        };

        emailjs
            .send(
                "service_tmo76bn",
                "template_pfang7n",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(function () {
                setEmailSent(true);
            });
    };

    return (
        <Box className="section" id="contact">
            <Container>
                <Box className="flex-center">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            maxWidth: "20rem",
                        }}
                    >
                        <Typography variant="h3" className="text-center">
                            Get in Touch!
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            {!emailSent && (
                                <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        width: "20rem",
                                        input: {
                                            color: primary.palette.custom.dark,
                                        },
                                    }}
                                    value={email}
                                    onChange={handleEmailChange}
                                    focused
                                    error={emailError}
                                />
                            )}
                        </Box>
                        {!emailSent && (
                            <Button
                                variant="contained"
                                onClick={sendEmail}
                                fullWidth
                                endIcon={<ArrowRightAltIcon />}
                            >
                                Send
                            </Button>
                        )}
                        {emailSent && (
                            <Typography variant="p">
                                Thanks! I'll be in touch soon!
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default EmailForm;

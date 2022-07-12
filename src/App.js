import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { primary } from "./themes/primary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

function App() {
    return (
        <ThemeProvider theme={primary}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="projects" element={<Projects />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

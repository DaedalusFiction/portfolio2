import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/logo.png";
import { Slide, useScrollTrigger } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { primary } from "../themes/primary";
import { CleaningServices } from "@mui/icons-material";

const pages = ["projects", "contact"];
const activeStyle = {
    color: primary.palette.custom.light,
    margin: "0 1em",
};
const inactiveStyle = {
    color: primary.palette.custom.lightMuted,
    margin: "0 1em",
};

const Header = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        console.log(e.target.innerHTML);

        setAnchorElNav(null);
    };

    return (
        <Slide
            direction="down"
            in={trigger}
            sx={{ position: "fixed", top: "0", zIndex: "10" }}
        >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        >
                            <img
                                src={logo}
                                className="logo"
                                alt="nautilus shell"
                            />
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link key={index} to={`/${page}`}>
                                        <MenuItem
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            David J. Sorensen
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink
                                    to={`/${page}`}
                                    key={page}
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                    }
                                >
                                    <Typography
                                        //separate styling because can't get NavLink working with hover
                                        sx={{
                                            "&:hover": {
                                                color: primary.palette.custom
                                                    .light,
                                            },
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </NavLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Header;

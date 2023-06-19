import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";

const Footer = () => {
    return (
        <AppBar
            position="static"
            style={{
                backgroundColor: "white",
                marginBottom: "0",
                minHeight: "64px",
                width: "1205px",
                marginLeft: "220px",
            }}
        >
            <Toolbar>
                <Box display="flex" flexGrow={1}>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{
                                color: "gray",
                                marginRight: "16px",
                                textDecoration: "none",
                            }}
                        >
                            Support
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{
                                color: "gray",
                                marginRight: "16px",
                                textDecoration: "none",
                            }}
                        >
                            Help Center
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{
                                color: "gray",
                                marginRight: "16px",
                                textDecoration: "none",
                            }}
                        >
                            Privacy
                        </Link>
                    </Typography>
                    <Typography variant="body2">
                        <Link
                            href="#"
                            style={{
                                color: "gray",
                                marginRight: "16px",
                                textDecoration: "none",
                            }}
                        >
                            Terms of Service
                        </Link>
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    align="right"
                    style={{ color: "gray" }}
                >
                    &copy; {new Date().getFullYear()} Your Company Name
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

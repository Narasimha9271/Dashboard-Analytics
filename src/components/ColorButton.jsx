import { useState } from "react";
import { Button, Drawer, Typography } from "@mui/material";
import { ColorLens } from "@mui/icons-material";
import PropTypes from "prop-types";

const ColorButton = ({ onColorChange }) => {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        onColorChange(color);
    };

    const colorOptions = [
        { name: "Dark", color: "rgb(35, 48, 63)" },
        { name: "Light", color: "rgb(245, 245, 245)" },
        {
            name: "Default",
            color: "linear-gradient(-45deg, rgb(35, 48, 63) 50%, rgb(245, 245, 245) 0px)",
        },
        {
            name: "Blue",
            color: "linear-gradient(-45deg, rgb(71, 130, 218) 50%, rgb(245, 245, 245) 0px)",
        },
        {
            name: "Green",
            color: "linear-gradient(-45deg, rgb(76, 175, 80) 50%, rgb(245, 245, 245) 0px)",
        },
        {
            name: "Indigo",
            color: "linear-gradient(-45deg, rgb(63, 81, 181) 50%, rgb(245, 245, 245) 0px)",
        },
    ];

    const buttonStyles = {
        documentationButton: {
            color: "blue",
            borderColor: "blue",
            marginBottom: "16px",
        },
        getMiraProButton: {
            color: "skyblue",
            backgroundColor: "blue",
        },
    };

    return (
        <>
            <div style={{ position: "sticky", bottom: "20px", zIndex: 1 }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        borderRadius: "50%",
                        minWidth: "0",
                        width: "56px",
                        height: "56px",
                    }}
                    onClick={handleOpen}
                >
                    <ColorLens />
                </Button>
            </div>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
                style={{ width: "258px", overflowX: "hidden" }}
            >
                <div
                    style={{
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <div style={{ marginBottom: "30px" }}>
                            <Typography variant="h6">Select a demo</Typography>
                        </div>
                        <div
                            style={{
                                backgroundColor: "#E5F6FD",
                                padding: "6px 16px",
                                marginBottom: "16px",
                                width: "250px",
                            }}
                        >
                            <Typography variant="body1">
                                Hello! Select your style below. Choose the ones
                                that best fit your needs.
                            </Typography>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "16px",
                            }}
                        >
                            {colorOptions.map((option, index) => (
                                <div
                                    key={option.name}
                                    style={{
                                        width: "1cm",
                                        height: "2.5cm",
                                        marginBottom: "10px",
                                        flexBasis: "calc(50% - 8px)",
                                        flexGrow: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "80%",
                                            height: "80%",
                                            backgroundColor: "#fff",
                                            border: "1px solid gray",
                                            borderRadius: "0.3rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "1.5cm",
                                                height: "1.5cm",
                                                background: option.color,
                                                borderRadius: "50%",
                                            }}
                                        ></div>
                                    </div>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            marginBottom: "2px",
                                            textAlign: "center",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "2.4rem", // Adjust the height as needed
                                            paddingRight: "1rem",
                                        }}
                                    >
                                        {option.name}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            variant="outlined"
                            style={buttonStyles.documentationButton}
                        >
                            Documentation
                        </Button>
                        <Button
                            variant="contained"
                            style={buttonStyles.getMiraProButton}
                        >
                            Get My App Pro
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

ColorButton.propTypes = {
    onColorChange: PropTypes.func.isRequired,
};

export default ColorButton;

import { useState } from "react";
import {
    AppBar,
    Toolbar,
    InputBase,
    IconButton,
    Badge,
    Tooltip,
    Box,
    Typography,
    Divider,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Search,
    Mail,
    Notifications,
    Language,
    PowerSettingsNew,
} from "@mui/icons-material";

const Navbar = () => {
    const [isSearchBarHovered, setIsSearchBarHovered] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
    const [powerMenuAnchor, setPowerMenuAnchor] = useState(null);

    const handleSearchBarMouseEnter = () => {
        setIsSearchBarHovered(true);
    };

    const handleSearchBarMouseLeave = () => {
        setIsSearchBarHovered(false);
    };

    const handleMessagesClick = () => {
        setShowMessages(!showMessages);
    };

    const handleNotificationsClick = () => {
        setShowNotifications(!showNotifications);
    };

    const handleLanguageIconClick = (event) => {
        setLanguageMenuAnchor(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchor(null);
    };

    const handlePowerIconClick = (event) => {
        setPowerMenuAnchor(event.currentTarget);
    };

    const handlePowerMenuClose = () => {
        setPowerMenuAnchor(null);
    };

    return (
        <AppBar
            position="sticky"
            style={{
                backgroundColor: "white",
                minHeight: "64px",
                marginLeft: "230px",

                width: "1195px",
            }}
        >
            <Toolbar>
                <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "20px",
                            border: "1px solid white",
                            borderRadius: "5px",
                            backgroundColor: isSearchBarHovered
                                ? "lightgray"
                                : "white",
                        }}
                        onMouseEnter={handleSearchBarMouseEnter}
                        onMouseLeave={handleSearchBarMouseLeave}
                    >
                        <Search
                            style={{
                                marginRight: "1px",
                                fontSize: "1.5rem",
                                color: "#f5f5ef",
                            }}
                        />
                        <InputBase
                            placeholder="Search topics"
                            style={{
                                width: "300px",
                                padding: "10px 10px 10px 4px",
                            }}
                        />
                    </div>
                </Box>

                <Box display="flex" alignItems="center">
                    <Tooltip title="Messages" placement="bottom">
                        <IconButton
                            color="inherit"
                            onClick={handleMessagesClick}
                        >
                            <Badge badgeContent={4} color="primary">
                                <Mail style={{ color: "gray" }} />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Notifications" placement="bottom">
                        <IconButton
                            color="inherit"
                            onClick={handleNotificationsClick}
                        >
                            <Badge badgeContent={4} color="primary">
                                <Notifications style={{ color: "gray" }} />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Language" placement="bottom">
                        <IconButton
                            color="inherit"
                            onClick={handleLanguageIconClick}
                        >
                            <Language style={{ color: "gray" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Power" placement="bottom">
                        <IconButton
                            color="inherit"
                            onClick={handlePowerIconClick}
                        >
                            <PowerSettingsNew style={{ color: "gray" }} />
                        </IconButton>
                    </Tooltip>

                    {/* Language Menu */}
                    <Menu
                        anchorEl={languageMenuAnchor}
                        open={Boolean(languageMenuAnchor)}
                        onClose={handleLanguageMenuClose}
                    >
                        <MenuItem onClick={handleLanguageMenuClose}>
                            English
                        </MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>
                            French
                        </MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>
                            German
                        </MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>
                            Dutch
                        </MenuItem>
                    </Menu>
                    {/* Power Menu */}
                    <Menu
                        anchorEl={powerMenuAnchor}
                        open={Boolean(powerMenuAnchor)}
                        onClose={handlePowerMenuClose}
                    >
                        <MenuItem onClick={handlePowerMenuClose}>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handlePowerMenuClose}>
                            Sign Out
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
            {/* Messages div */}
            {showMessages && (
                <div
                    style={{
                        position: "absolute",
                        top: "64px",
                        right: "20px",
                        width: "300px",
                        backgroundColor: "white",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        padding: "16px",
                    }}
                >
                    <Typography
                        variant="h6"
                        style={{ marginBottom: "16px", color: "black" }}
                    >
                        3 New Messages
                    </Typography>
                    <div style={{ backgroundColor: "white" }}>
                        {/* Message 1 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "8px",
                                marginRight: "0",
                            }}
                        >
                            <img
                                src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg"
                                alt="Profile 1"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "8px",
                                    borderRadius: "2rem",
                                }}
                            />
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    Lucy Lavender
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Nam pretium turpis et arcu. Duis arcu
                                    tortor.
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        {/* Message 2 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "8px",
                            }}
                        >
                            <img
                                src="https://mira.bootlab.io/static/img/avatars/avatar-2.jpg"
                                alt="Profile 2"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "8px",
                                    borderRadius: "2rem",
                                }}
                            />
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    Remy Sharp
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Pellentesque auctor neque nec urna.
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        {/* Message 3 */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="https://mira.bootlab.io/static/img/avatars/avatar-3.jpg"
                                alt="Profile 3"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "8px",
                                    borderRadius: "2rem",
                                }}
                            />
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    Cassandra Mixon
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Pellentesque auctor neque nec urna.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Notifications div */}
            {showNotifications && (
                <div
                    style={{
                        position: "absolute",
                        top: "64px",
                        right: "20px",
                        width: "300px",
                        backgroundColor: "white",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        padding: "16px",
                    }}
                >
                    <Typography
                        variant="h6"
                        style={{ marginBottom: "16px", color: "black" }}
                    >
                        7 New Notifications
                    </Typography>
                    <div>
                        {/* Notification 1 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "5px",
                            }}
                        >
                            <span
                                style={{ marginRight: "8px", color: "black" }}
                            >
                                Icon1
                            </span>
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    Update Complete
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Restart server to complete update.
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        {/* Notification 2 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "7px",
                            }}
                        >
                            <span
                                style={{ marginRight: "8px", color: "black" }}
                            >
                                Icon2
                            </span>
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    New Connection
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Anna accepted your request.
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        {/* Notification 3 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "7px",
                            }}
                        >
                            <span
                                style={{ marginRight: "8px", color: "black" }}
                            >
                                Icon3
                            </span>
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    New Sign Up
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Aliquam ex eros, imperdiet vulputate
                                    hendrerit et
                                </Typography>
                            </div>
                        </div>
                        <Divider />
                        {/* Notification 4 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "7px",
                            }}
                        >
                            <span
                                style={{ marginRight: "8px", color: "black" }}
                            >
                                Icon4
                            </span>
                            <div>
                                <Typography
                                    style={{ color: "black" }}
                                    variant="subtitle1"
                                >
                                    New Log In
                                </Typography>
                                <Typography
                                    style={{ color: "gray" }}
                                    variant="body2"
                                >
                                    Login from 192.186.1.1.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <Typography
                        variant="body2"
                        style={{
                            marginTop: "16px",
                            textAlign: "center",
                            color: "blue",
                            cursor: "pointer",
                        }}
                    >
                        Show all notifications
                    </Typography>
                </div>
            )}
        </AppBar>
    );
};

export default Navbar;

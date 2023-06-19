import { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Widgets as ComponentsIcon,
    Equalizer as ChartsIcon,
    Assignment as FormsIcon,
    TableChart as TablesIcon,
    Extension as IconsIcon,
    Map as MapsIcon,
    DescriptionOutlined as DocumentationIcon,
    HistoryOutlined as ChangeLogIcon,
    Dashboard as DashboardIcon,
    Pages as PagesIcon,
    DescriptionOutlined as InvoicesIcon,
    VpnKey as AuthIcon,
    Assignment as OrderIcon,
    CalendarToday as CalenderIcon,
    CheckCircle as TasksIcon,
    Folder as ProjectsIcon,
} from "@mui/icons-material";

const Title = () => {
    return (
        <div
            style={{
                Padding: "5px",
                paddingLeft: "70px",
                color: "white",
                backgroundColor: "rgb(35, 48, 63)",
                height: "63px",
                fontSize: "30px",
                marginTop: "15px",
            }}
        >
            MY APP
        </div>
    );
};

const Sidebar = () => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
    };

    return (
        <div
            style={{
                width: "300px",
                backgroundColor: "rgb(35, 48, 63)",
                color: "white",
                variant: "permanent",
                position: "fixed",
                anchor: "left",
                height: "100vh",
                overflowY: "auto",
            }}
        >
            <Title />
            <div>
                <div
                    style={{
                        marginTop: "30px",
                        marginBottom: "10px",
                        paddingLeft: "20px",
                        backgroundColor: "rgb(35, 48, 63)",
                        color: "gray",
                        fontSize: "15px",
                    }}
                >
                    PAGES
                </div>
                <Accordion
                    expanded={expandedAccordion === "dashboard"}
                    onChange={handleAccordionChange("dashboard")}
                    style={{
                        backgroundColor: "rgb(35, 48, 63)",
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <DashboardIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Dashboard
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    padding: "8px 16px 8px 19px",
                                }}
                            >
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Default
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Analytics
                                </Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    SaaS
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "pages"}
                    onChange={handleAccordionChange("pages")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <PagesIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Pages
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Profiles
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Settings
                                </Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Pricing
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Chat
                                </Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Blank Page
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "projects"}
                    onChange={handleAccordionChange("projects")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary>
                        <ProjectsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Projects
                        </Typography>
                    </AccordionSummary>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "orders"}
                    onChange={handleAccordionChange("orders")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary>
                        <OrderIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Orders
                        </Typography>
                    </AccordionSummary>
                </Accordion>

                {/* Invoices Accordion */}
                <Accordion
                    expanded={expandedAccordion === "invoices"}
                    onChange={handleAccordionChange("invoices")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                        style={{
                            color: "gray",
                            textDecoration: "none",
                            paddingLeft: "15px",
                            fontSize: "16px",
                        }}
                    >
                        <InvoicesIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Invoices
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    List
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "tasks"}
                    onChange={handleAccordionChange("tasks")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary>
                        <TasksIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Tasks
                        </Typography>
                    </AccordionSummary>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "calender"}
                    onChange={handleAccordionChange("calender")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary>
                        <CalenderIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Calender
                        </Typography>
                    </AccordionSummary>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "auth"}
                    onChange={handleAccordionChange("auth")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <AuthIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Auth
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Sign In
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Sign Up
                                </Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Reset Pages
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    404 Page
                                </Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    500 Page
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "25px",
                        marginBottom: "10px",
                        paddingLeft: "20px",
                        color: "gray",
                        fontSize: "15px",
                    }}
                >
                    ELEMENTS
                </div>
                <Accordion
                    expanded={expandedAccordion === "components"}
                    onChange={handleAccordionChange("components")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <ComponentsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Components
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Alerts
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Accordion
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Avatar
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Badges
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Buttons
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Cards
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Chips
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Dialogs
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Lists
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Menus
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Pagination
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Progress
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Snakbars
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Tooltips
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "charts"}
                    onChange={handleAccordionChange("charts")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <ChartsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Charts
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Chart.js
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    ApexCharts
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "forms"}
                    onChange={handleAccordionChange("forms")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <FormsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Forms
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Pickers
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Selection Controls
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Selects
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Text Fields
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Editors
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Formik
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "tables"}
                    onChange={handleAccordionChange("tables")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <TablesIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Tables
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Simple Table
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Advanced Table
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Data Grid
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "icons"}
                    onChange={handleAccordionChange("icons")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <IconsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Icons
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Material Icons
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Feather Icons
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "maps"}
                    onChange={handleAccordionChange("maps")}
                    style={{ backgroundColor: "rgb(35, 48, 63)" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "gray" }} />
                        }
                    >
                        <MapsIcon style={{ color: "gray" }} />
                        <Typography
                            style={{ color: "white", marginLeft: "7px" }}
                        >
                            Maps
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Google Maps
                                </Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link
                                    style={{
                                        color: "gray",
                                        textDecoration: "none",
                                        paddingLeft: "15px",
                                        fontSize: "16px",
                                    }}
                                    href="#"
                                >
                                    Vector Maps
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <div
                    style={{
                        padding: "20px 0px 10px 20px",
                        backgroundColor: "rgb(35, 48, 63)",
                        color: "gray",
                        fontSize: "15px",
                    }}
                >
                    MY APP PRO
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgb(35, 48, 63)",
                        paddingLeft: "12px",
                    }}
                >
                    <DocumentationIcon style={{ color: "gray" }} />
                    <div style={{ padding: " 8px 16px 8px 16px" }}>
                        <Link style={{ color: "white" }} href="#">
                            Documentation
                        </Link>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgb(35, 48, 63)",
                        paddingLeft: "12px",
                    }}
                >
                    <ChangeLogIcon style={{ color: "gray" }} />
                    <div style={{ padding: " 8px 16px 8px 16px" }}>
                        <Link style={{ color: "white" }} href="#">
                            Changelog
                        </Link>
                    </div>
                </div>
                <div className="sticky bottom-0 bg-black text-white flex items-center p-4y">
                    <img
                        src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg"
                        alt="Man-Logo"
                        style={{
                            width: "40px",
                            height: "40px",
                            margin: "10px 15px 10px 20px",
                            borderRadius: "2rem",
                        }}
                    />
                    <div className="mt-1">
                        <div>Lucy Lavander</div>
                        <div>UX Designer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

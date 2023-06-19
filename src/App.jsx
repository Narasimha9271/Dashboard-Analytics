import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import ColorButton from "./components/ColorButton";

const App = () => {
    const [sidebarColor, setSidebarColor] = useState(null);

    const handleColorChange = (color) => {
        setSidebarColor(color);
    };

    return (
        <div style={{ display: "flex", height: "100vh", bottom: "0" }}>
            <Sidebar backgroundColor={sidebarColor} />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    marginLeft: "70px",
                }}
            >
                <div style={{ flex: "1" }}>
                    <Navbar />
                    <Body />
                </div>
                <div style={{ position: "sticky", bottom: "0" }}>
                    <ColorButton onColorChange={handleColorChange} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;

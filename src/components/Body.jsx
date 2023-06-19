import Tablewithbars from "./Tablewithbars";
import Cardlayout from "./Cardlayout";
import Mapbox from "./Mapbox";
import Piechart from "./Piechart";
import DashboardHead from "./DashboardHead";
import Tabular from "./Tabular";
import Barchart from "./Barchart";

export default function Body() {
    return (
        <div
            className="grid w-[93vw] grid-flow-col grid-cols-6 xl:space-x-10 space-x-16"
            style={{
                backgroundColor: "F7F9FC",
                margin: "10px 30px 10px 75px",
                width: "1300px",
            }}
        >
            <div
                className="col-start-2 col-end-7 "
                style={{ backgroundColor: "F7F9FC" }}
            >
                <div className="col-span-1 md:col-span-2 xl:col-span-5 xl:row-span-1 ">
                    <DashboardHead />
                </div>
                <div className="mt-4 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 xl:grid-flow-col  ">
                    <div className="">
                        <Cardlayout background={true} button={true} />
                    </div>
                    <div className="">
                        <Cardlayout />
                    </div>

                    <div className="">
                        <Cardlayout />
                    </div>
                    <div className="">
                        <Cardlayout />
                    </div>
                    <div className="col-span-1 md:col-span-2 xl:col-span-5 xl:row-span-2">
                        <Barchart />
                    </div>
                </div>
                <div className="xl:flex mt-4 xl:h-[468px] space-x-4">
                    <div className="xl:basis-2/3">
                        <Mapbox />
                    </div>
                    <div className="xl:basis-1/3 ">
                        <Piechart />
                    </div>
                </div>
                <br />

                <div className="xl:mt-16 xl:flex h-[468px] sm:-mt-3 xl:space-x-4">
                    <div className="xl:basis-2/5">
                        <Tablewithbars />
                    </div>
                    <div className="xl:basis-3/5 ">
                        <Tabular />
                    </div>
                </div>
            </div>
        </div>
    );
}

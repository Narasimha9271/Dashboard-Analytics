import Headbutton from "./Headbutton";
import LoopIcon from "@mui/icons-material/Loop";
import FilterListIcon from "@mui/icons-material/FilterList";
export default function DashboardHead() {
    return (
        <h1 className="w-full sm:grid sm:grid-cols-2 text-black border-b-2 sm:p-3 ">
            <div className="w-[80vw sm:place-self-start grid h-auto text-2xl">
                <div className=" font-bold">Analytics Dashboard</div>
                <div className="place-self-start" style={{ fontSize: "16px" }}>
                    Welcome back, Buddy! We have missed you. 👋
                </div>
            </div>

            <div
                className="flex space-x-3 mt-4 sm:justify-self-end"
                style={{ margin: "30px 0px 15px 20px" }}
            >
                <LoopIcon color="primary" />
                <FilterListIcon color="primary" />
                <Headbutton />
            </div>
        </h1>
    );
}

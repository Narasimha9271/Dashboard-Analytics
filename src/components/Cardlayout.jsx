import { Button, Card } from "@mui/material";
import { classNames as cls } from "react-hook-classnames";
export default function Cardlayout({ button, background }) {
    const value = +13;
    const classname = cls("w-auto h-5 rounded-sm", {
        "bg-green-300": value >= 0,
        "bg-red-200": value < 0,
    });

    return (
        <Card>
            <div
                className={cls(
                    "w-full pt-5 justify-items-start h-44 grid space-y-2 relative p-3 text-blue-500 ",
                    { "bg-blue-100": background }
                )}
            >
                <div className="grid w-full grid-cols-2 ">
                    <div className="text-xl justify-self-start">Visitors</div>
                    {button && (
                        <Button
                            variant="contained"
                            className="justify-self-end h-5 w-5 basis-1/3 text-[10px] font-thin"
                        >
                            Contained
                        </Button>
                    )}
                </div>

                <div className="text-2xl">24.465</div>
                <div className="flex space-x-2">
                    <div className={classname}>{value}</div>
                    <div>since last week</div>
                </div>
            </div>
        </Card>
    );
}

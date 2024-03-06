import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Christmas:🎄"
    | "Valentines: 💖"
    | "Fourth of July: 🎆"
    | "Halloween: 🎃"
    | "Thanksgiving: 🦃";

export function CycleHoliday() {
    const [holiday, setHoliday] = useState<Holiday>("Christmas:🎄");

    const alphabet = () => {
        if (holiday === "Christmas:🎄") {
            setHoliday("Fourth of July: 🎆");
        } else if (holiday === "Fourth of July: 🎆") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("Thanksgiving: 🦃");
        } else if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Valentines: 💖");
        } else {
            setHoliday("Christmas:🎄");
        }
    };
    const year = () => {
        if (holiday === "Christmas:🎄") {
            setHoliday("Valentines: 💖");
        } else if (holiday === "Valentines: 💖") {
            setHoliday("Fourth of July: 🎆");
        } else if (holiday === "Fourth of July: 🎆") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("Thanksgiving: 🦃");
        } else if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Christmas:🎄");
        }
    };
    return (
        <div>
            <Button onClick={alphabet}>Advance by Alphabet</Button>
            <Button onClick={year}>Advance by Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}

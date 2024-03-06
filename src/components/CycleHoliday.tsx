import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Valentines", emoji: "💖" },
    { name: "Fourth of July", emoji: "🎆" },
    { name: "Halloween", emoji: "🎃" },
    { name: "Thanksgiving", emoji: "🦃" }
];

const getNextHolidayAlphabetically = (currentHoliday: string) => {
    const sortedHolidays = [...holidays].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const currentIndex = sortedHolidays.findIndex(
        (holiday) => holiday.name === currentHoliday
    );

    const nextIndex = (currentIndex + 1) % sortedHolidays.length;
    return sortedHolidays[nextIndex].name;
};

const getNextHolidayByYear = (currentHoliday: string) => {
    const sortedHolidays = [...holidays].sort(
        (a, b) => holidays.indexOf(a) - holidays.indexOf(b)
    );

    const currentIndex = sortedHolidays.findIndex(
        (holiday) => holiday.name === currentHoliday
    );

    const nextIndex = (currentIndex + 1) % sortedHolidays.length;
    return sortedHolidays[nextIndex].name;
};

export function CycleHoliday() {
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0].name);

    const handleAdvanceAlphabetically = () => {
        setCurrentHoliday(getNextHolidayAlphabetically(currentHoliday));
    };

    const handleAdvanceByYear = () => {
        setCurrentHoliday(getNextHolidayByYear(currentHoliday));
    };

    return (
        <div>
            <div>
                Holiday:{" "}
                {
                    holidays.find((holiday) => holiday.name === currentHoliday)
                        ?.emoji
                }
            </div>
            <Button onClick={handleAdvanceAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleAdvanceByYear}>Advance by Year</Button>
        </div>
    );
}

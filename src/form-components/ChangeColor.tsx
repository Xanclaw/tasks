import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown"
    ];

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        label={
                            <span
                                style={{
                                    backgroundColor: color
                                }}
                            >
                                {color}
                            </span>
                        }
                        type="radio"
                        id={`color-${color}`}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                        value={color}
                    />
                ))}
            </div>
            <div>
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor
                    }}
                >
                    <span>You have chosen {selectedColor}.</span>
                </span>
            </div>
        </div>
    );
}

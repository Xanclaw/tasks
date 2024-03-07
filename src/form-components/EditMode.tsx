import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleCheckboxChange = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            {editMode ? (
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </label>
                    <br />
                    <label>
                        Are you a student?
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </form>
            ) : (
                <p>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            <div>
                <label>
                    <Form.Switch
                        id="edit-mode-switch"
                        label="Edit Mode"
                        checked={editMode}
                        onChange={handleSwitchChange}
                    />
                </label>
            </div>
        </div>
    );
}

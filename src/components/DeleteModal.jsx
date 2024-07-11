import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import { getFormErrorMessage, isFormFieldValid } from "../helpers/utilities";
import { v4 as uuidv4 } from "uuid";

function DeleteModal({ isVisible, type, onClose, formik, name, handleDelete, selectedUser, confirmKey }) {
    useEffect(() => {}, [formik.values, formik.errors]);

    const [search, setSearchTerm] = useState("");
    const [isDisabled, setDisabled] = useState(true);

    useEffect(() => {
        if (search && search.toLocaleLowerCase() === confirmKey.toLocaleLowerCase()) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [search, confirmKey]);

    useEffect(() => {
        console.log(search);
        console.log(confirmKey);
    }, [search, confirmKey]);

    if (isVisible) {
        return (
            <>
                <div className="modal-popup">
                    <h3 style={{ textAlign: "center" }}>
                        Are you sure you want to delete {name}?
                    </h3>
                    <label>Please type Confirm to enable the button</label>
                    <input
                        type="text"
                        placeholder="Please type confirm"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={search}
                    />
                    <div className="btn-group">
                        <button
                            className="save-btn"
                            type="button"
                            onClick={() => {
                                handleDelete(selectedUser);
                                onClose();
                            }}
                            disabled={isDisabled}
                            style={{
                                backgroundColor: isDisabled ? 'gray' : 'red'
                            }}
                        >
                            Delete
                        </button>
                        <button className="close-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
                <div className="back-drop" />
            </>
        );
    }
    return null;
}

export default DeleteModal;

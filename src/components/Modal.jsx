import React, { useEffect, useState } from "react";
import "../styles/modal.css";
import { getFormErrorMessage, isFormFieldValid } from "../helpers/utilities";
import { v4 as uuidv4 } from "uuid";

function Modal({ isVisible, type, onClose, formik }) {
    useEffect(() => {}, [formik.values, formik.errors]);

    if (isVisible) {
        return (
            <>
                <div className="modal-popup">
                    <h3
                        style={{
                            textAlign: "center",
                        }}
                    >
                        {type == "add" ? "Add new user" : "Edit User"}
                    </h3>
                    <div className="input-name">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            style={
                                isFormFieldValid(formik, "name")
                                    ? { borderBottom: "1px solid red" }
                                    : { border: "" }
                            }
                        />
                    </div>
                    {getFormErrorMessage(formik, "name")}

                    <div className="input-image">
                        <label htmlFor="">Image</label>
                        <input
                            type="text"
                            placeholder="Image Url"
                            name="imgURL"
                            onChange={formik.handleChange}
                            value={formik.values.imgURL}
                            style={
                                isFormFieldValid(formik, "imgURL")
                                    ? { borderBottom: "1px solid red" }
                                    : { border: "" }
                            }
                        />
                    </div>
                    {getFormErrorMessage(formik, "imgURL")}

                    <div className="btn-group">
                        <button
                            className="save-btn"
                            type="button"
                            onClick={() => {
                                formik.handleSubmit();
                                // formik.setFieldvalue("id", 12);
                               if (type === "add") {
                                   formik.setFieldValue("id", uuidv4());
                               }
                            }}
                        >
                            {type == "add" ? "Add" : "Save"}
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

export default Modal;

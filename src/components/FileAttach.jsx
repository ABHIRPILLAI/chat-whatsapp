import React, { useEffect, useState } from "react";
import "../styles/fileattach.css";

function FileAttach({
    isVisible,
    type,
    setShow,
    selectedFiles,
    setSelectedFiles,
}) {
    const handleEscapeKey = (event) => {
        if (isVisible && event.key === "Escape") {
            setSelectedFiles([]);
            setShow(false);
        }
    };

    const handleIconClick = (fileTypes) => {
        const fileInput = document.getElementById("fileInput");
        if (fileInput) {
            fileInput.accept = fileTypes.join(",");
            fileInput.click();
        }
    };
const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        const newSelectedFiles = Array.from(files).map((file) => ({
            file,
            dataURL: URL.createObjectURL(file),
        }));

        setSelectedFiles((prevFiles) => [...prevFiles, ...newSelectedFiles]);
    }
};

const handleCloseClick = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
};


    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isVisible]);

    if (isVisible && type === "attach") {
        return (
            <>
                <div className="div-file-attach">
                    <img
                        src="/icons/document.svg"
                        className="icons-attach-footer"
                        alt=""
                        onClick={() =>
                            handleIconClick([".doc", ".docx", ".pdf"])
                        }
                    />
                    <img
                        src="/icons/gallery.svg"
                        alt=""
                        className="icons-attach-footer"
                        onClick={() => handleIconClick(["image/*"])}
                    />

                    {selectedFiles && selectedFiles.length > 0 && (
                        <div className="image-show">
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="image-container">
                                    <img
                                        src={file.dataURL}
                                        alt={`Preview ${index + 1}`}
                                        className="show-image"
                                    />
                                        <img
                                            src="/icons/close.svg"
                                            className="icons-image"
                                            alt=""
                                            onClick={() =>
                                                handleCloseClick(index)
                                            }
                                        />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    id="fileInput"
                    hidden
                    onChange={handleFileInputChange}
                    multiple
                />
            </>
        );
    }

    return null;
}

export default FileAttach;

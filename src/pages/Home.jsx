import React, { useEffect, useState } from "react";
import "../styles/home.css";
import LeftSectionHeader from "../components/LeftSectionHeader";
import LeftSectionSearch from "../components/LeftSectionSearch";
import Users from "../components/Users";
import RightSectionHeader from "../components/RightSectionHeader";
import RightSectionChat from "../components/RightSectionChat";
import RightSectionFooter from "../components/RightSectionFooter";
import Modal from "../components/Modal";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileAttach from "../components/FileAttach";
import DeleteModal from "../components/DeleteModal";

function Home() {
    // ddd
    const [show, setShow] = useState({ isVisible: false, type: "" });
    const [sendChat, setSenderChat] = useState("");
    const [message, setMessage] = useState([]);

    const [selectedFile, setSelectedFiles] = useState([]);

    const [chatName, setChatName] = useState({
        name: "SuperAdmin",
        imgURL: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        id: 1,
    });

    const showToastMessage = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const [users, setUsers] = useState([
        {
            name: "SuperAdmin",
            imgURL: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
            id: 1,
            lastMessageId: "",
            lastMessage: "",
        },
        {
            name: "Abhilash",
            imgURL: "data:image/jpeg;base64,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",
            id: "fd1092ed-adfa-4839-ad6b-1132f2f5377f",
            lastMessageId: "",
            lastMessage: "",
        },
        {
            name: "Vivek",
            imgURL: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
            id: "74d7934b-2f44-4d0d-89c1-4910998c9e4f",
            lastMessageId: "",
            lastMessage: "",
        },
    ]);

    const [search, setSearch] = useState("");

    function validate(data) {
        let errors = {};
        if (!data.name) {
            errors.name = "Please Enter a Name";
        }

        if (!data.imgURL) {
            errors.imgURL = "Please Enter a url";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            imgURL: "",
            id: "",
        },
        validate,

        onSubmit: (values) => {
            if (show.type === "add") {
                setUsers((prevUserDetails) => [...prevUserDetails, values]);
                setShow(false);
                formik.resetForm();
                showToastMessage("User Added Successfully !");
            }
            if (show.type === "edit") {
                setUsers((prevUsers) =>
                    prevUsers.map((user) => {
                        console.log("user.id:", user.id);
                        console.log("formik.values.id:", formik.values.id);

                        return user.id === formik.values.id
                            ? {
                                  ...user,
                                  name: formik.values.name,
                                  imgURL: formik.values.imgURL,
                              }
                            : user;
                    })
                );

                setShow(false);
                formik.resetForm();
                showToastMessage("User Edited Successfully !");
            }
        },
    });

    const handleDelete = (selectedUser) => {
        let indexToDelete = users.findIndex(
            (item) => item.id === selectedUser?.id
        );

        if (indexToDelete !== -1) {
            const newArray = [...users];
            newArray.splice(indexToDelete, 1);

            setUsers(newArray);
            showToastMessage("User Deleted Successfully");
        }
    };

    const handleUserDivClick = (selectedUser) => {
        setChatName(selectedUser);
    };

    // useEffect(() => {
    //     console.log("chatName updated:", chatName);
    // }, [chatName]);
    // useEffect(() => {
    //     console.log("sendchat", sendChat);
    // }, [sendChat]);
    // useEffect(() => {
    //     console.log("user_details : ", users);

    // }, [users]);

    useEffect(() => {
        console.clear();
        console.log("message : ", message);
        console.log("chatName : ", chatName);
        console.log("users", users);
        console.log("show", show);

    }, [message, chatName, users,show]);

    return (
        <>
            <div className="main-container">
                <div className="left-section">
                    <LeftSectionHeader />
                    <LeftSectionSearch setSearch={setSearch} />
                    <div style={{}}>
                        <div
                            style={{
                                textAlign: "center",
                                borderBottom: "1px solid lightgray",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setShow({ isVisible: true, type: "add" });
                            }}
                        >
                            <h2>Add a new Chat</h2>
                        </div>
                        <div
                            style={{
                                overflow: "scroll",
                                height: "304px",
                            }}
                        >
                            <Users
                                search={search}
                                users={users}
                                handleDelete={handleDelete}
                                formik={formik}
                                setShow={setShow}
                                handleUserDivClick={handleUserDivClick}
                            />
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <RightSectionHeader chatName={chatName} />
                    <RightSectionChat
                        messages={message}
                        selectedUser={chatName}
                    />
                    <RightSectionFooter
                        setSenderChat={setSenderChat}
                        selectedUser={chatName}
                        message={message}
                        setMessage={setMessage}
                        users={users}
                        setUsers={setUsers}
                        setShow={setShow}
                        selectedFiles={selectedFile}
                        setSelectedFiles={setSelectedFiles}
                    />
                </div>
            </div>
            <Modal
                isVisible={
                    show.isVisible &&
                    (show.type === "add" || show.type === "edit")
                }
                type={show.type}
                onClose={() => {
                    setShow(false);
                    formik.resetForm();
                }}
                formik={formik}
            />
            <DeleteModal  isVisible={
                    show.isVisible &&
                    (show.type === "delete")
                }
                type={show.type}
                onClose={() => {
                    setShow(false);
                    formik.resetForm();
                }}
                formik={formik}
                name={show.name}
                handleDelete={handleDelete}
                selectedUser={chatName}
                confirmKey='confirm'/>
            <ToastContainer autoClose={2000} />
            <FileAttach
                isVisible={show.isVisible && show.type === "attach"}
                type={show.type}
                setShow={setShow}
                selectedFiles={selectedFile}
                setSelectedFiles={setSelectedFiles}
                
            />
        </>
    );
}

export default Home;

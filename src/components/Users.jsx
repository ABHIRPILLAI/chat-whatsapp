import React, { useEffect, useState } from "react";
import "../styles/user.css";

function Users({
    users,
    search,
    handleDelete,
    formik,
    setShow,
    handleUserDivClick,
}) {
    const [showDelete, setShowDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState({ id: "" });
    useEffect(() => {
        const defaultUser = users.find((user) => user.id === 1);
        setSelectedUser(defaultUser || { id: "" });
    }, [users]);
    useEffect(() => {
        console.log("", users);
        console.log("searchhhhh", search);
    }, [users, search]);

    const filteredUsers = search
        ? users.filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
          )
        : users;

    return (
        <>
            <div className="user-div">
                {filteredUsers.map((user, index) => (
                    <div
                        key={index}
                        className={`user-chat ${
                            selectedUser.id === user.id ? "selected-user" : ""
                        }`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "30px",
                            height: "70px",
                            width: "95%",
                            marginLeft: "10px",
                            borderRadius: "25px",
                        }}
                        onClick={() => {
                            const updatedUser = {
                                id: user?.id,
                                name: user?.name,
                                imgURL: user?.imgURL,
                            };
                            setSelectedUser(updatedUser);
                            handleUserDivClick(updatedUser);
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "50px",
                            }}
                        >
                            <div>
                                <img
                                    src={user.imgURL}
                                    alt=""
                                    className="avatar-2"
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>{user.lastMessage}</p>
                                </div>
                            </div>
                        </div>

                        {user.id !== 1 ? (
                            <div className="btn-div">
                                {showDelete && user?.id == selectedUser?.id ? (
                                    <div className="btn-div">
                                        <button className="check-btn">
                                            <img
                                                src="/icons/check.svg"
                                                alt=""
                                                style={{
                                                    height: "20px",
                                                }}
                                                onClick={() => {
                                                    // handleDelete(selectedUser);
                                                    setShow({
                                                        isVisible: true,
                                                        type: "delete",
                                                        name:user.name
                                                    });
                                                }}
                                            />
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowDelete(false);
                                            }}
                                            className="close-btn-user"
                                        >
                                            <img
                                                src="/icons/close.svg"
                                                alt=""
                                                style={{
                                                    height: "20px",
                                                }}
                                            />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="btn-div">
                                        <button
                                            className="edit-btn"
                                            onClick={() => {
                                                formik.setFieldValue(
                                                    "name",
                                                    user.name
                                                );
                                                formik.setFieldValue(
                                                    "imgURL",
                                                    user.imgURL
                                                );
                                                formik.setFieldValue(
                                                    "id",
                                                    user.id
                                                );
                                                console.log(
                                                    "idddddddd",
                                                    user.id
                                                );
                                                setShow({
                                                    isVisible: true,
                                                    type: "edit",
                                                });
                                            }}
                                        >
                                            <img
                                                src="/icons/edit.svg"
                                                alt=""
                                                style={{
                                                    height: "20px",
                                                }}
                                            />
                                        </button>

                                        <button className="delete-btn">
                                            <img
                                                src="/icons/trash.svg"
                                                alt=""
                                                style={{
                                                    height: "20px",
                                                }}
                                                onClick={() => {
                                                    setShowDelete(true);
                                                    setSelectedUser({
                                                        id: user?.id,
                                                    });
                                                }}
                                            />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
                {search && filteredUsers.length === 0 ? (
                    <div className="no-result-div">
                        <img
                            src="/images/no_resultt.gif"
                            className="no-results"
                            alt=""
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default Users;

import React, { useEffect, useState } from "react";
import "../styles/leftsearch.css";

function LeftSectionSearch({ setSearch }) {
    // const [searchValue, setSearchValue] = useState("");

    // const handleSearchClick = () => {
    //     setSearch(searchValue);
    // };

    // useEffect(() => {
    //     console.log("Search value:", searchValue);
    // }, [searchValue]);

    return (
        <div>
            <div className="wrapper">
                <div className="searchBar">
                    <button
                        id="searchQuerySubmit"
                        type="button"
                       
                    >
                        <img
                            src="/icons/search.svg"
                            className="search-icon"
                            alt=""
                        />
                    </button>
                    <input
                        id="searchQueryInput"
                        type="text"
                        placeholder="Search or start a new chat"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LeftSectionSearch;

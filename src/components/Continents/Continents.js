import React, { useState, useEffect, useContext } from "react";

import ListData from "../ListData/ListData";

import { ListContext } from "../ContextWrapper/WithContext";

import { dataTransformer } from "./dataTranformer";

const Continents = (props) => {
    const { data, loading, error, setDisplay, display } = useContext(
        ListContext,
    );
    const [dataToRender, setDataToRender] = useState(null);

    const changeDisplay = (prev, next) => {
        const p = display.indexOf(prev);
        const n = display.indexOf(next);
        const arr = [].splice(0, display.length, ...[display, prev]);
        display.length && arr.concat(display);
        arr.push(prev);
        next && arr.push(next);
        p >= 0 && !next && arr.splice(p, display.length);
        n >= 0 && next && arr.splice(n, display.length);
        setDisplay(arr);
    };

    useEffect(() => {
        if (data) {
            const array = dataTransformer(data);
            setDataToRender(array);
        }
    }, [data, display, setDisplay]);
    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {dataToRender && (
                <ul className='right-align continent'>
                    <ListData
                        data={dataToRender}
                        display={display}
                        changeDisplay={changeDisplay}
                    />
                </ul>
            )}
        </>
    );
};

export default Continents;

import React, { useState, useEffect, useContext } from "react";

import ListData from "../ListData/ListData";

import { ListContext } from "../ContextWrapper/WithContext";

const Continents = (props) => {
    const { data, loading, error, setDisplay, display } = useContext(
        ListContext,
    );
    const [dataToRender, setDataToRender] = useState(null);

    const changeDisplay = (prev, next) => {
        setDisplay({
            first:
                display.first === prev && !next
                    ? display.first === prev && display.second === next
                        ? prev
                        : null
                    : prev,
            second: display.second === next ? null : next,
        });
    };

    useEffect(() => {
        if (data) {
            const key = Object.keys(data).toString();
            const next = (item) =>
                Object.keys(item).find((arr) => item[arr] instanceof Array);
            const findDeepChilds = (arr) => {
                return arr.map((element) => {
                    const array = next(element);
                    return {
                        name: element.name,
                        code: element.code,
                        children: array ? findDeepChilds(element[array]) : null,
                    };
                });
            };
            const array = data[key].map((item) => {
                const findedArray = next(item);
                const child = findDeepChilds(item[findedArray]);
                return {
                    name: item.name,
                    code: item.code,
                    children: child,
                };
            });
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

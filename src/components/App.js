import React from "react";
import "./App.css";

import WithContext from "./ContextWrapper/WithContext";

import Continents from "./Continents/Continents";

const App = () => {
    return (
        <>
            <div className='App'>
                <div className='continents-list'>
                    <WithContext>
                        <Continents />
                    </WithContext>
                </div>
            </div>
        </>
    );
};

export default App;

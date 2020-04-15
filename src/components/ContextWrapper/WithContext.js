import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_CONTINENTS_QUERY = gql`
    {
        continents {
            code
            name
            countries {
                code
                name
                languages {
                    code
                    name
                }
            }
        }
    }
`;

export const ListContext = React.createContext(null);

const WithContext = (props) => {
    const { data, loading, error } = useQuery(GET_CONTINENTS_QUERY);
    const [display, setDisplay] = useState({
        first: null,
        second: null,
    });
    return (
        <ListContext.Provider
            value={{ data, loading, error, display, setDisplay }}>
            {props.children}
        </ListContext.Provider>
    );
};

export default WithContext;

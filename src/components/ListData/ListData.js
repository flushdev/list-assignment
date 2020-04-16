import React from "react";

export default (props) => {
    const render = (element, prevCode) =>
        element.map((el) => (
            <>
                <li
                    onClick={(e) => {
                        prevCode &&
                            el.children &&
                            props.changeDisplay(prevCode, el.name);
                        !prevCode && props.changeDisplay(el.name);
                    }}
                    key={el.name + "_li"}
                    name={el.name}
                    className={`li-block${
                        el.children?.length ? " openable" : ""
                    }`}>
                    {el.name}
                </li>
                {el.children &&
                    props.display.map((childrens) =>
                        childrens === el.name ? (
                            <ul key={el.name + "_ul"}>
                                {render(el.children, el.name)}
                            </ul>
                        ) : null,
                    )}
            </>
        ));
    return render(props.data);
};

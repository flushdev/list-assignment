import React from "react";

export default (props) => {
    console.log(props.data);
    const render = (element, prevCode) => {
        return element.map((el) => {
            return (
                <>
                    <li
                        onClick={(e) => {
                            prevCode &&
                                el.children !== null &&
                                props.changeDisplay(prevCode, el.name);
                            !prevCode && props.changeDisplay(el.name);
                            console.log(Array.isArray(el.children));
                        }}
                        key={el.name + "_li"}
                        name={el.name}
                        className='li-block'>
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
            );
        });
    };
    return render(props.data);
};

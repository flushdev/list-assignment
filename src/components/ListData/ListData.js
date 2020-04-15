import React from "react";

export default (props) => {
    const render = (element, prevCode) => {
        return element.map((el) => {
            return (
                <ul>
                    <li
                        onClick={(e) => {
                            !prevCode &&
                                el.children.length &&
                                props.changeDisplay(el.name);
                            prevCode &&
                                el?.children?.length &&
                                !props.display.second &&
                                props.changeDisplay(prevCode, el.name);
                            prevCode &&
                                el?.children?.length &&
                                props.display.second &&
                                props.changeDisplay(prevCode, el.name);
                        }}
                        key={el.name + "_li"}
                        name={el.name}
                        className='li-block'>
                        {el.name}
                    </li>
                    {el.children && props.display.first === el.name && (
                        <ul key={el.name + "_ul"}>
                            {render(el.children, el.name)}
                        </ul>
                    )}
                    {el.children &&
                        prevCode &&
                        props.display.second === el.name && (
                            <ul key={el.name + "_ul"}>
                                {render(el.children, el.name)}
                            </ul>
                        )}
                </ul>
            );
        });
    };
    return render(props.data);
};

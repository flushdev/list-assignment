export const dataTransformer = (data) => {
    const key = Object.keys(data).toString();
    const next = (item) =>
        Object.keys(item).find((arr) => item[arr] instanceof Array);
    const findDeepChilds = (arr) => {
        return arr.map((element) => {
            const array = next(element);
            return {
                name: element.name,
                children: array ? findDeepChilds(element[array]) : null,
            };
        });
    };
    const array = data[key].map((item) => {
        const findedArray = next(item);
        const child = findDeepChilds(item[findedArray]);
        return {
            name: item.name,
            children: child,
        };
    });
    return array;
};

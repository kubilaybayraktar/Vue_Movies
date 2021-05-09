export const parseList = (response) => {
    if (response.status !== 200) {
        throw Error(response.message);
    }
    if (!response.data) {
        return [];
    }
    let list = response.data;
    return list;
};

export const parseItem = (response, code) => {
    if (response.status !== code) throw Error(response.message);
    let item = response.data;
    if (typeof item !== 'object') {
        item = undefined;
    }
    return item;
};

export const parseList = (response) => {
    if (response.status !== 200) {
        throw Error(response.message);
    }
    if (!response.data) {
        return [];
    }

    let list = response.data;
    console.info(response.config.method, response.config.baseURL + response.config.url, list);
    return list;
};

export const parseItem = (response, code) => {
    if (response.status !== code) throw Error(response.message);
    let item = response.data;
    if (typeof item !== 'object') {
        item = undefined;
    }
    console.info(response.config.method, response.config.baseURL + response.config.url, item);
    return item;
};

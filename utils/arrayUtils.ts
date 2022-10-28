export interface Columns {
    field : string;
    filter: boolean ;
}
const getColumns = (data = []): Columns[] => {
    if (data.length === 0) return []
    let columns = []
    try {
        columns = Object.keys(data[0]).map((item) => {
            return { field: item, filter: true };
        })
        return columns
    } catch (error) {
        return []
    }
}

export { getColumns }

const GroupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
        
        const key = obj.attributes[property];
        
        if (!acc[key]) {
            acc[key] = [];
        }

        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
    }, {});
}

export default GroupBy;
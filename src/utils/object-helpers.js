export const updateObjectInArray = (items, itemId, objectPropName, newObjProps) => {
    return items.map(u => {
        if (u[objectPropName] === itemId.userId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}
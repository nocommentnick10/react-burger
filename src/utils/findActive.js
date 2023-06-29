export const findActive = (data, activeId) => {
    return data.find(item => item._id === activeId)
}
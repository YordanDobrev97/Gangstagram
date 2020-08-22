module.exports = {
    getDataWithId(d) {
        return { ...d.data(), id: d.id };
    }
}
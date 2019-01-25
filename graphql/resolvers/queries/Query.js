const Query = {
    user:(parent, args) => {
        return {
            username: 'Mehmet',
            created_at: '24.01.2019'
        }
    }
};

module.exports = Query;
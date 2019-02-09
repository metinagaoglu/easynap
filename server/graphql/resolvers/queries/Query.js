const Query = {
    user: async(parent, args, { User }) => {
        return await User.findById(args.id);
    },
    users: async(parent, args , { User }) => {
        return await User.find({}).sort({ 'created_at':'desc' })
    },
    snap: async(parent, args, { Snap }) => {
        return await Snap.findById(args.id);
    },
    snaps: async(parent, args , { Snap }) => {
        return await Snap.find({}).sort({ 'created_at':'desc' })
    },
};

module.exports = Query;
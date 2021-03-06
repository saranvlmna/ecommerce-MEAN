
const { User } = require("../models");
module.exports = {
    create: async (user) => {
        return await User.create(user);
    },

    findByEmail: async (email) => {
        return await User.findOne({ email });
    },

    findByMobile: async (number) => {
        return await User.findOne({ number })
    },

    findById: async (id) => {
        return await User.findOne({ _id: id });
    }

}

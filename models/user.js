const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    profilePicture: {
        type: String,
        default: ''
    }
}, {timestamps: true});

modules.exports = mongoose.model('User', userSchema);

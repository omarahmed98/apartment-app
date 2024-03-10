const mongoose = require('mongoose')

const apartmentSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a apartment title"]
        },
        description: {
            type: String,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
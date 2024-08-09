const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    foodGroup: { type: String, required: true },
    description: { type: String },
    nutritionalInformation: {
        calories: { type: Number },
        macronutrients: {
            protein: { type: Number },
            fats: { type: Number },
            carbohydrates: { type: Number },
        },
        micronutrients: {
            vitamins: { type: Map, of: Number },
            minerals: { type: Map, of: Number },
        },
        fiber: { type: Number },
        sodium: { type: Number },
        cholesterol: { type: Number },
    },
    servingSize: { type: String },
    allergens: { type: [String] },
    ingredients: { type: [String] },
    preparationMethods: { type: String },
    certifications: { type: [String] },
    countryOfOrigin: { type: String },
    brandOrManufacturer: { type: String },
    dietaryRestrictions: { type: [String] },
    healthBenefits: { type: String },
    bestPractices: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('FoodItem', FoodItemSchema);

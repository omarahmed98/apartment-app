import { Request, Response } from 'express';
const Apartment = require('../models/Apartment');

// Create apartment
export const createApartment = async (req: Request, res: Response) => {
    try {
        const apartment = await Apartment.create(req.body);
        await apartment.save();
        res.status(200).json(apartment);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Get all apartments
export const getAllApartments = async (req: Request, res: Response) => {
    try {
        const apartments = await Apartment.find();
        res.status(200).json(apartments);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Get apartment by ID
export const getApartmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const apartment = await Apartment.findById(id);
        res.status(200).json(apartment);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

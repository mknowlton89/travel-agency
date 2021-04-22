const router = require('express').Router();

const Location = require('../../models/Location');

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        if (!locationData) {
            res.status(404).json({ message: 'No locations found' });
            return;
        }
        res.status(200).json(locationData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
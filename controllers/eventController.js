const { findEventById, insertEvent } = require('../db');

// Display the event data 
const getEventData = async (req, res, next) => {
    const { id } = req.query;
    const { type, limit, page } = req.query;


    if (id != undefined) {

        const result = await findEventById(id)
        console.log(result);
        return res.json(result);
    } else if (type != undefined && limit != undefined && page != undefined) {

        return res.send("type, limit and page provided");
    }

    res.send("No query parameters provided");
};

// Create a new event
const createEvent = async (req, res, next) => {
    const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;

    if (req.file) {
        const image = req.file.path;

        doc = { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank, image }
        // console.log(doc);

        result = await insertEvent(doc);
        // console.log(result);

        return res.json({ message: `Inserted successfully with id ${result.insertedId}` });
    }

    res.status(400).json({ message: "Incomplete data provided" });
}



module.exports = { createEvent, getEventData, updateEvent };
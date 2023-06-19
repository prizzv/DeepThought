//contains the connection to database

const { MongoClient, ObjectId } = require("mongodb");

//local host does not work now so use the below
const uri = "mongodb://0.0.0.0:27017/DeepThought";

const connection = new MongoClient(uri);

// block to connect to DB and collection. 
async function connectToDB() {
    try {
        await connection.connect()
        console.log("Connected to database");

        const myDb = connection.db("DeepThought");
        return myDb.collection("events");
        // const result = await coll.find().toArray();

    } catch (e) {
        console.error(e);
        console.log("Connection closed")
    }
};

// finds all the elements if id is not provided
module.exports.findEvents = async function (id) {
    try {
        eventsCollection = await connectToDB();

        if (id == undefined) {
            return await eventsCollection.find().toArray();
        }
        return await eventsCollection.findOne({ "_id": new ObjectId(id) });
        // result = await eventsCollection.findOne({"_id": new ObjectId(id)});

        // console.log(result);

    } catch (e) {
        console.error(e);
    } finally {
        await connection.close();
        console.log("Connection closed")
    }
};

//finds paginated events
module.exports.findPaginatedEvents = async function (type, limit, pageNo) {
    limit = parseInt(limit);
    pageNo = parseInt(pageNo);
    try {
        eventsCollection = await connectToDB();
        // console.log(typeof(limit));
        if (type === "latest") {

            const sort = { "_id": -1 };
            const skip = (pageNo - 1) * limit;

            return await eventsCollection.find({}).sort(sort).skip(skip).limit(limit).toArray();
        }

        return await eventsCollection.findOne({ "_id": new ObjectId(id) });
    } catch (e) {
        console.error(e);
    } finally {
        await connection.close();
        console.log("Connection closed")
    }
};

// insert a new event
module.exports.insertEvent = async function (doc) {
    try {
        eventsCollection = await connectToDB();
        return await eventsCollection.insertOne(doc);

    } catch (e) {
        console.error(e);
    } finally {
        await connection.close();
        console.log("Connection closed")
    }
}

// change/update an event
module.exports.modifyEvent = async function (id, doc) {
    try {
        eventsCollection = await connectToDB();
        const filter = { "_id": new ObjectId(id) };

        return await eventsCollection.updateOne(filter, { $set: doc });

    } catch (e) {
        console.error(e);
    } finally {
        await connection.close();
        console.log("Connection closed")
    }
}

// delete an event by its id.
module.exports.deleteEventById = async function (id) {
    try {
        eventsCollection = await connectToDB();
        const query = { "_id": new ObjectId(id) };

        return await eventsCollection.deleteOne(query);

    } catch (e) {
        console.error(e);
    } finally {
        await connection.close();
        console.log("Connection closed")
    }
}

// module.exports = {connection};
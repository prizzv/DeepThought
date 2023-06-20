This API was developed as an assignment to manage events.

The tech stack used for developing the API are Mongodb, Express, Node.js, multer.

## Getting Started

First, Create a /uploads folder to store the event images.

Next, run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:9000 with your brouser to see the result

## API endpoints

#### Get all the events in ascending order (Base URL = /api/v3/app)
```
Get Request

endpoint = /events
```

#### Get an event by its unique id (Base URL = /api/v3/app)
```
Get Request

endpoint = /events?id=(MongoDb object id)
```
#### Get events by its recency & paginate results by page number and limit of events per page (Base URL = /api/v3/app)
```
Get Request

endpoint = /events?type=latest&limit=5&page=1

latest = sorted in descending order
```

#### Creates an event and returns the Id of the event i.e. created (Base URL = /api/v3/app)
```
POST Request

endpoint = /events

Payload = 
{
  name: "Name of the event"
  image: "Image file (File upload)"
  tagline: "A proper tag-line for the event"
  schedule: "(Date + time) Timestamp"
  description: "Description of the event"
  moderator: "A user who is going to host"
  category: "Category of the event"
  sub_category: "Sub category of the event"
  rigor_rank: "Integer"	
}
```

#### Update an event (Base URL = /api/v3/app)
```
PUT Request

endpoint = /events/:id
:id = MongoDb object id

Payload = same as POST Request
```

#### Delete an event by its id (Base URL = /api/v3/app)
```
DELETE Request

endpoint = /events/:id

:id = MongoDb object id
```

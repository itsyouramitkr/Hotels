const mongoose = require("mongoose");

// define person schema

const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    work:{
        type : String,
        enum:["chef","waiter","manager"],
        required : true
    },
    mobile:{
        type:Number,
        required : true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required : true
    },
    salary:{
        type:Number,
        required:true
    }
});

// create person model  database operations
// Mongoose automatically creates a collection named people(table name) in your MongoDB database.

// SQL	     MongoDB

// Database	  Database
// Table	  Collection
// Row	      Document
// Column	  Field


const person = mongoose.model("person",personSchema);

module.exports = person;

/*
mongoose.model — you are creating a model called person.

"person" — this is the collection name (MongoDB will make it people automatically, because Mongoose pluralizes).

personSchema — this tells Mongoose what structure (fields) the documents inside this collection will have.

Easy way to think:

You are telling Mongoose:
➔ "Hey, create a bridge (model) for the people collection, and use this personSchema blueprint."

person becomes a powerful object.
It allows you to create, read, update, and delete documents from the people collection!
*/


/*
✅ 1xx – Informational

100 Continue: Request received, continuing process.

101 Switching Protocols: Protocol switch accepted.



✅ 2xx – Success

200 OK: Request succeeded.

201 Created: Resource successfully created (e.g., POST request).

202 Accepted: Request accepted for processing, but not completed yet.

204 No Content: Successful, but no response body.



⚠️ 3xx – Redirection

301 Moved Permanently: Resource moved to a new URL.

302 Found: Temporarily moved to another URL.

304 Not Modified: Cached version is still valid.



❌ 4xx – Client Errors  (BUFNC)

400 Bad Request: Malformed request.

401 Unauthorized: Authentication required.

403 Forbidden: Server understood, but refusing.

404 Not Found: Resource not found.

409 Conflict: Request conflicts with current server state.

🚫 5xx – Server Errors
500 Internal Server Error: Generic server error.

501 Not Implemented: Feature not supported.

502 Bad Gateway: Invalid response from upstream server.

503 Service Unavailable: Server temporarily unavailable.

*/
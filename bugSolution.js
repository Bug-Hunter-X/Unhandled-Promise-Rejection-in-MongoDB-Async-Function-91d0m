```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
    // ... your database operations here ... 
    // Example:
    const result = await collection.insertOne({ name: 'Example' });
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.error('Error during MongoDB operation:', error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```
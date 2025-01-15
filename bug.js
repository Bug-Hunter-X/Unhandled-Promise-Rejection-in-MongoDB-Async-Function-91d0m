```javascript
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
    // some operations here
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```
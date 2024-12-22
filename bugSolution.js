```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":1},{"$inc":{"field":1}});
//Alternative: Use $set for non-numeric fields.
db.collection('myCollection').updateOne({"_id":1},{"$set":{"field":"newValue"}});
```
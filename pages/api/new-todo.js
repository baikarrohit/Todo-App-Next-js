import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://rohit-baikar:YsX7YpMdOGpdAXAk@cluster0.qhq7jea.mongodb.net/todoData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");
    const result = await todosCollection.insertOne(data);
  
    client.close();

    res.status(201).json({ message: "Todo Inserted.",todo: result });
  }
};

export default handler;

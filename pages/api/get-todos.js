import { MongoClient } from "mongodb";

const GetTodos = async (req, res) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://rohit-baikar:YsX7YpMdOGpdAXAk@cluster0.qhq7jea.mongodb.net/todoData?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    const result = await todosCollection.find().toArray();

    client.close()

    res.status(200).json({ todos: result });
  }
};

export default GetTodos;

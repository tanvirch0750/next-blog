import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim('') ||
      !message ||
      !message.trim('')
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    // store in a database
    const newMessage = {
      email,
      message,
      name,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://nextblog_admin:nextblog_admin@cluster0.r3o7j.mongodb.net/next-blog?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(500).json({ message: 'could not connect to the database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection('next_blog_messages')
        .insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Sending Message failed' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage });
  }
};

//nextblog_admin

export default handler;

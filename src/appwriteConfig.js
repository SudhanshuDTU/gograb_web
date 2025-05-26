// appwriteConfig.js
import { Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API endpoint
  .setProject('6825c62c001dbeb49b71'); // Your project ID

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
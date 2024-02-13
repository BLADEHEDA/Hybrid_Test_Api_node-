const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const uri = 'mongodb+srv://nkwetakembrunodudu9:E4dHQmSqWt4lSB5H@cluster0.tkhtgeq.mongodb.net/?retryWrites=true&w=majority'
const server = http.createServer(app);

async function startServer() {
  try {
    const conn = await mongoose.connect(uri, {
      autoIndex: true,
      
    });
    
    console.log(`MongoDB Connected: {conn.connection.host}`);
    server.listen(PORT, () => {
      console.log('Server is running on port:', PORT);
    });
  } catch (error) {
    console.error(error);
    console.log('mongodb did not connect');
    process.exit(1);
  }
}


startServer();

const mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost:27017/manager-tasks').connection;

db.on('connected', () => console.log('mongodb connected'));
db.on('disconnected', () => console.log('mongodb disconnected'));
db.on('error', () => console.log('mongodb error'));

process.on('SIGINT', () => {
  db.close(() => {
    console.log('close application');
    process.exit(0);
  })
})
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const courses = require('./resource/courses.json');

app.get('/', (req, res) => {
  res.send(courses);
});

app.get('/courses',(req, res) =>{
  res.send(courses);
});

app.get('/course/:name', (req, res) =>{
  const categoryName = req.params.name;
  const categoryData = courses.filter(course => course.category == categoryName);
  res.send(categoryData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
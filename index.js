const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const courses = require('./resource/courses.json');
const { createSearchParams } = require('react-router-dom');

app.get('/', (req, res) => {
  res.send(courses);
});

app.get('/courses',(req, res) =>{
  res.send(courses);
});

app.get('/courses/:name', (req, res) =>{
  const categoryName = req.params.name;
  const catName = courses.find(cat => cat.category == categoryName);
  if(!catName){
    res.send();
  }else{
    const categoryData = courses.filter(course => course.category == categoryName);
     res.send(categoryData);
     
  }
 
});

app.get('/course/:id', (req, res) => {
  const courseDetails = req.params.id;
  const details = courses.find(data => data.id == courseDetails);
  res.send(details);
});

app.get('/premium/:id', (req, res) => {
  const courseDetails = req.params.id;
  const details = courses.find(data => data.id == courseDetails);
  res.send(details);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
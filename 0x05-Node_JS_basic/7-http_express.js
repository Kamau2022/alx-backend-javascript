const express = require('express');
const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const rows = data.split('\n');

  const getAttribute = () => rows[0].split(',');

  const getRowData = () => {
    const rowData = [];
    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i].split(',');
      rowData.push(row);
    }
    return rowData;
  };

  const CSVObject = () => {
    const attributes = getAttribute(data);
    const rowData = getRowData();

    const rowsObj = [];
    for (let i = 0; i < rowData.length; i += 1) {
      const rowObj = {};

      for (let j = 0; j < rowData[i].length; j += 1) {
        rowObj[attributes[j]] = rowData[i][j];
      }

      rowsObj.push(rowObj);
    }

    return rowsObj;
  };

  const newData = CSVObject();
  const FirstNamesCs = newData
    .filter((person) => person.field === 'CS')
    .map((person) => person.firstname);

  const FirstNamesSwe = newData
    .filter((person) => person.field === 'SWE')
    .map((person) => person.firstname);

  return { newData, FirstNamesSwe, FirstNamesCs };
}
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(`Number of students: ${data.FirstNamesSwe.length + data.FirstNamesCs.length}\n`);
      res.write(`Number of students in CS: ${data.FirstNamesCs.length}. List: ${data.FirstNamesCs.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.FirstNamesSwe.length}. List: ${data.FirstNamesSwe.join(', ')}`);
      res.send();
    }).catch((err) => res.end(err.message));
}).listen(1245);

module.exports = app;

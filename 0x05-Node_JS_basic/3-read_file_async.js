const fs = require('fs');

function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
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

        console.log(`Number of students: ${FirstNamesSwe.length + FirstNamesCs.length}`);
        console.log(`Number of students in CS: ${FirstNamesCs.length}. List: ${FirstNamesCs.join(', ')}`);
        console.log(`Number of students in SWE: ${FirstNamesSwe.length}. List: ${FirstNamesSwe.join(', ')}`);
      }
      resolve(true);
    });
  });
}
module.exports = countStudents;

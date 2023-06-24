const fs = require('fs');

function countStudents() {
  try {
    // Importing fs module to read the file
    const data = fs.readFileSync('database.csv', 'utf8'); // using 'utf8' encoding

    // splitting the CSV by row as "\n" represents new row
    const rows = data.split('\n');

    // Getting the attribute from the index 0 of the rows
    const getAttribute = () => rows[0].split(',');

    // Further splitting the Rows
    const getRowData = () => {
      const rowData = [];
      for (let i = 1; i < rows.length; i += 1) {
        const row = rows[i].split(',');
        rowData.push(row);
      }
      return rowData;
    };

    //  The CSV parser
    const CSVObject = () => {
      const attributes = getAttribute(data);
      const rowData = getRowData();

      const rowsObj = [];
      for (let i = 0; i < rowData.length; i += 1) {
        const rowObj = {};

        for (let j = 0; j < rowData[i].length; j += 1) {
          rowObj[attributes[j]] = rowData[i][j]; // converting to object as attribute as key.
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
  } catch (e) {
    console.log('Cannot load the database');
  }
}
module.exports = countStudents;

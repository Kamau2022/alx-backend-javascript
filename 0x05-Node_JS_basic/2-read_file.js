const fs = require("fs");

function countStudents(){

// Importing fs module to read the file 
const fs = require("fs")
const data = fs.readFileSync("database.csv", "utf8") // using 'utf8' encoding


// splitting the CSV by row as "\n" represents new row
let rows = data.split("\n") 

// Getting the attribute from the index 0 of the rows
const getAttribute = () => {
  return rows[0].split(',')
}

// Further splitting the Rows 
const getRowData = () => {
  let rowData = []
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',')
    rowData.push(row)
  }
  return rowData;
}


//  The CSV parser 
const CSVToObject = () => {

  const attributes = getAttribute(data)
  const rowData = getRowData()

  let rowsObj = []
  for (let i = 0; i < rowData.length; i++) {

    let rowObj = {}

    for (let j = 0; j < rowData[i].length; j++) {
      rowObj[attributes[j]] = rowData[i][j]; // converting to object as attribute as key.
    }

    rowsObj.push(rowObj)
  }

  return rowsObj
}

let newData = CSVToObject()
const FirstNames_cs = newData
  .filter(person => person.field === 'CS')
  .map(person => person.firstname)
  
const FirstNames_swe = newData
  .filter(person => person.field === 'SWE')
  .map(person => person.firstname)

console.log(`Number of students: ${FirstNames_swe.length + FirstNames_cs.length}`);
console.log(`Number of students in CS: ${FirstNames_cs.length}. List: ${FirstNames_cs.join(', ')}`)
console.log(`Number of students in SWE: ${FirstNames_swe.length}. List: ${FirstNames_swe.join(', ')}`)

}
module.exports = countStudents;

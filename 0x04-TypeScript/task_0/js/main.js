var studentOne = {
    firstName: 'rawi',
    lastName: 'daniel',
    age: 26,
    location: 'Addis Ababa',
};
var studentTwo = {
    firstName: 'rawera',
    lastName: 'daniel',
    age: 26,
    location: 'Addis Ababa',
};
var studentsList = [studentOne, studentTwo];
var CreateTable = document.createElement('table');
CreateTable.style.border = '1px solid black';
var bodyElement = document.querySelector('body');
bodyElement === null || bodyElement === void 0 ? void 0 : bodyElement.appendChild(CreateTable);
function generateTableHead(table, data) {
    var head = table.createTHead();
    var row = head.insertRow();
    for (var _i = 0, _a = Object.keys(data[0]); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key === 'firstName' || key === 'location') {
            var th = document.createElement('th');
            th.style.border = '1px solid black';
            var text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
}
function generateTable(table, data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var obj = data_1[_i];
        var row = table.insertRow();
        for (var _a = 0, _b = Object.keys(obj); _a < _b.length; _a++) {
            var ele = _b[_a];
            if (ele === 'firstName' || ele === 'location') {
                var cell = row.insertCell();
                cell.style.border = '1px solid black';
                var val = obj[ele];
                var text = document.createTextNode(val);
                cell.appendChild(text);
            }
        }
    }
}
generateTableHead(CreateTable, studentsList);
generateTable(CreateTable, studentsList);

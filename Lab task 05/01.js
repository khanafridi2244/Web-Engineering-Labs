var obj = {
  firstName: "Sikandar",
  lastName: "Afridi",
  age: 22,
};

function generateTable() {
  var container = document.getElementById("table-container");

  var table = document.createElement("table");

  var firstRow = document.createElement("tr");
  var keyHeader = document.createElement("th");
  keyHeader.textContent = "Key";
  var valueHeader = document.createElement("th");
  valueHeader.textContent = "Value";
  firstRow.appendChild(keyHeader);
  firstRow.appendChild(valueHeader);
  table.appendChild(firstRow);

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var row = document.createElement("tr");

      var keyCell = document.createElement("td");
      keyCell.textContent = key;
      row.appendChild(keyCell);

      var valueCell = document.createElement("td");
      valueCell.textContent = obj[key];
      row.appendChild(valueCell);

      table.appendChild(row);
    }
  }

  container.appendChild(table);
}

window.onload = generateTable;

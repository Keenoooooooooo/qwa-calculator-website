function addRow(){
    const table = document.getElementById('myTable');
    const newRow = table.insertRow();

    const cell1 =newRow.insertCell(0);
    const cell2 =newRow.insertCell(1);
    const cell3 =newRow.insertCell(2);
    const cell4 =newRow.insertCell(3);

    cell1.contentEditable =true;
    cell2.contentEditable=true;
    cell3.contentEditable=true;
    cell4.contentEditable=true;

    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
}

function deleteLastRow() {
    const table = document.getElementById("myTable");
    const rowCount = table.rows.length;
    if (rowCount > 2) {
      table.deleteRow(rowCount - 1);
    }
  }
  document.querySelectorAll("td.placeholder").forEach(cell => {
    cell.addEventListener("click", function () {
      if (this.innerText === "Enter name...") {
        this.innerText = "";
        this.classList.remove("placeholder");
      }
    });
  });


function credits(credCol, numGradeCol) {
  const rows = document.querySelectorAll('#courseBody .row, #courseBody tr');
  let hasInput = false;

  rows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        hasInput = true;
      }
    });
  });

  if (!hasInput) {
    alert('Please fill in at least one course before calculating!');
    return;
  }

  const table = document.getElementById("myTable");
  let credxgrade = 0;
  let credSum = 0;

  for (let i = 1; i < table.rows.length; i++) {
    const cred = parseFloat(table.rows[i].cells[credCol].textContent) || 0;
    const numGrade = parseFloat(table.rows[i].cells[numGradeCol].textContent) || 0;
    credxgrade += cred*numGrade;

    const credits = table.rows[i].cells[credCol];
    const sumCred = parseFloat(credits.textContent) || 0;
    credSum += sumCred

    qwa = credxgrade/credSum
  }
  document.getElementById('sumResult').textContent = qwa.toFixed(2)
}


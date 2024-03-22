var employees = [
    {
        name: "Amey Gaonkar",
        designation: "In Charge",
        department: "OIT"
    },
    {
        name: "Sidney Antao",
        designation: "Network Engineer",
        department: "OIT"
    },
    {
        name: "Neha Khandeparkar",
        designation: "Senior Developer",
        department: "OIT"
    },
    {
        name: "Abhishek Sawant",
        designation: "Junior Developer",
        department: "OIT"
    }
];

function renderTable(){
    let target = document.getElementById('render-table');
    let table = document.createElement('table');
    table.setAttribute("class", "tableList");
    let columns = ["No.", "Name", "Designation", "Department", "Actions"];

    if(employees.length > 0){
        let tr = document.createElement('tr'), th, td;
        
        for (colName of columns) {
            th = document.createElement('th');
            th.appendChild(document.createTextNode(colName));
            tr.appendChild(th);
        }
        table.appendChild(tr);

        for (i in employees) {
            tr = document.createElement('tr');
            td = document.createElement('td');
            td.appendChild(document.createTextNode(parseInt(i)+1));
            tr.appendChild(td);

            td = document.createElement('td');
            td.appendChild(document.createTextNode(employees[i].name));
            tr.appendChild(td);

            td = document.createElement('td');
            td.appendChild(document.createTextNode(employees[i].designation));
            tr.appendChild(td);

            td = document.createElement('td');
            td.appendChild(document.createTextNode(employees[i].department));
            tr.appendChild(td);

            table.appendChild(tr);
        }

        target.appendChild(table);
    } else {
        target.innerHTML= "<h4 class='disabled-text'>No records found</h4>";
    }

}

renderTable();
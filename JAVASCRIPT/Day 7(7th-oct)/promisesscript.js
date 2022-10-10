console.log(fetch("https://jsonplaceholder.typicode.com/todos"))

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((Response) => Response.json())
    .then((json) => tableData(json));


var tbody = document.querySelector("tbody")
function tableData(json) {
    console.log(tbody)
    console.log(json);

    for (obj of json) {
        // console.log(obj)
        let newrow = document.createElement("tr")
        for (key in obj) {
            //   console.log(obj[key])
            let td = document.createElement("td")
            td.innerHTML = obj[key];
            if (obj[key] === true) {
                console.log(obj[key]);
                td.style.color = "green";
            }
            else if (obj[key] === false) {
                td.style.color = "red";
            }
            newrow.appendChild(td)
        }
        tbody.appendChild(newrow)
    }

    var allrows = document.getElementsByTagName("tr");
    for(row of allrows){
        row.children[0].className = "text-warning"
        row.children[1].className = "text-info"
    }


}



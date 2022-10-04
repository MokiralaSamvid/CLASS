var add_button = document.getElementById("add-button")
add_button.addEventListener('click', addElementItem);

var previous_items = document.getElementsByClassName("list-item")
var previous_item_names = document.querySelectorAll(".list-item p")
console.log(previous_item_names)

function addElementItem(event) {
    var previous_item_names = document.querySelectorAll(".list-item > p")
    console.log(previous_item_names)

    
   

    var item = document.createElement("div")
    item.className = "list-item";

    var para_value = document.createElement("p")
    var item_name = document.createTextNode(document.getElementById("todo-list-item").value);
    para_value.appendChild(item_name);
    console.log(item_name)
    para_value.style.display = "inline-block"
    // console.log(item_name)
    var close_button = document.createElement("div");
    close_button.className = "close-button"
    close_button.appendChild(document.createTextNode("\u00D7"));

    if(para_value.innerHTML==""){
        alert("Enter item to add !!")
        return
    }

    for (i = 0; i < previous_item_names.length; i++) {
        console.log(previous_item_names[i].textContent)
        console.log((para_value.innerHTML))

        console.log(previous_item_names[i].textContent == para_value.innerHTML )
        if(previous_item_names[i].textContent == para_value.innerHTML){
            alert("Item Already Exists !!")
            return;
            
        }
    }

    item.append(para_value);
    item.append(close_button);
    document.getElementById("u-list").appendChild(item)

    // Taking Help of EventBubbling 
    var close_items = document.getElementsByClassName("close-button")
    for (i = 0; i < close_items.length; i++) {
        close_items[i].onclick = function () {
            var parent = this.parentElement;
            parent.style.display = "none";
            parent.remove();
        }
    }
}

function alreadyExists(){
console.log(previous_item_names)

}






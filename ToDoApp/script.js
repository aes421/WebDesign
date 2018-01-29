//Mock data
var text = '{ "items" : [ { "key": 0, "text": "Test", "complete": false }, { "key": 1, "text": "123", "complete": false }] }';
var items = JSON.parse(text).items;

document.addEventListener("DOMContentLoaded", function(event) {
   loadList();
});



function addItem(){
	//read the box, create new item, and append it to the list
	var newItemText = document.getElementById("textbox").value;
	var newItem = { "key": items[items.length - 1].key + 1, "text": newItemText, "complete": false };
	items.push(newItem);
	//reload the list and clear the input value
	loadList();
	document.getElementById("textbox").value = "";
}

function loadList(){
	var list = document.getElementById("todoList");
	list.innerHTML = "";
	items.forEach(function(item){
		//create list item
		var element = document.createElement('li');
		element.id = item.key;

		//create checkbox
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.id = "checkbox" + item.key;
		checkbox.checked = item.complete;
		checkbox.addEventListener('change', changeState);

		if (checkbox.checked === true){
			var deleteButton = document.createElement('input');
			deleteButton.type = "button";
			deleteButton.id = "deleteButton" + item.key;
			deleteButton.value = "X";
			deleteButton.addEventListener("click", deleteTask);
			element.appendChild(deleteButton);

		}

		//add all items to list item
		element.appendChild(checkbox);
		element.appendChild(document.createTextNode(item.text));

		list.append(element);
	});
}

function changeState(evt){
	var key = evt.target.parentElement.id;
	var value = evt.target.checked;
	items[key].complete = value;
	loadList();
}

function deleteTask(evt){
	items.splice(evt.target.parentElement.id, 1);
	loadList();
}
//Mock data
var text = '{ "items" : [ { "key": 0, "text": "Test", "complete": false }, { "key": 1, "text": "123", "complete": false }] }';
var items = JSON.parse(text).items;

document.addEventListener("DOMContentLoaded", function(event) {
   loadList(items);
});



function addItem(){
	//read the box, create new item, and append it to the list
	var newItemText = document.getElementById("textbox").value;
	var newItem = { "key": items.length, "text": newItemText, "complete": false };
	items.push(newItem);
	//reload the list and clear the input value
	loadList(items);
	document.getElementById("textbox").value = "";
}

function loadList(items){
	var list = document.getElementById("todoList");
	list.innerHTML = "";
	items.forEach(function(item){
		var element = document.createElement('li');
		element.appendChild(document.createTextNode(item.text));
		list.append(element);
	});
}
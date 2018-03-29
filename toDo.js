// Create a new list item when clicking the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

/*let activeList; //from class

function addItem(element){
    activeList = $(this).parent().parent();
    //open model
}

//this function is called when model save is pushed
function saveTodoItem(theValue) {
    $(activeList).find("todolist").append("<div>" + thevalue + "</div>")
    ;
}*/

//add empty div todolist
function addList(){
   let list = document.createElement("div");
   document.getElementById("newList").appendChild(list);
}
console.log("Hello" + " World");




function markComplete(myelement){
    let mydad = $(myelement).parent().parent();
    $(mydad).toggleClass("complete");

    $(mydad).find(".iconspot").toggleClass("fa-check");
}

function removeRow(theeElement) {
    let grandpa = $(theeElement).parent().parent();
    /*$(grandpa).remove();*/
//remove all edit marks for function
    $(grandpa).slideUp('1000', function () {
        //fires after slide up is done
        $(grandpa).remove();
    })

}
// Create a new list item when clicking the "Add list" button W3
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

//add empty div todolist
/*function addList(){
   let list = document.createElement("div");
   document.getElementById("newList").append(listLabel);
}*/

$(".bluebtn").click(function(event){
    let myval = $("#myInput").val();
    // if(event.which === 13){
    $(".listContainer").append("<div class='todolist'>" + myval +
            " <input id='" + myval + "' onclick='addtheItem(this, this.value, event)'placeholder='Add A Item' type='text'> <a class=\"OrgBtn\" onclick=\"addtheItem()\">Add Item</a><div class='itembox'></div></div>");
        $('#myInput').val("");
        // }

});

function addtheItem(incid, myvalue, event){
    // if(event.keyCode === 13){
        $(incid).parent().find(".itembox").append(" <div class=\"row\">\n" +
            "<div class=\"rowleft\">\n" +
            "<div class=\"iconspot fa\"></div>\n" +
            "<div class=\"label\">" + myvalue +"</div>\n" +
            "</div>\n" +
            " <div class=\"rowright\">\n" +
            "<button onclick=\"markComplete(this)\">Mark Complete</button>\n" +
            "<div class=\"fa fa-trash\" onclick=\"removeRow(this)\"></div>\n" +
            "</div></div>");
        $(incid).val("");
    // }
}

addtheItem()

$(".OrgBtn").click(function(event) {

})


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

$(".bluebtn").click(function(event){
    let myval = $("#myInput").val();
    if (myval === '') {
    alert("To Start, Type Your New List In The Input Box!");
} else {
    $(".listContainer").append("<div contenteditable='true' class='todolist'><div class='listHeaderAddTasks'>" + myval +
        "<input id='" + myval + "' onkeyup='addtheItem(this, this.value, event)'placeholder='Add Item Press Enter' type='text'>" +
        "<div><a class=\"OrgBtn\" onclick=\"removeRow(this)\">Remove list</a></div></div>" +
        "<div class='taskBox'></div>" +
        "</div>");
        //.get(0).contentEditable = true; //Add this Line to make list editable
    // ^^Added extra divs to manipulate it with CSS.
   // $('.listHeaderAddTasks').get(0).contentEditable = true;
    $('#myInput').val("");
    // ^^This clears the input everytime you press enter.
    }
});

function addtheItem(incid, myvalue, event){
     if(event.keyCode === 13){
        $(incid).parent().parent().find(".taskBox").append("<div class=\"row\">" +
            // went up two parents because I added another div, then found the task box from there. There is probably a better way to do this though.
            "<div class=\"rowleft\">" +
            "<div class=\"iconspot fa\"></div>" +
            "<div contenteditable='true' class=\"label\">" + myvalue + "</div>" +
            "</div>" +
            "<div class=\"rowright\">" +
            "<button class=\"comp\" onclick=\"markComplete(this)\">Mark Complete</button>" +
            "<div class=\"fa fa-trash\" onclick=\"removeRow(this)\"></div>" +
            "</div></div>");
        $(incid).val("");
     }
}

//List input enter function
$('#myInput').keyup(function(event) {
    let myval = $("#myInput").val();
    if(event.keyCode === 13){
        $(".listContainer").append("<div contenteditable='true' class='todolist'><div class='listHeaderAddTasks'>" + myval +
            "<input id='" + myval + "' onkeyup='addtheItem(this, this.value, event)'placeholder='Add Item Press Enter' type='text'>" +
            "<div><a class=\"OrgBtn\" onclick=\"removeItem(this)\">Remove list</a></div></div>" +
            "<div class='taskBox'></div>" +
            "</div>");

        $('#myInput').val("");

    }
});

//toggle OrgBtn onClick functions - removeItem/removeRow for testing list removal


function markComplete(myelement){
    let mydad = $(myelement).parent().parent();
    $(mydad).toggleClass("complete");

    $(mydad).find(".iconspot").toggleClass("fa-check");
}

//Remove a row
function removeRow(theeElement) {
    let grandpa = $(theeElement).parent().parent();//Problem with removing list. 1 more .parent() breaks code
    /*$(grandpa).remove();*/
//remove all edit marks for function
    $(grandpa).slideUp('1000', function () {
        //fires after slide up is done
        $(grandpa).remove();
    })
}

//Test to remove entire list
function removeItem(theeElement) {
    let grandpa = $(theeElement).parent().parent().parent(this);//Problem with removing list. 1 more .parent() breaks code
    //$(grandpa).remove();
//remove all edit marks for function
    $(grandpa).slideUp('1000', function () {
        //fires after slide up is done
        $(grandpa).remove();
    })
}





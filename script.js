var inField = document.getElementById('inField');
// var mytodolist = document.getElementById('mytodolist');
var mytodolist = document.getElementById('mytodolist');
console.log(mytodolist);
console.log(inField);

function addItem() {
    if (inField.value == "") {
        alert("Please fill the input field")
    } else {

        var li = document.createElement('li')
        li.setAttribute("id","myListItem")
        var val = inField.value;
        var litext = document.createTextNode(val)
        li.appendChild(litext);
        
        var editbtn = document.createElement('button')
        editbtn.innerHTML='<img src="edit.png" />'
        editbtn.setAttribute("onclick","editItem(this)");
        
        
        // var editicon = document.createElement('img')
        // editicon.src="img/edit.png";
        // var editIconText = document.createTextNode('edit')
        // editicon.appendChild(editIconText)
        // console.log(editicon);
        // editbtn.appendChild(editicon);
        
        
        
        
        // editbtn.innerHTML = <span class="material-icons">edit</span>
        console.log(editbtn)


        var clrbtn = document.createElement('button')
        clrbtn.innerHTML='<img src="clear.png" />'
        clrbtn.setAttribute("onclick","clrItem(this)");
        
        // var clricon = document.createElement('img');
        // clricon.src="img/clear.png";
        // clrbtn.appendChild(clricon);
        
        li.appendChild(editbtn);
        li.appendChild(clrbtn);
        
        // console.log(li);
        console.log(li);


        mytodolist.appendChild(li);
        console.log(mytodolist);
        // var listItem= li.innerText;
        // mytodolist.innerHTML = li.innerHTML;

        inField.value="";
    }


    
}
function deleteAll() {
    mytodolist.innerHTML = ""
}

function clrItem(clrBtn) {
    console.log(clrBtn);
    clrBtn.parentNode.remove();
    console.log(clrBtn);
}

function editItem(editBtn) {
    var a = prompt("Enter the edited text")
    editBtn.parentNode.firstChild.nodeValue = a;
}
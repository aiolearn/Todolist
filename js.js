todo_list=[];
todo_date=[];

if (localStorage.getItem('todo_list')){
    todo_list = JSON.parse(localStorage.getItem('todo_list'));
    todo_date = JSON.parse(localStorage.getItem('todo_date'));
    read_list();
}



function read_list(){
    document.getElementById("list").innerHTML='';
    for (var x =0 ; x< todo_list.length  ; x++){ 
        document.getElementById("list").innerHTML=   document.getElementById("list").innerHTML + ' <div class="todo1">' + todo_list[x] + '<button class="close" onclick="delete_list('+x+')"  >x</button><span class="time1">' + todo_date[x]+'</span></div>';
    }
}


function add_to_list(event){
    var text= document.getElementById("in1").value;
    if (event.code=="Enter" && text.length>0){
        todo_list.push(text);

        var date1 = new Date();
        var h = date1.getHours();
        var m = date1.getMinutes();
        var s = date1.getSeconds();
        var saat = h + ":"+ m+ ":" + s

        todo_date.push(saat);
         

        read_list();

        localStorage.setItem("todo_list", JSON.stringify(todo_list));
        localStorage.setItem("todo_date", JSON.stringify(todo_date));
        document.getElementById("in1").value='';
    }
}


function delete_list(index){
    console.log(index)
    todo_list.splice(index,1);
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
    localStorage.setItem("todo_date", JSON.stringify(todo_date));
    read_list();
}
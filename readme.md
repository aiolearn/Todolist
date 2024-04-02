<h1 align="center">Welcome to Todolist Project! 👋</h1>

# Todolist

In this project, we have written a todolist program called Nevisana

## Skills

Html , css , js

## Usage

First we write an array for hours and tasks and then store it locally

```Javascript
todo_list=[];
todo_date=[];

if (localStorage.getItem('todo_list')){
    todo_list = JSON.parse(localStorage.getItem('todo_list'));
    todo_date = JSON.parse(localStorage.getItem('todo_date'));
    read_list();
}
```

In the next step, we wrote the code that displays the task we entered on the screen

```Javascript
function read_list(){
    document.getElementById("list").innerHTML='';
    for (var x =0 ; x< todo_list.length  ; x++){ 
        document.getElementById("list").innerHTML=   document.getElementById("list").innerHTML + ' <div class="todo1">' + todo_list[x] + '<button class="close" onclick="delete_list('+x+')"  >x</button><span class="time1">' + todo_date[x]+'</span></div>';
    }
}
```

Next, we extended the code and added the clock to the list

```Javascript
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
```

In the following code we can delete the added list

```Javascript
function delete_list(index){
    console.log(index)
    todo_list.splice(index,1);
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
    localStorage.setItem("todo_date", JSON.stringify(todo_date));
    read_list();
}
```

## Result

This project was written by Majid Tajanjari and the Aiolearn team, and we need your support!❤️


# تودولیست

در این پروژه یک برنامه todolist به نام نویسانا نوشته ایم

## مهارت ها

Html , css , js

## نحوه استفاده

ابتدا یک آرایه برای ساعت ها و وظایف می نویسیم و سپس آن را به صورت محلی ذخیره می کنیم

```Javascript
todo_list=[];
todo_date=[];

if (localStorage.getItem('todo_list')){
    todo_list = JSON.parse(localStorage.getItem('todo_list'));
    todo_date = JSON.parse(localStorage.getItem('todo_date'));
    read_list();
}
```

در مرحله بعد کدی را نوشتیم که وظیفه ای را که وارد کرده بودیم روی صفحه 
نمایش می دهد

```Javascript
function read_list(){
    document.getElementById("list").innerHTML='';
    for (var x =0 ; x< todo_list.length  ; x++){ 
        document.getElementById("list").innerHTML=   document.getElementById("list").innerHTML + ' <div class="todo1">' + todo_list[x] + '<button class="close" onclick="delete_list('+x+')"  >x</button><span class="time1">' + todo_date[x]+'</span></div>';
    }
}
```

سپس کد را گسترش دادیم و ساعت را به لیست اضافه کردیم

```Javascript
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
```

در کد زیر می توانیم لیست اضافه شده را حذف کنیم

```Javascript
function delete_list(index){
    console.log(index)
    todo_list.splice(index,1);
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
    localStorage.setItem("todo_date", JSON.stringify(todo_date));
    read_list();
}
```

## نتیجه

این پروژه توسط مجید تجن جاری و تیم Aiolearn نوشته شده است و ما به حمایت شما نیازمندیم!❤️
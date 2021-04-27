menu_list_array = ["Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                    "Paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza",]

function getmenu()
var htmldata;
htmldata= "<ol class = "menulist">"
menu_list_array.sort();
for(i=0;1<menu_list_array.length;i++){
htmldata=htmldata+ <'li'> + menu_list_array[i] + "</li>"
} 

function add_item(){
var htmldata;
var item=document.getElementById("add_item").Value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class="cards">"
for(i=0;1<menu_list_array.length;i++){

htmldata=htmldata+"<div class="cards">" + <img src="pizzaImg.png"/> menu_list_array[i] + "</div>"
}
htmldata=htmldata+ "</sections>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
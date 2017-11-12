var item_close_list = document.getElementsByClassName("item_close");
var item_open_list = document.getElementsByClassName("item_open");
var item_open_color = "#ff8663"; //оранжевый
var item_close_color_1 = "#e7e7e7"; //светло-серый
var item_close_color_2 = "#696666"; //темно-серый
var menu_id = 0; //порядковый номер пунката меню

//функция для раскрашивания меню
var colorize_menu = function() {
	for (var i = 0; i<item_close_list.length; i++) {
		if (i % 2 == 0) {
			item_close_list[i].style.background = item_close_color_1;
			item_close_list[i].style.color = item_close_color_2;
		} else {
			item_close_list[i].style.background = item_close_color_2;
			item_close_list[i].style.color = "white";
		}
		
	}
}

colorize_menu();

var click_func = function (e) {
	colorize_menu();
	
	if (e.currentTarget.nextElementSibling.hidden) {
		e.currentTarget.style.background = item_open_color;
		e.currentTarget.style.color = "white";
		for (var i = 0; i < item_open_list.length; i++) {
			item_open_list[i].hidden = true;
		}
		e.currentTarget.nextElementSibling.hidden = false;
	} else {
		if (e.currentTarget.menu_id % 2 == 0) {
			e.currentTarget.style.background = item_close_color_1;
			e.currentTarget.style.color = item_close_color_2;
		} else {
			e.currentTarget.style.background = item_close_color_2;
		}
		e.currentTarget.nextElementSibling.hidden = true;
	}
}

for (var i = 0; i < item_close_list.length; i++) {
	item_close_list[i].addEventListener("click", click_func);
	item_close_list[i].menu_id = i;
}



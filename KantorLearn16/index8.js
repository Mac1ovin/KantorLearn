var date = new Date(),
  dayOfWeek = date.getDay();

switch (dayOfWeek) {
  case 0:
    document.write("Сегодня воскресенье" + "<br />");
    break;
  case 1:
    document.write("Сегодня понедельник" + "<br />");
    break;
  case 2:
    document.write("Сегодня вторник" + "<br />");
    break;
  case 3:
    document.write("Сегодня среда" + "<br />");
    break;
  case 4:
    document.write("Сегодня четверг" + "<br />");
    break;
  case 5:
    document.write("Сегодня пятница" + "<br />");
    break;
  case 6:
    document.write("Сегодня суббота" + "<br />");
}
var color = "red";
switch (color) {
  case "green":
    document.write('<font color="green">Зелёный</font>');
    break;
  case "red":
    document.write('<font color="red">Красный</font>');
    break;
  case "blue":
    document.write('<font color="blue">Cиний</font>');
    break;
  case "yellow":
    document.write('<font color="yellow">Жёлтый</font>');
    break;
  default:
    document.write("Неизвестный цвет");
}

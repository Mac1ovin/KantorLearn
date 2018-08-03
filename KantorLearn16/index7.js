var date = new Date(),
  hours = date.getHours();

if (hours < 12 && hours > 5) {
  document.write("C добрым утром!");
} else if (hours >= 12 && hours < 18) {
  document.write("Добрый день!");
} else if (hours >= 18 && hours < 22) {
  document.write("Добрый вечер!");
} else {
  document.write("Доброй ночи!");
}

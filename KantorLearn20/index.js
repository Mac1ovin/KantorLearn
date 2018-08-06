// Задача и пример! 'Switch' на 'if'
// switch (browser) {
//   case "IE":
//     alert("О, да у вас IE!");
//     break;
//   case "Chrome":
//   case "Firefox":
//     alert("Да, и эти браузеры мы поддерживаем");
//     break;
//   default:
//     alert("Мы надеемся, что и в вашем браузере все ок!");
// }
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     [break]
//   case 'value2':  // if (x === 'value2')
//     [break]
//   default:
//     [break]
// }
"use strict";
var browser;
if (browser === "IE") {
  alert("О, да у Вас IE!");
} else if (browser === "Chrome") {
  alert("Эти браузеры мы поддерживаем");
} else {
  alert("Мы надеемся,что и в вашем браузере все ок)");
}

// Создаем переменную с именем body, чтобы нам было проще ссылаться на нее ниже.

let body = document.querySelector("body"); 


// Создаем функцию с именем goLight, которая удаляет «темный» класс из body

  goLight = function() { 
    body.className = "";
  };

// Создаем функцию с именем goDark, которая добавляет к body класс dark

  goDark = function() { 
    body.className = "";
    body.classList.add("dark");
  }

// Сообщаем первой кнопке запустить функцию goLight при нажатии

document.querySelector(".theme1").addEventListener("click", goLight, false); 


// Сообщаем второй кнопке запустить функцию goLight при нажатии

document.querySelector(".theme2").addEventListener("click", goDark, false); 

switchImmediately(); 
  
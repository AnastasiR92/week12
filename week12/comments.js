let taskName = document.getElementById('taskName');
let taskPic = document.getElementById('taskPic');
let taskComment = document.getElementById('taskComment');
let toSend = document.getElementById('toSend');
let comments = document.getElementById('comments');


//Пишем функцию, которая будет преобразовывать имя с учётом всех нюансов - лишние пробелы, отсутствие больших букв в имени и прочее. Например, было введено пользователем : иВаН . Стало: Иван .


//.trim - удаляем пробелы в начале и конце строки
//.replace - заменяем один или несколько пробелов между словами на один пробел
//.split(" ") разделяеv строку на массив слов
//.map() применяем к каждому слову, чтобы менял первую букву на заглавную, а со второного символа слова был применен регистр уменьшения на строчные
//.join(" ") - собираем все символы в одну строку
function nameChecker(name) {
    let strName = name.trim().replace(/\s/g, " ").split(" ").map(
        (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");
        return strName;
}

//Функция для добавления комментария
function submitComment() {
    const taskName = document.getElementById('taskName');
    const taskPic = document.getElementById('taskPic');
    const taskComment = document.getElementById('taskComment');
    const comments = document.getElementById('comments');
}

submitComment();

//Функция для проверки и замены спам-слов

function checkSpam(str){
    let strSpam = str.replace(/viagra|XXX/gi, "***");
    return strSpam;
}

//преобразование и проверка данных
const checkedName = taskName(taskName.value);
const picUrl = taskPic(taskPic.value);
const message = taskComment(taskComment.value);

//Для добавления комментария на странцу
//создаем сначала элемент комментария
const commentElement = document.createElement("div");
commentElement.innerHTML = `<p><b>${checkedName}</b></p>
<img src="${picUrl}" alt="Аватар пользователя">
<p>${message}</p>
`;

comments.appendChild(commentElement);

//чистим поле после ввода
taskName.value = "";
taskPic.value = "";
taskComment.value = "";
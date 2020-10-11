/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promo=document.getElementsByClassName('promo__adv'),
      genre= document.getElementsByClassName('promo__genre')[0],
      bg=document.getElementsByClassName('promo__bg')[0],
      movieList=document.querySelector('.promo__interactive-list'),
      input=document.querySelector('.adding__input');
promo[0].remove();

// const newGenre = document.createElement('newGenre');
// newGenre.classList.add('newGenre');
// newGenre.innerText='Драма';
// newGenre[0].replaceWith(genre[0]);

genre.textContent='Драма';

// bg.url="img/bg.jpg";
bg.style.backgroundImage='url("img/bg.jpg")';

movieDB.movies.sort();

movieList.innerHTML='';
movieDB.movies.forEach((film,i)=>{
movieList.innerHTML+=`<li class="promo__interactive-item">${++i} ${film}
<div class="delete"></div>
</li><br>`;
});

console.log(input.value);
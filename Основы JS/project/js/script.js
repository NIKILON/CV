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

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.getElementsByClassName('promo__genre')[0],
        bg = document.getElementsByClassName('promo__bg')[0],
        movieList = document.querySelector('.promo__interactive-list'),
        addinput = document.querySelector('.adding__input'),
        addForm = document.querySelector('form.add'),
        checkbox = document.querySelector('[type="checkbox"]');

    //sortMovies
    const sortArr = (arr) => {
        arr.sort();
    };
    //genreRename
    //changeBackgr
    const makeChanges = () => {
        genre.textContent = 'Драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    //DeleteAdv
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    //AddNewFilm
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addinput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }



        event.target.reset();
    });
    //createMovList
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${++i} ${film}
    <div class="delete"></div>
    </li><br>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    makeChanges();
    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);

});
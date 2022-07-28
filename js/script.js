"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
              b = prompt('На скільки оціните його?', '');
              if (a !=null && b != null && a != '' && b != '' & a.length < 50) {
                  personalMovieDB.movies[a] = b;
                  console.log('done');
              } else {
                  console.log('error');
                  i--;
              }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто досить мало фільмів!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман!");
    } else {
        console.log("Виникла помилка!");
    }
}

detectPersonalLevel();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр пвд номером ${i}`);
    }
}

writeYourGenres();


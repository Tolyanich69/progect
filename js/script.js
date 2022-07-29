"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN
        (personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
                  b = prompt('На скільки оціните його?', '');
    
                  if (a !=null && b != null && a != '' && b != '' && a.length < 50) {
                      personalMovieDB.movies[a] = b;
                      console.log('done');
                  } else {
                      console.log('error');
                      i--;
                  }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Переглянуто досить мало фільмів!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач!");
        } else if (personalMovieDB.count >= 30) {
            console.log("Ви кіноман!");
        } else {
            console.log("Виникла помилка!");
        }
    },
    showMyDB: function(hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введіть ваші улюблені жанри через кому`).toLowerCase();
            if (genres === '' || genres === null) {
                console.log('Ви ввели не коректні дані');
                i--;
            }
            else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
                       
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i+1} це ${item}`);
        });
    }
};



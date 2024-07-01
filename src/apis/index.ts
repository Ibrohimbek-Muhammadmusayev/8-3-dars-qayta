"server-only";

export async function getMovies() {
    try {
        const req = await fetch("https://api.kinopoisk.dev/v1.4/movie?limit=30",{
            method: "GET",
            headers: {
                "X-API-KEY": "NXBW3D0-8FHMJWV-JJWSEDV-JTKHPCB"
            }
        })
        const res = await req.json();
        return res
    } catch (error) {
        return error
    }
}

export async function getRatingMovies() {
    try {
        const req = await fetch("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10",{
            method: "GET",
            headers: {
                "X-API-KEY": "NXBW3D0-8FHMJWV-JJWSEDV-JTKHPCB"
            }
        })
        const res = await req.json();
        return res
    } catch (error) {
        return error
    }
}
// {
//     id: 5884949,
//     name: 'Хаяо Миядзаки: Экстра',
//     alternativeName: null,
//     type: 'tv-series',
//     typeNumber: 2,
//     year: 2018,
//     description: 'Сериал о жизни и творчестве Хаяо Миядзаки, легендарного японского аниматора. Анализируем скрытые смыслы мультфильмов 
// и рассказываем историю их создания.',
//     shortDescription: null,
//     status: null,
//     rating: { kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
//     votes: { kp: 3, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
//     movieLength: null,
//     totalSeriesLength: null,
//     seriesLength: null,
//     ratingMpaa: null,
//     ageRating: 18,
//     poster: {
//       url: 'https://image.openmoviedb.com/kinopoisk-images/4483445/0e9e59e2-a9cc-40a6-a0ad-0e4d1ae9ccc5/orig',
//       previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4483445/0e9e59e2-a9cc-40a6-a0ad-0e4d1ae9ccc5/x1000'
//     },
//     backdrop: {
//       url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a000001902a2e060a3ee36d43a6de8f7aa3/orig',
//       previewUrl: 'https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a000001902a2e060a3ee36d43a6de8f7aa3/x1000'
//     },
//     genres: [ [Object] ],
//     countries: [ [Object] ],
//     releaseYears: [ [Object] ],
//     top10: null,
//     top250: null,
//     isSeries: true,
//     ticketsOnSale: false
//   },
//   {
//     id: 5921502,
//     name: 'Мифические создания и как их готовят',
//     alternativeName: 'Jin tian de wan can jiu shi ni',
//     type: 'animated-series',
//     typeNumber: 5,
//     year: 2024,
//     description: 'Мо Бай — один из лучших учеников секты Тяньцзи, в которой все занимаются познанием и самосовершенствованием. Но кулинарные вопросы всегда волновали парнишку больше, чем философские. Случайная встреча с шеф-поваром-монстром по имени Сяо Хэй круто меняет его жизнь. Вместе они создают команду гурманов, которая отправляется в путешествие на поиски самых вкусных мифических созданий. Каждое из этих существ дарит им не только новый кулинарный опыт, но и интересную загадку. Правда, гурманы и не подозревают, какое древнее демоническое зло они пробудили — теперь оно тоже голодно и мечтает завладеть силой Мо Бая.',
//     shortDescription: null,
//     status: null,
//     rating: { kp: 0, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
//     votes: { kp: 8, imdb: 0, filmCritics: 0, russianFilmCritics: 0, await: 0 },
//     movieLength: null,
//     totalSeriesLength: null,
//     seriesLength: 14,
//     ratingMpaa: null,
//     ageRating: 18,
//     poster: {
//       url: 'https://image.openmoviedb.com/kinopoisk-images/4486454/f9974428-23a2-4c2f-828b-19f2c2e9c52a/orig',
//       previewUrl: 'https://image.openmoviedb.com/kinopoisk-images/4486454/f9974428-23a2-4c2f-828b-19f2c2e9c52a/x1000'
//     },
//     backdrop: {
//       url: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000019035abaa74d8050de1d31daf0f0e/orig',
//       previewUrl: 'https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000019035abaa74d8050de1d31daf0f0e/x1000'
//     },
//     genres: [ [Object], [Object], [Object] ],
//     countries: [ [Object] ],
//     releaseYears: [ [Object] ],
//     top10: null,
//     top250: null,
//     isSeries: true,
//     ticketsOnSale: false
//   }
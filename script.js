let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock", "folk rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

function getBestSellingAlbums() {
    console.log(bestSellingAlbums)
}

function getEaglesAlbums() {
    let eaglesAlbums = []
    for (const album of bestSellingAlbums) {
        if (album.artist === "Eagles") {
            eaglesAlbums.push(album)
        }
    }
    return eaglesAlbums
}
let albums = getAlbumsFromAnArtist("Pink Floyd", "Eagles") //hoisting
// function declaration
function getAlbumsFromAnArtist(artist, artist1) {
    let albums = []
    for (const album of bestSellingAlbums) {
        if (album.artist === artist || album.artist === artist1) {
            albums.push(album)
        }
    }
    return albums
}

// console.log(albums)
// function expression

const sumSalesForAnArtist = function (artist) { // nincs hoisting 
    let sum = 0
    for (const album of bestSellingAlbums) {
        if (album.artist === artist) {
            sum += album.sale
        }
    }
    return sum
}
let sum = sumSalesForAnArtist("Eagles")

//function expression
const compareGenres = (albumName1, albumName2) => {
    let commonGenres = []
    let album1
    let album2
    for (const album of bestSellingAlbums) {
        if (album.title === albumName1) {
            album1 = album
        } else if (album.title === albumName2) {
            album2 = album
        }
    }
    // album1.genres // array 
    for (const genreOfAlbum1 of album1.genres) { //  [ 'soft rock', folk rock ]   1. iteráció soft rock 2. iteráció - folk rock
        for (const genre of album2.genres) {     // [ 'country rock', 'soft rock', 'folk rock' ] - 
            if (genre === genreOfAlbum1) {
                commonGenres.push(genre)
            }
        }
    }
    return commonGenres
}
console.log(compareGenres("Hotel California", "Their Greatest Hits (1971 - 1975)"))

// console.log(sum)

// getBestSellingAlbums()
// let eaglesAlbums = getEaglesAlbums()
// console.log(eaglesAlbums)
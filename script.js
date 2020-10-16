let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie was added.")
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing movies...")
    for (const movie of allMovies) {
        console.log(movie);
    }
    console.log("In total you have " + allMovies.length + " movies.");
}



//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    console.log("Printing movies with a rating higher than " + rating + "...")
    let count = 0;
    for (const movie of allMovies) {
        if (movie.rating > rating) {
            console.log(movie);
            count += 1;
        }
    }
    console.log("There were " + count + " matches.");
}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].havewatched = !allMovies[i].havewatched;
            console.log("Changing status of movie.")
            break;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
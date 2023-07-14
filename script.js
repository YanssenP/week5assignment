//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirement//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//create class movie with constructor name, year

class Movie {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
// create a describe method to the movie to pronouce the information about the movies
    describe() {
        return `${this.name} was created in ${this.year}`;
    }
}

//create a 2nd class Genre with constructor name, movies array that holds on the Movies on that genre
class Genre {
constructor(name) {
    this.name = name;
    this.Movies = [];
}

//create a method addmovie that will take a movie to check to see if that movie is an instance of a player class.

addMovie(movie) {
if (movie instanceof Movie) {
    this.movies.push(movie);
} else {
    throw new Error('You can only add an instance of Movie. argument is not a player: ${movie}'); //this error message will tell what we did wrong when using this code
  }
}

// add describe method for genre

describe() {
    return `${this.name} has ${this.movies.length} movies.`;
}

}

//create class Menu which will drive the application and all the choices. under the constructor, I initialize the genres in a array of genres because we will have multiple genres inside this 
// application. create a variable for whatever genre that will be selceted and manage that genre one at a time.

class Menu { 
    constructor() {
        this.genres = [];
        this.selectedGenre = null; 
    }

    //add start method to start the menu to the application. 
    //add method using top down development approach where methods are being implemented.
    //this will be the flow of the application where and based on what they select, im going to create genre, view genre, delete genre, display all the genres


    start(){
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch(selection) {
                case '1' :
                    this.createGenre();
                    break;
                    case '2' :
                        this.viewGenre();
                        break;
                        case '3' :
                            this.deleteGenre();
                            break;
                            case '4' :
                                this.displayGenres();
                                break;
                                default:
                                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        } 

        //if 0 is selecetd, the following message will show

        alert('ASTALAVISTA, BABY!');

    }


//method to show menu options and return prompts with exit, create a new genre, view a genre, delete a genre and display all genres

showMainMenuOptions() {
    return prompt(`
0) exit
1) create a new genre
2) view a genre
3) delete a genre
4) display all genres
`);

}


showGenreMenuOptions(genreInfo) {
    return prompt(`
    0) back
    1) create movie
    2) delete a movie
    ----------------------------
    ${genreInfo}
    `);
}

//implement the display genre.

displayGenres() {
let genreString = '';
for (let i = 0; i < this.genres.length; i++) {
genreString += i+ ')' + this.genres[i].name + '\n';    
}
//outside the loop, create an alert to be able to see all the genres
alert(genreString);
}

//implement the create genre

createGenre() {
    let name = Prompt('Enter name for new genre: ');
    this.genres.push(new Genre(name));
}

//implement view to see the detail of a specific genre 
viewGenre() {

let index = prompt("Enter the index of the genre that you want to view");
if (index > -1 && index < this.genres.length) {
    this.selectionGenre = this.genres[index];
    let description = 'Genre Name: ' + this.selectedGenre.name + '\n';
    description += ' ' + this.selectedGenres.describe() + '\n' ;

//add the description of all the movies to the genre by creating a loop

    for (let i = 0; i < this.selectedGenre.movies.length; i++) {
        description += i + ')' + this.selectedGenre.movies[i].describe() + '\n';
    }
}

// implement a method to show genre menu options to display all the menu options for the genre
let selection1 = this.showGenreMenuOptions(description);
switch (selection1) {
case '1' :
    this.createMovie();
    break;
    case '2' :
        this.deleteMovie();
}

}
deleteGenre() {
let index = prompt('Enter the index of the genre that you wish to delete');
if (index > -1 && index < this.genres.length) {
    this.genres.splice(index,1);
   }
}

//create movie method

createMovie() {
    let name = prompt('Enter name for new movie:');
    let position = prompt('Enter position for new movie: ')
    this.selectedGenre.addMovie(new Movie(name,year));
}

//delete movie method

deleteMovie(){

    let index = prompt('Enter the index of the movie that you wish to delete: ');
    if (index > -1 && index < this.selectedGenre.movies.length) {
        this.selectedGenre.movies.splice(index,1);
    }

}
}

//create instance of menu
let menu = new Menu();
menu.start();
//Task1
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    isRead: false
};

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Pages:", book.pages);
console.log("Is Read:", book.isRead);

console.log("Title:", book["title"]);
console.log("Author:", book["author"]);
console.log("Pages:", book["pages"]);
console.log("Is Read:", book["isRead"]);

book.isRead = true;
book.genre = "Fantasy";

console.log(book);

//Task2
let movies = [
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972
    },
    {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        year: 2001
    }
 ];
console.log("Second movie:",movies[1].title);
movies.push({title: "Parasite", director: "Bong Joon-ho", year: 2019});
movies[0].year = 2023;
console.log(movies);

//Task3
let student = {
    name: "Rod Alvin Cudiamat",
    age: 21,
    subjects: ["Multimedia", "Web Development", "Cybersecurity"]
};

console.log("First subject:", student.subjects[0]);
student.subjects.push("Project Management");
console.log(student);

//Task4
let recipe = {
    name: "Fried Chicken",
    ingredients: [
        { name: "Chicken", quantity: "1 kg", isVegetarian: false },
        { name: "Flour", quantity: "2 cups", isVegetarian: true },
        { name: "Eggs", quantity: "2", isVegetarian: false },
        { name: "Salt", quantity: "1 tsp", isVegetarian: true },
        { name: "Black Pepper", quantity: "1/2 tsp", isVegetarian: true }
    ],
    isVegetarian: false
};

recipe.ingredients.push({ name: "Oil", quantity: "500ml", isVegetarian: true });
console.log("Second ingredient:", recipe.ingredients[1].name);
console.log(recipe);

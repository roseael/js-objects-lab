//Bonus Challenge-Exercise 9
const library = {
    name: 'City Library',
    books: [],

    addBook(title, author, isbn) {
        const newBook = { title, author, isbn };
        this.books.push(newBook);
        console.log(`Added: "${title}"`);
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase()) || null;
    },

    listAllBooks() {
        console.log(`--- ${this.name} Catalog ---`);
        this.books.forEach(book => console.log(`- ${book.title}`));
    },

    findBooksByAuthor(author) {
        return this.books.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }
};

const universityLibrary = Object.create(library);
universityLibrary.name = 'University Hub';
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
    console.log(`Course associated: ${courseName}`);
};

universityLibrary.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '111');
universityLibrary.addBook('Eloquent JavaScript', 'Marijn Haverbeke', '222');
universityLibrary.addCourseBook('CMPS2212', 'Clean Code', 'Robert C. Martin', '333');

universityLibrary.listAllBooks();

const foundBook = universityLibrary.findBookByTitle('Eloquent JavaScript');
console.log('Search Result:', foundBook);

console.log('Books by Douglas:', universityLibrary.findBooksByAuthor('Douglas'));

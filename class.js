class User {
    constructor (name, lastName, books, pets){
        this.name = name
        this.lastName = lastName
        this.books = books
        this.pets = pets
    }

    getFullName() {
        console.log(`Mi nombre es ${this.name} ${this.lastName}`)
    }

    addMascota(newPet){
        this.pets.push(newPet)
    }

    countMascotas(){
        console.log(this.pets.length)
    }

    addBook(bookName, bookAuthor){
        this.books.push({name: bookName, author: bookAuthor})
    }

    getBookNames(){
        const bookNames = this.books.map(book => book.name);
        console.log(bookNames)
    }

}




const Usuario = new User ('Nataniel', 'Lovagnini', [
    {name: 'Catedrales', author: 'Claudia Piñeiro'},
    {name: 'Sobre Heroes y Tumbas', author: 'Ernesto Sabato'},
    {name: 'Los años de peregrinacion del chico sin color', author: 'Haruki Murakami'}
], ['Perro', 'Gato'])

Usuario.getFullName();
Usuario.addMascota('Zorro');
Usuario.countMascotas();
Usuario.addBook('Un mundo feliz', 'Aldous Huxley');
Usuario.getBookNames();


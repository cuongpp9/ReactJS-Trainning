import { shuffle, sample } from 'underscore';

function getTurnData(authors) {
    //console.log("authors", authors);
    const allBooks = authors.reduce(function (p, c, i) { //p=book, c= array, i = index
        // console.log("P",p);
        // console.log("c",c);
        // console.log("i",i);
        return p.concat(c.books); //concat: join array
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    //console.log("fourRandomBooks",fourRandomBooks); //random book
    const answer = sample(fourRandomBooks);
    //console.log("answer",answer);

    return {
        books: fourRandomBooks,
        author: authors.find((authors) =>
            authors.books.some((title) =>
                title === answer))
    }
}
export default getTurnData;
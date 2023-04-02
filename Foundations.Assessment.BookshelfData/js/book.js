// consturctor class for book-data
class Book {
    constructor(authors, language, subject, title) {
        this.authors = authors;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }

    // creating a div wrapper with my elements wrapped inside
    render() {
        const bookWrapper = document.createElement("div");

        const h1 = document.createElement("h1");
        h1.textContent = `${this.title}`;

        const h3 = document.createElement("h3");
        h3.textContent = `By: ${this.authors}`;

        // created a ul for subject array
        const subjectUl = document.createElement("ul")
        subjectUl.style.listStyle = "none";
        for (const subject of this.subject) {
            const subjectLi = document.createElement("li")
            subjectLi.textContent = subject;
            subjectUl.append(subjectLi);
        }

        const h6 = document.createElement("h6");
        h6.textContent = `Language: ${this.language}`;


        bookWrapper.append(h1, h3, subjectUl, h6)

        return bookWrapper;

    }
}
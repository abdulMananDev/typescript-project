"use strict";
console.log("Hello Wrold");
class ProjectRender {
    constructor() {
        this.templateHTML = document.querySelector("#project-input");
        this.renderedHTML = document.querySelector("#app");
        const importedNode = document.importNode(this.templateHTML.content, true);
        console.log(importedNode);
        this.myElement = importedNode.firstElementChild;
        this.myElement.id = "user-input";
        this.title = this.myElement.querySelector("#title");
        this.description = this.myElement.querySelector("#description");
        console.log(this.title);
        this.people = this.myElement.querySelector("#people");
        this.logger();
        this.submitHandler();
        this.attach();
    }
    attach() {
        this.renderedHTML.insertAdjacentElement("afterbegin", this.myElement);
    }
    x() {
        console.log("g");
    }
    inputValueGetter() {
        let title = this.title.value;
        let description = this.description.value;
        let people = +this.people.value;
        // validation - typeguarding
        return [title, description, people];
    }
    valueCompilation(e) {
        e.preventDefault();
        let value = this.inputValueGetter();
        const [title, description, people] = value;
        console.log(title, description, people);
    }
    submitHandler() {
        this.myElement.addEventListener("submit", this.valueCompilation.bind(this));
    }
    logger() {
        console.log(this.myElement);
        console.log(this.inputValueGetter());
    }
}
let myRenderedForm = new ProjectRender();
//# sourceMappingURL=index.js.map
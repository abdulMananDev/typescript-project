console.log("Hello Wrold");

class ProjectRender {
  // template-including-form
  templateHTML: HTMLTemplateElement;
  //   App-rendered
  renderedHTML: HTMLDivElement;
  //   getting form element
  myElement: HTMLFormElement;

  //   getting form-element-inputs
  title: HTMLInputElement;
  description: HTMLInputElement;
  people: HTMLInputElement;

  constructor() {
    this.templateHTML = document.querySelector(
      "#project-input"
    ) as HTMLTemplateElement;
    this.renderedHTML = document.querySelector("#app") as HTMLDivElement;
    const importedNode = document.importNode(this.templateHTML.content, true);
    console.log(importedNode);
    this.myElement = importedNode.firstElementChild as HTMLFormElement;
    this.myElement.id = "user-input";

    this.title = this.myElement.querySelector("#title") as HTMLInputElement;
    this.description = this.myElement.querySelector(
      "#description"
    ) as HTMLInputElement;
    console.log(this.title);
    this.people = this.myElement.querySelector("#people") as HTMLInputElement;

    this.logger();
    this.submitHandler();
    this.attach();
  }

  private attach() {
    this.renderedHTML.insertAdjacentElement("afterbegin", this.myElement);
  }
  public x() {
    console.log("g");
  }
  public inputValueGetter(): [string, string, number] {
    let title = this.title.value;
    let description = this.description.value;
    let people = +this.people.value;
    // validation - typeguarding

    return [title, description, people];
  }

  private valueCompilation(e: Event) {
    e.preventDefault();
    let value = this.inputValueGetter();
    const [title, description, people] = value;
    console.log(title, description, people);
  }
  private submitHandler() {
    this.myElement.addEventListener("submit", this.valueCompilation.bind(this));
  }
  logger() {
    console.log(this.myElement);
    console.log(this.inputValueGetter());
  }
}

let myRenderedForm = new ProjectRender();

import Observer from "../lib/Observer";

class List extends Observer {
  createMarkup(state) {
    return `<ul>
    ${state.cities.map(city => `<li class="alert alert-success" >${city.name}</li>`).join("\n")}
    </ul>`;
  }

  render(state, selector = "app") {
    const markup = this.createMarkup(state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;
  }

  // This method will be called by the Subject(state) whenever it updates.
  // Notice how it prompts a re-render.
  update(state) {
    this.render(state, "city-list-container");
  }
}

export default List;

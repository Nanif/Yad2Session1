class Form {
  // Passing in our state object and setting it as a class property.
  constructor(state = {}) {
    this.appState = state;
  }

  createMarkup(state) {
    return `<div>
      <div id="add-city" class="input-group">
        <label for="cityname">Add a City</label></br>
        <input id="cityname" type="text" name="name" class="form-control">
        <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>`;
  }

  render(selector = "app") {
    const markup = this.createMarkup(this.state);
    const parent = document.getElementById(selector);

    parent.innerHTML = markup;

    this.bindEvents();
  }

  // Bind an event on submit for the add user form.
  bindEvents() {
    const cityInput = document.getElementById("add-city");
      cityInput.addEventListener("click", e => {

      const name = cityInput.children.name.value

      if (!name) {
        return;
      }

      // Getting the current state.
      const state = this.appState.get();
      const cities = [...state.cities, { id: state.cities.length++, name }];


      // Updating state will prompt a re-render via the notify method being called.
      this.appState.update({
        ...state,
          cities
      });

      cityInput.children.name.value = "";

    });
  }
}

export default Form;

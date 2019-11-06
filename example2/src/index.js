import "./styles.css";
import cities from "./utils/cities";
import State from "./lib/State";
import List from "./components/List";
import Form from "./components/Form";
import Count from "./components/Count";

// Instantiate classes.
const AppState = new State(); // application state - the subject
const namesList = new List(); // Create a new user list. - the observer
const cityInput = new Form(AppState); // Create a new city form.
const cityCount = new Count(); // Create a new Count class.

// Hydrate state with initial cities.
AppState.update({ cities });

// Add the observers. These objects will re-render when state changes.
AppState.addObserver(namesList);
AppState.addObserver(cityCount);

// On load, perform initial render..
cityInput.render("add-city-container");
namesList.render(AppState.get(), "city-list-container");
cityCount.render(AppState.get(), "city-count-container");

import logo from "./logo.svg";
import "./App.css";
import { HelloComponent } from "./components/HelloComponent";
import { HelloFunctionalComponent } from "./components/HelloFunctionalComponent";
import { NameComponent } from "./components/NameComponent";
import { NameFunctionalComponent } from "./components/NameFunctionalComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to AU Small Finance Bank</h1>
      <hr />
      <HelloComponent />
      <hr />
      <HelloFunctionalComponent />
      <hr />
      <NameComponent name="Zartab" message="Keep Coding!!" />
      <hr />
      <NameComponent name="AU Bank" message="Badlav Mumkin Hai" />
      <hr />
      <NameComponent name="Tom" msg="Hello World!!" />
      <hr />
      <NameFunctionalComponent name="Alex" message="Save Water!!" />
    </div>
  );
}

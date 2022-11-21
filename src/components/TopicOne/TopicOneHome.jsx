import React from "react";
import { HelloComponent } from "./HelloComponent";
import { NameFunctionalComponent } from "./NameFunctionalComponent";
import { HelloFunctionalComponent } from "./HelloFunctionalComponent";
import { NameComponent } from "./NameComponent";

export default function TopicOneHome() {
  return (
    <div>
      <HelloComponent />
      <hr />
      <HelloFunctionalComponent />
      <hr />
      <NameFunctionalComponent name="Zartab" message="Keep Coding!!" />
      <hr />
      <NameFunctionalComponent name="AU Bank" message="Badlav Mumkin Hai" />
      <hr />
      <NameComponent name="Tom" msg="Hello World!!" />
      <hr />
      <NameFunctionalComponent name="Alex" message="Save Water!!" />
    </div>
  );
}

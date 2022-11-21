import React from "react";
import { HelloComponent } from "./HelloComponent";
import { NameFunctionalComponent } from "./NameFunctionalComponent";
import { HelloFunctionalComponent } from "./HelloFunctionalComponent";
import { NameComponent } from "./NameComponent";
import CompanyComponent from "./CompanyComponent";
import TickerComponent from "./TickerComponent";
import CompanyChangeFC from "./CompanyChangeFC";
import CounterComponent from "./CounterComponent";

export default function TopicOneHome() {
  return (
    <div>
      <CounterComponent />
      <hr />
      <CompanyChangeFC />
      <hr />
      <TickerComponent />
      <hr />
      <CompanyComponent />
      <hr />
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

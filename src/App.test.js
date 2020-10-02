import React from "react"
import App from './App'
import {render, fireEvent} from "@testing-library/react"
import { shallow } from 'enzyme';
import * as ReactDOM from "react-dom"


const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

describe("App component renders properly", () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App tasks={DATA}></App>, div)
    })



})





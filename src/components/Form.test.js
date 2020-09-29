import React from "react"
import renderer from 'react-test-renderer'
import Form from './Form'
import * as ReactDOM from "react-dom"
import {render, fireEvent} from "@testing-library/react"
// import { shallow, mount } from 'enzyme';

describe("Form component render properly", ()=> {

    it("render Form correctly", () => {
        const {queryByTestId, queryByPlaceholderText} = render (<Form/>)
        expect(queryByTestId("hi")).toBeTruthy()
        expect(queryByPlaceholderText("Enter somethings")).toBeTruthy()
    })

    it("testing functionalites of the Todo comonpnent", () => {
       const root = document.createElement('div')
       ReactDOM.render(<Form />, root)

       expect(root.querySelector("label").textContent).toBe("What needs to be done?")

    })

})

describe ("snapshot test for Form component", () =>{
    it("snapshot", () => {
        const tree = renderer.create(<Form />).toJSON( );
        expect(tree).toMatchSnapshot()
    })
} )

describe ("input and button functionality test", ( ) => {
    it("update input value ", () => {
        const {queryByPlaceholderText} = render (<Form />)
        const userInput = queryByPlaceholderText ("Enter somethings")
        fireEvent.change(userInput, {target: {value: "test"}})
        expect (userInput.value).toBe("test")
    })

    it(" button dont submit ", () =>{
        const submitButton = jest.fn()
        const {queryByTestId} = render (<Form submitButton = {submitButton} />)
        fireEvent.click(queryByTestId('hi'))
        expect(submitButton).not.toHaveBeenCalled()
    })

})



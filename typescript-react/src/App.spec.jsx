import "@testing-library/jest-dom"
import {render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Simple working test", () => {
  it("should have a text input", async () => {
    await render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should say enter text', async () => {
    render(<App/>);

    expect(screen.getByText('Enter 5 letter word')).toBeVisible();
  })

  // it('should display incorrect message', async () => {
  //   render(<App/>);

  //   const nameText = await screen.findByPlaceholderText("Enter Name");
  //     await userEvent.type(nameText, "STORE");
  
  //      const btnClick = screen.getByRole('button', {name: 'Add'})
  
  //      await userEvent.click(btnClick)

  //      expect(await screen.findByText(/Not correct/i)).toBeInTheDocument();
  // })

  it('should allow user to type', async () => {
    render(<App/>);

    const nameText = await screen.findByPlaceholderText("Enter Name");
    await userEvent.type(nameText, "STORE");

   
    expect(nameText).toHaveValue("STORE");
  })

  // it('should only allow incorrect guesses', async () => {
  //   render(<App/>);

  //   const nameText = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText, "STORE");

  //   const btnClick = screen.getByRole('button', {name: 'Add'})

  //   await userEvent.click(btnClick)

  //   const nameText1 = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText1, "STORE");

  //   const nameText2 = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText2, "STORE");

  //   const nameText3 = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText3, "STORE");

  //   const nameText4 = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText4, "STORE");

  //   const nameText5 = await screen.findByPlaceholderText("Enter Name");
  //   await userEvent.type(nameText5, "STORE");

  //   const btnClick = screen.getByRole('button', {name: 'Add'})

  //   await userEvent.click(btnClick)
  //   await userEvent.click(btnClick)
  //   await userEvent.click(btnClick)
  //   await userEvent.click(btnClick)
  //   await userEvent.click(btnClick)
  //   await userEvent.click(btnClick)

  //   expect(await screen.findByText('Reached max attempts'))

  })
// when: user enters wrong guess
// then: app says "Not Correct"
  it('should allow guess input and say Not Correct if answer in not correct', async () => {
    render(<App/>);

    const nameText1 = await screen.findByPlaceholderText("Enter Name");
     await userEvent.type(nameText1, "STORE");

    const btnClick = screen.getByRole('button', {name: 'Add'})

    await userEvent.click(btnClick)

    expect(await screen.findByText('Not Correct')).toBeInTheDocument();
   
  })


  //when:
  //then:
  it('when user first enters app should not display not correct', () => {
    render(<App/>);

    expect(screen.queryByText('Not Correct')).not.toBeInTheDocument();

  })
// });

it.todo('when guess is less than 5 letters, button is not activated')

it.todo('when user tries to type a 6th letter, a error message appears')

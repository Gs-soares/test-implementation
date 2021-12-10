import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
/** 
* @jest -environment jsdom 
*/
import ListaTest from "./ListaTest";

describe("testes para o componente lista", () => {
  
  it("Adicionar outra tarefa quando o formulario for submetido", async () => {
    const { getByTestId, getByText } = render(<ListaTest />);
    const fieldNode = await waitFor(() => getByTestId("form-field"));
    const newTask = "teste";
    fireEvent.change(fieldNode, { target: { value: newTask } });
    expect(fieldNode.value).toEqual(newTask);
    const btnNode = await waitFor(() => getByTestId("form-btn"));
    fireEvent.click(btnNode);
    const tdNode = await waitFor(() => getByText(newTask));
    expect(tdNode).toBeDefined();
  });
});

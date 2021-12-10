import React, { useState } from "react";

const ListaTest = () => {
  const [task, updateTask] = useState("");
  const [tasks, updateTasks] = useState([]);
  const handleInputChange = (event) => updateTask(event.target.value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      updateTasks([...tasks, task]);
      updateTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} action="">
        <input
        data-testid="form-field"
          onChange={handleInputChange}
          placeholder="Insira uma nova tarefa"
          value={task}
        />
        <button data-testid="form-btn">Adicionar</button>
      </form>

      <table data-testid="table">
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr>
              <td>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListaTest;

import type { ITodo, ITodosResponse } from "../types/todos";

export function getTodosAdapter(todos: ITodosResponse[]): ITodo[] {
  return todos.map((todo) => ({
    todoId: todo.id,
    userId: todo.userId,
    todoTitle: todo.title,
    todoCompleted: todo.completed,
  }));
}

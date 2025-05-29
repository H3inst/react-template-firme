export interface ITodosResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodo {
  userId: number;
  todoId: number;
  todoTitle: string;
  todoCompleted: boolean;
}

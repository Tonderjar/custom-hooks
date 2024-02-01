type Todo = {
  id: number;
  description: string;
  done: boolean;
};

export const todoReducer = (
  initialState = [],
  action: {
    type: string;
    payload: { id: number; description: string; done: boolean } | number;
  }
) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove Todo":
      return initialState.filter((todo: Todo) => todo.id !== action.payload);
    case "[TODO] Toggle Todo":
      return initialState.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};

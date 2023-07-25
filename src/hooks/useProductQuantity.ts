import { useReducer } from "react";

type State = {
  quantity: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { quantity: state.quantity + 1 };
    case "DECREMENT":
      if (state.quantity > 1) {
        return { quantity: state.quantity - 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const useProductQuantity = (): { quantity: number; increment: () => void; decrement: () => void } => {
  const [state, dispatch] = useReducer(reducer, { quantity: 1 });

  const increment = (): void => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = (): void => {
    dispatch({ type: "DECREMENT" });
  };

  return {
    quantity: state.quantity,
    increment,
    decrement,
  };
};

export default useProductQuantity;
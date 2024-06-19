import React, { createContext, useState } from "react";

export const ToastContext = createContext({
  items: [],
  setItems: () => {},
  handleOnFinish: () => {},
  handleOnToastClose: () => {},
});

function ToastProvider({ children }) {
  const [items, setItems] = useState([]);

  const handleOnFinish = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let toastItem = Object.fromEntries(data.entries());

    toastItem.id = crypto.randomUUID();

    setItems([...items, toastItem]);

    event.target.reset();
  };

  const handleOnToastClose = (toastId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== toastId)
    );
  };

  const memosiedValues = React.useMemo(() => {
    return { items, setItems, handleOnToastClose, handleOnFinish };
  }, [items]);

  return (
    <ToastContext.Provider
      value={memosiedValues}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

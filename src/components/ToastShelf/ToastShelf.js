import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
import useEscapekey from "../../hooks/useEscapekey";

function ToastShelf() {
  const { handleOnToastClose, items } = useContext(ToastContext);

  const { setItems } = React.useContext(ToastContext);

  useEscapekey(() => setItems([]));

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {items.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast toastType={variant} onClose={handleOnToastClose} toastId={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

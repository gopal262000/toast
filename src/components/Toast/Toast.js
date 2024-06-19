import React, { useRef } from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toastId, toastType, onClose, children }) {
  const closeButtonRef = useRef();

  const ToastIcon = ICONS_BY_VARIANT[toastType || "notice"];
  return (
    <div className={`${styles.toast} ${styles[toastType]}`}>
      <div className={styles.iconContainer}>
        <VisuallyHidden>{toastType}</VisuallyHidden>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={() => onClose(toastId)}
        ref={closeButtonRef}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;

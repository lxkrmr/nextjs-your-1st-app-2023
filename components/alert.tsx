import styles from "./alert.module.css";
import { clsx } from "clsx";

function Alert({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "success" | "error";
}) {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

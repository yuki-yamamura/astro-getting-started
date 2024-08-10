import styles from "./index.module.css";

type Props = React.PropsWithChildren<React.ComponentPropsWithRef<"button">>;

export function Button({ children, ...rest }: Props) {
  return (
    <button {...rest} className={styles.module}>
      {children}
    </button>
  );
}

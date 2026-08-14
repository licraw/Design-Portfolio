import styles from "./ProjectSummary.module.scss";

type SummaryItem = {
  label: string;
  value: string;
};

export function ProjectSummary({ items }: { items: SummaryItem[] }) {
  return (
    <dl className={styles.summary} aria-label="Project summary">
      {items.map((item) => (
        <div className={styles.item} key={item.label}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={styles.value}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

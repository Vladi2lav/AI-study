"use client";

import { useState } from "react";
import styles from "./mainReps.module.css";

export default function ReportsPage() {
  const [reports] = useState([
    { id: 1, title: "Отчет 1", date: "2024-01-15", status: "Завершен" },
    { id: 2, title: "Отчет 2", date: "2024-01-20", status: "В процессе" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Отчеты</h1>
        <button className={styles.createButton}>Создать отчет</button>
      </div>
      
      <div className={styles.reportsGrid}>
        {reports.map((report) => (
          <div key={report.id} className={styles.reportCard}>
            <h2 className={styles.reportTitle}>{report.title}</h2>
            <p className={styles.reportDate}>Дата: {report.date}</p>
            <span className={`${styles.status} ${styles[report.status === "Завершен" ? "statusCompleted" : "statusInProgress"]}`}>
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

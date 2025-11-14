"use client";

import { useState } from "react";
import styles from "./main2adm.module.css";

export default function MainAdminPage() {
  const [stats] = useState({
    users: 150,
    reports: 45,
    active: 23,
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Панель администратора</h1>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h2 className={styles.statTitle}>Пользователи</h2>
            <p className={`${styles.statValue} ${styles.statValueBlue}`}>{stats.users}</p>
          </div>
          
          <div className={styles.statCard}>
            <h2 className={styles.statTitle}>Отчеты</h2>
            <p className={`${styles.statValue} ${styles.statValueGreen}`}>{stats.reports}</p>
          </div>
          
          <div className={styles.statCard}>
            <h2 className={styles.statTitle}>Активные</h2>
            <p className={`${styles.statValue} ${styles.statValueOrange}`}>{stats.active}</p>
          </div>
        </div>
        
        <div className={styles.actionsCard}>
          <h2 className={styles.actionsTitle}>Быстрые действия</h2>
          <div className={styles.actionsGrid}>
            <button className={`${styles.actionButton} ${styles.actionButtonBlue}`}>
              Управление пользователями
            </button>
            <button className={`${styles.actionButton} ${styles.actionButtonGreen}`}>
              Просмотр отчетов
            </button>
            <button className={`${styles.actionButton} ${styles.actionButtonPurple}`}>
              Настройки системы
            </button>
            <button className={`${styles.actionButton} ${styles.actionButtonRed}`}>
              Логи
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

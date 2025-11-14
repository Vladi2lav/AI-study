"use client";

import styles from "./help.module.css";

export default function HelpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Помощь</h1>
        
        <div className={styles.helpCard}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Добро пожаловать в систему помощи</h2>
            <p className={styles.helpText}>
              Здесь вы найдете информацию о том, как использовать приложение.
            </p>
          </section>
          
          <section className={`${styles.section} ${styles.divider}`}>
            <h2 className={styles.sectionTitle}>Основные функции</h2>
            <ul className={styles.featuresList}>
              <li>Управление аккаунтом</li>
              <li>Создание и просмотр отчетов</li>
              <li>Настройка параметров</li>
              <li>Доступ к курсам и материалам</li>
            </ul>
          </section>
          
          <section className={`${styles.section} ${styles.divider}`}>
            <h2 className={styles.sectionTitle}>Контакты поддержки</h2>
            <p className={styles.contactText}>
              Если у вас возникли вопросы, пожалуйста, свяжитесь с нами по email: support@example.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}


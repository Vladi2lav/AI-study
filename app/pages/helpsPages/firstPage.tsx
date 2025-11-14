"use client";

import styles from "./firstPage.module.css";

export default function HelpPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Помощь</h1>
        
        <div className={styles.helpCard}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Как войти в систему?</h3>
                <p className={styles.faqAnswer}>
                  Используйте страницу входа для доступа к вашему аккаунту.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Как создать отчет?</h3>
                <p className={styles.faqAnswer}>
                  Перейдите на страницу отчетов и нажмите кнопку "Создать отчет".
                </p>
              </div>
            </div>
          </section>
          
          <section className={`${styles.section} ${styles.divider}`}>
            <h2 className={styles.sectionTitle}>Контакты</h2>
            <p className={styles.contactText}>
              Если у вас есть вопросы, свяжитесь с поддержкой.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

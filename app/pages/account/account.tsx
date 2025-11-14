"use client";

import styles from "./account.module.css";

export default function AccountPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Аккаунт</h1>
        
        <div className={styles.profileCard}>
          <h2 className={styles.profileTitle}>Профиль</h2>
          <p className={styles.profileText}>
            Здесь будет информация о профиле пользователя
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import styles from "./main2stud.module.css";

export default function MainStudentPage() {
  const [courses] = useState([
    { id: 1, name: "Курс 1", progress: 75 },
    { id: 2, name: "Курс 2", progress: 50 },
    { id: 3, name: "Курс 3", progress: 25 },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Главная страница студента</h1>
        
        <div className={styles.welcomeCard}>
          <h2 className={styles.welcomeTitle}>Добро пожаловать!</h2>
          <p className={styles.welcomeText}>
            Здесь вы можете просматривать свои курсы и прогресс обучения.
          </p>
        </div>
        
        <div className={styles.coursesSection}>
          <h2 className={styles.coursesTitle}>Мои курсы</h2>
          <div className={styles.coursesList}>
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <h3 className={styles.courseName}>{course.name}</h3>
                  <span className={styles.courseProgress}>{course.progress}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={`${styles.actionButton} ${styles.actionButtonBlue}`}>
            Мои отчеты
          </button>
          <button className={`${styles.actionButton} ${styles.actionButtonGreen}`}>
            Настройки
          </button>
        </div>
      </div>
    </div>
  );
}

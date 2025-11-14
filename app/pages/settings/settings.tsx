"use client";

import { useState } from "react";
import styles from "./settings.module.css";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: "light",
    language: "ru",
    notifications: true,
  });

  const handleChange = (key: string, value: string | boolean) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  const handleSave = () => {
    // Здесь будет логика сохранения настроек
    console.log("Settings saved:", settings);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Настройки</h1>
        
        <div className={styles.settingsCard}>
          <div className={styles.settingsGroup}>
            <label className={styles.label}>Тема</label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
              className={styles.select}
            >
              <option value="light">Светлая</option>
              <option value="dark">Темная</option>
              <option value="auto">Автоматически</option>
            </select>
          </div>
          
          <div className={styles.settingsGroup}>
            <label className={styles.label}>Язык</label>
            <select
              value={settings.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className={styles.select}
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          
          <div className={styles.checkboxGroup}>
            <label className={styles.label}>Уведомления</label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleChange("notifications", e.target.checked)}
              className={styles.checkbox}
            />
          </div>
          
          <button onClick={handleSave} className={styles.saveButton}>
            Сохранить настройки
          </button>
        </div>
      </div>
    </div>
  );
}

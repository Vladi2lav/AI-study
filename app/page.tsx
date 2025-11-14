
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    fetch("/api/py/helloFastApi?name=Alex&age=25")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to Next.js with FastAPI!</h1>
        
        {data && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <p className="text-lg">{data.message}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/login" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Вход</h2>
            <p className="text-sm opacity-90">Войти в систему</p>
          </Link>
          
          <Link href="/register" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Регистрация</h2>
            <p className="text-sm opacity-90">Создать аккаунт</p>
          </Link>
          
          <Link href="/account" className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Аккаунт</h2>
            <p className="text-sm opacity-90">Профиль пользователя</p>
          </Link>
          
          <Link href="/settings" className="bg-gray-500 text-white p-6 rounded-lg shadow-md hover:bg-gray-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Настройки</h2>
            <p className="text-sm opacity-90">Настройки приложения</p>
          </Link>
          
          <Link href="/reports" className="bg-orange-500 text-white p-6 rounded-lg shadow-md hover:bg-orange-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Отчеты</h2>
            <p className="text-sm opacity-90">Просмотр отчетов</p>
          </Link>
          
          <Link href="/help" className="bg-teal-500 text-white p-6 rounded-lg shadow-md hover:bg-teal-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Помощь</h2>
            <p className="text-sm opacity-90">Справка и FAQ</p>
          </Link>
          
          <Link href="/admin" className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Админ</h2>
            <p className="text-sm opacity-90">Панель администратора</p>
          </Link>
          
          <Link href="/student" className="bg-indigo-500 text-white p-6 rounded-lg shadow-md hover:bg-indigo-600 transition text-center">
            <h2 className="text-xl font-semibold mb-2">Студент</h2>
            <p className="text-sm opacity-90">Панель студента</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

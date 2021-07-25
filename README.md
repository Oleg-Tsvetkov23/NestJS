# NestJS
Домашнее задание к занятию «2.2. Инверсия зависимостей,провайдеры, middleware в NestJS».

Каждый экземпляр книги имеет следующую структуру данных:

{
  id: "string",   -- код книги, внутреннее поле.
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string"
}

Реализованы методы:

1. GET {{URL}}/api/books- список всех книг. Входных параметров нет.
2. GET {{URL}}/api/books/:id - данные книги по ее id.
3. POST {{URL}}/api/books - добавление книги в библиотеку. Входные параметры описаны выше, кроме поля id.
4. PUT {{URL}}/api/books/:id - редактирование данных книги по ее id. Входные параметры описаны выше, кроме поля id.
5. DELETE {{URL}}/api/books/:id - удаление книги по id.


"use client";

import { useState, useEffect } from "react";
import { Book } from "@/types/Book";
import SearchBar from "@/components/SearchBar";
import BookForm from "@/components/BookForm";
import BookCard from "@/components/BookCard";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
useEffect(() => {
  const savedBooks = localStorage.getItem("books");
  if (savedBooks) {
    setBooks(JSON.parse(savedBooks));
  } else {
    setBooks([
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
      { id: 3, title: "1984", author: "George Orwell" },
    ]);
  }
}, []);

useEffect(() => {
  localStorage.setItem("books", JSON.stringify(books));
}, [books]);


  const [search, setSearch] = useState("");

  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold text-center mb-12 tracking-tight">
        Library Management System
      </h1>

      <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl">
        <SearchBar search={search} setSearch={setSearch} />
        <BookForm addBook={addBook} />
      </div>

      <div className="mt-10">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} removeBook={removeBook} />
        ))}
      </div>
    </main>
  );
}

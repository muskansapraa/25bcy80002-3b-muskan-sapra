"use client";
import { useState } from "react";

interface Props {
  addBook: (title: string, author: string) => void;
}

export default function BookForm({ addBook }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    if (!title || !author) return;
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        className="flex-1 p-3 border rounded-xl"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="flex-1 p-3 border rounded-xl"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700"
      >
        Add Book
      </button>
    </div>
  );
}
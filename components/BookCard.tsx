"use client";
import { Book } from "@/types/Book";

interface Props {
  book: Book;
  removeBook: (id: number) => void;
}

export default function BookCard({ book, removeBook }: Props) {
  return (
    <div className="flex justify-between items-center p-6 mb-5 rounded-3xl 
    bg-white/90 backdrop-blur-xl shadow-xl text-black">

      <div>
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-700">by {book.author}</p>
      </div>

      <button
        onClick={() => removeBook(book.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold transition"
      >
        Remove
      </button>
    </div>
  );
}

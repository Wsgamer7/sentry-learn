"use client";

export default function Home() {
  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          throw new Error("Test error new");
        }}
      >
        Test error
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          throw new Error("Test error 2");
        }}
      >
        Test error 2
      </button>
    </div>
  );
}

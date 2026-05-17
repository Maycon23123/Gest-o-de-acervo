"use client";

import { useState } from "react";

type UserCreateProps = {
  onCreateUser: (userData: { name: string; email: string }) => void;
};

export function UserCreate({ onCreateUser }: UserCreateProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onCreateUser(formData);

    setFormData({
      name: "",
      email: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-lg">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Criar Usuário
      </button>
    </form>
  );
}

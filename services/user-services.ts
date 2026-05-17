import { users } from "@/mocks/users";
import type { User } from "@/types/user";

function getUsers(): User[] {
  return users;
}

function getUserById(userId: string): User | null {
  const user = users.find((user) => user.id === userId);
  return user || null;
}

function createUser(userData: Omit<User, "id">): User {
  const newUser: User = {
    id: String(Date.now()),
    ...userData,
  };
  users.push(newUser);
  return newUser;
}

function updateUser(
  userId: string,
  updatedData: Partial<Omit<User, "id">>,
): User | null {
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return null;
  }

  users[userIndex] = { ...users[userIndex], ...updatedData };

  return users[userIndex];
}

function deleteUser(userId: string): boolean {
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return false;
  }

  users.splice(userIndex, 1);
  return true;
}

export { getUsers, getUserById, createUser, updateUser, deleteUser };

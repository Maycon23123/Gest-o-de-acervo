import type { User } from "../../types/user";

type UserSelectorProps = {
  users: User[];
  selectedUserId: string;

  onSelectUser: (userId: string) => void;
};

export function UserSelector({
  users,
  selectedUserId,
  onSelectUser,
}: UserSelectorProps) {
  return (
    <select
      value={selectedUserId}
      onChange={(e) => onSelectUser(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">Selecione um usuário</option>

      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

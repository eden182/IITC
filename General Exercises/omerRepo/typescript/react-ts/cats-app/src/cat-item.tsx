import { Cat } from "./App";
import { useAuth } from "./providers/auth-provider";

interface CatItemProps {
  cat: Cat;
  handleDelete: (id: string) => Promise<void>;
  baba: string;
  mama?: string;
}

export function CatItem({ cat, handleDelete }: CatItemProps) {
  const { user, logout } = useAuth();
  return (
    <li>
      <span>{cat.name}</span>
      <button onClick={() => handleDelete(cat.id)}>Delete</button>
      <span>{user?.username}</span>
    </li>
  );
}

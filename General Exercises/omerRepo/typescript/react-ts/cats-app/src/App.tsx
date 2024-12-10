import { useEffect, useRef, useState } from "react";
import { CatItem } from "./cat-item";
import { api } from "./api";
import AuthProvider, { useAuth } from "./providers/auth-provider";

export interface Cat {
  id: string;
  name: string;
}

type CatWithoutId = Omit<Cat, "id">;

export default function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    // IFFE just for you knowledge
    // (async () => {
    //   const { data } = await api.get("cats");
    // })();

    api.get("cats").then(({ data }) => {
      setCats(data);
    });
  }, []);

  async function handleDelete(id: string) {
    await api.delete("cats/" + id);
    setCats((prev) => prev.filter((cat) => cat.id !== id));
  }

  async function handleAdd() {
    if (!inputRef.current) return;
    const newCatName = inputRef.current.value;
    const newCat: CatWithoutId = { name: newCatName };

    const { data } = await api.post("cats", newCat);
    setCats((prev) => [...prev, data]);
    inputRef.current.value = "";
  }

  function log(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (ev.ctrlKey) {
      console.log("bab");
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          ref={inputRef}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {cats.map((cat) => {
          return (
            <CatItem
              key={cat.id}
              cat={cat}
              handleDelete={handleDelete}
              baba=""
              mama="hi"
            />
          );
        })}
      </ul>
    </div>
  );
}

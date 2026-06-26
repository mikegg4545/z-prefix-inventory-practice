import ItemTable from "../components/ItemTable";
import { mockItems, mockUser } from "../data/mockData";
import { useState } from "react";
import type { Item } from "../types/item";

export default function InventoryPage() {
  const [items, setItems] = useState<Item[]>(mockItems);
  const [newItemName, setNewItemName] = useState("");
  const [newItemDescription, setNewItemDescription] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");

  function handleAddItem() {
    const trimmedName = newItemName.trim();
    const trimmedDescription = newItemDescription.trim();
    const quantity = Number(newItemQuantity);

    if (trimmedName === "" || trimmedDescription === "" || quantity <= 0) {
      return;
    }

    const newItem: Item = {
      id: Date.now(),
      userId: mockUser.id,
      name: trimmedName,
      description: trimmedDescription,
      quantity,
    };

    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemDescription("");
    setNewItemQuantity("");
  }
  return (
    <section>
      <h1>My Inventory</h1>
      <p>Welcome, {mockUser.firstName}</p>

      <div>
        <h2>Add Item</h2>

        <input
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
          placeholder="Item name"
        />

        <input
          type="text"
          value={newItemDescription}
          onChange={(event) => setNewItemDescription(event.target.value)}
          placeholder="Description"
        />

        <input
          type="number"
          value={newItemQuantity}
          onChange={(event) => setNewItemQuantity(event.target.value)}
          placeholder="Quantity"
        />

        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ItemTable items={items} />
    </section>
  );
}

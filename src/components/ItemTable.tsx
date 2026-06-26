import type { Item } from "../types/item";

type ItemTableProps = {
  items: Item[];
  onDeleteItem: (id: number) => void;
};

export default function ItemTable({ items, onDeleteItem }: ItemTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import type { Item } from "../types/item";

type ItemTableProps = {
  items: Item[];
};

export default function ItemTable({ items }: ItemTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

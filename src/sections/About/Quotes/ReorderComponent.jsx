import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./item"; // Buat komponen Item terlebih dahulu

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

const ReorderComponent = () => {
  const [items, setItems] = useState(initialItems);

  const handleReorder = (newItems) => {
    setItems(newItems);
  };

  return (
    <Reorder
      axis="y" // Arah pengurutan (y: vertical, x: horizontal)
      values={items} // Array nilai yang akan diurutkan
      onReorder={handleReorder} // Fungsi yang dipanggil saat urutan berubah
      className="reorder-container" // Kelas CSS tambahan untuk container
      itemClassName="reorder-item" // Kelas CSS tambahan untuk item
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder>
  );
};

export default ReorderComponent;

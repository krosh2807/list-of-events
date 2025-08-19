import React, { useEffect, useState } from "react";
import { EventItem } from "../App";

type EventFormProps = {
  onAdd: (title: string, date: string) => void;
  onUpdate: (id: number, title: string, date: string) => void;
  editingEvent: EventItem | null;
};

export const EventForm: React.FC<EventFormProps> = ({
  onAdd,
  onUpdate,
  editingEvent,
}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
    }
  }, [editingEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !date.trim()) {
      alert("Заполните все поля");
      return;
    }

    if (editingEvent) {
      onUpdate(editingEvent.id, title, date);
    } else {
      onAdd(title, date);
    }

    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">{editingEvent ? "Редактировать" : "Добавить"}</button>
    </form>
  );
};

import React, { useState } from "react";
import { EventForm } from "./components/EventForm";
import { EventList } from "./components/EventList";

export type EventItem = {
  id: number;
  title: string;
  date: string;
};

const App: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);

  const addEvent = (title: string, date: string) => {
    const newEvent: EventItem = {
      id: Date.now(),
      title,
      date,
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const updateEvent = (id: number, title: string, date: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, title, date } : e))
    );
    setEditingEvent(null);
  };

  const deleteEvent = (id: number) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <h1>Список мероприятий</h1>

      <EventForm
        onAdd={addEvent}
        onUpdate={updateEvent}
        editingEvent={editingEvent}
      />

      <EventList
        events={events}
        onEdit={setEditingEvent}
        onDelete={deleteEvent}
      />
    </div>
  );
};

export default App;

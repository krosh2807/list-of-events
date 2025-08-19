import React from "react";
import { EventItem } from "../App";

type EventListProps = {
  events: EventItem[];
  onEdit: (event: EventItem) => void;
  onDelete: (id: number) => void;
};

export const EventList: React.FC<EventListProps> = ({
  events,
  onEdit,
  onDelete,
}) => {
  if (events.length === 0) {
    return <p>Нет мероприятий</p>;
  }

  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.id}>
          <span>
            {event.title} — {event.date}
          </span>
          <button onClick={() => onEdit(event)}>Редактировать</button>
          <button onClick={() => onDelete(event.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

function Announcements() {
  // Sample array of announcements
  const announcements = [
    { id: 1, title: 'Important Announcement 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Important Announcement 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, title: 'Important Announcement 3', content: 'Integer tempor nisi sit amet vestibulum fermentum.' }
  ];

  return (
    <div className="announcements">
      <h2>Announcements</h2>
      <ul>
        {announcements.map(announcement => (
          <li key={announcement.id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;

import React from 'react';

function CollegeNews() {
  // Sample array of news articles
  const newsArticles = [
    { id: 1, title: 'New Campus Building Construction Begins', date: 'June 10, 2024', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Research Team Publishes Groundbreaking Study', date: 'June 8, 2024', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { id: 3, title: 'Upcoming Event: Career Fair 2024', date: 'June 5, 2024', content: 'Integer tempor nisi sit amet vestibulum fermentum.' }
  ];

  return (
    <div className="college-news">
      <h2>College News</h2>
      <ul>
        {newsArticles.map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p><strong>Date:</strong> {article.date}</p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegeNews;

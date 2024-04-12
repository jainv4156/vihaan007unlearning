import React, { useState } from 'react';


function StudentPage() {

  const [subjects, setSubjects] = useState([
    { name: 'Maths', chapters: [] },
    { name: 'Science', chapters: [] },
    { name: 'English', chapters: [] },
    { name: 'Hindi', chapters: [] },
    { name: 'Sst', chapters: [] },
  ]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const mathsChapters = [
    { title: 'Chapter 1: Components of Food' },
    { title: 'Chapter 2: Sorting Materials and Groups' },
    { title: 'Chapter 3: Separation of Substances' },
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
  };

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const renderSubjects = () => {
    return subjects.map((subject) => (
      <button
        key={subject.name}
        className="btn btn-secondary m-2"
        onClick={() => handleSubjectClick(subject)}
      >
        {subject.name}
      </button>
    ));
  };

  const renderChapters = () => {
    if (!selectedSubject) return null;

    const chapters = selectedSubject.chapters; // Assuming chapters are loaded based on selected subject
    return chapters.map((chapter) => (
      <button
        key={chapter.title}
        className="btn btn-light m-1"
        onClick={() => handleChapterClick(chapter)}
      >
        {chapter.title}
      </button>
    ));
  };

  const renderTopics = () => {
    if (!selectedChapter) return null;

    // Replace with logic to display topics based on selected chapter
    const topics = ['Topic 1', 'Topic 2', 'Topic 3'];
    return (
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <h1>Welcome Student!</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {renderSubjects()}
      </div>
      <div className="mt-4">
        <h4>Chapters</h4>
        {renderChapters()}
      </div>
      <div className="mt-4">
        <h4>Topics</h4>
        {renderTopics()}
      </div>
    </div>
  );
}

export default StudentPage;



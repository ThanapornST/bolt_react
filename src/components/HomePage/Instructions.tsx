import React from 'react';

const Instructions = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4">How to create a novel</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>Click the "Start" button to begin using the narrative voice.</li>
        <li>Click the "New Project" button in the first menu.</li>
        <li>Choose whether the user wants to create a multi-chapter novel or a short story.</li>
        <li>After making a selection, proceed to the next step.</li>
        <li>
          Fill in the details such as the novel's title, number of characters, plot summary, additional 
          information, and tone of the story.
        </li>
        <li>Click the "Create Novel" button.</li>
        <li>Wait for the novel creation results to appear.</li>
        <li>
          After the novel creation process is complete, you can change the character voices as desired 
          and adjust other settings as needed.
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
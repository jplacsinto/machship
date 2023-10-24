"use client";
// components/GithubForm.tsx

import { useState, useEffect } from 'react';

const GithubForm = () => {
  const [inputFields, setInputFields] = useState<string[]>(['']);
  const [apiResponse, setApiResponse] = useState<any>(null); // Initialize with null

  const addInputField = () => {
    setInputFields([...inputFields, '']);
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = value;
    setInputFields(updatedFields);
  };

  const fetchApiData = async () => {
    try {
      const response = await fetch(`http://machship.api.test/api/github/user/info?usernames=${inputFields}`); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setApiResponse(JSON.stringify(data));
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (apiResponse) {
  //     // Handle the API response, for example, displaying it in an alert
  //     alert(JSON.stringify(apiResponse));
  //   }
  // }, [apiResponse]);

  return (
    <div>
      <button
        className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addInputField}
      >
        Add Input Field
      </button>

      {inputFields.map((input, index) => (
        <div key={index} className="mt-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 text-black"
            placeholder={`Input ${index + 1}`}
            value={inputFields[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}

      <button
        className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={fetchApiData}
      >
        Handle All Inputs
      </button>

      <div>{apiResponse}</div>
    </div>
  );
};

export default GithubForm;
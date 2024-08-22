'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
// Definindo a estrutura de um check-in


// Definindo a estrutura de um check-in
interface CheckIn {
  activity: string;
  date: string;
  timeSpent: string;
}

const ActivityHistory = () => {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

  // Carrega os check-ins ao montar o componente
  useEffect(() => {
    axios.get('http://localhost:5000/check-ins')
      .then(response => setCheckIns(response.data))
      .catch(error => console.error('Error fetching check-ins:', error));
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-20 font-semibold text-gray-900 mb-4">Activity History</h2>
      {checkIns.length === 0 ? (
        <p className="text-16 text-gray-600">No activities recorded yet.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {checkIns.map((checkIn, index) => (
            <li key={index} className="text-16 text-gray-800">
              {checkIn.activity} on {checkIn.date} for {checkIn.timeSpent} hours
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityHistory;

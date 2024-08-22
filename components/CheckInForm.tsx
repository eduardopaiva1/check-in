import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image';

// Definindo a estrutura de um check-in
interface CheckIn {
  activity: string;
  date: string;
  timeSpent: string;
}

const CheckInForm = () => {
  const [activity, setActivity] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [timeSpent, setTimeSpent] = useState<string>('');
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/check-ins')
      .then(response => setCheckIns(response.data))
      .catch(error => console.error('Error fetching check-ins:', error));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCheckIn: CheckIn = { activity, date, timeSpent };
    axios.post('http://localhost:5000/check-ins', newCheckIn)
      .then(response => setCheckIns([...checkIns, response.data]))
      .catch(error => console.error('Error saving check-in:', error));

    setActivity('');
    setDate('');
    setTimeSpent('');
  };

  return (
    <div>
      <h2 className="recent-transactions-label mb-5">Weekly Activity Check-In</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 mb-2">
          <Label htmlFor="message" className="text-18 lg:text-18 font-semibold text-gray-900">Atividade:</Label>
          <input 
            className="w-80 h-12 px-4 py-2 border rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Qual foi sua ativade de hoje?"
            type="text" 
            value={activity} 
            onChange={(e) => setActivity(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">Data:</label>
          <input
            className="flex items-center border rounded-lg p-2 w-80" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className='mb-3'>
          <label className="header-2">Tempo Executado (horas):</label>
          <input
            className="flex items-center border rounded-lg p-2 w-80" 
            type="number" 
            value={timeSpent} 
            onChange={(e) => setTimeSpent(e.target.value)} 
            required
            placeholder="Tempo de Execução da Tarefa" 
          />
        </div>
        <Button type="submit" className="form-btn">Enviar Dados</Button>
      </form>

      {/* <h3>Recorded Check-Ins</h3>
      <ul>
        {checkIns.map((checkIn, index) => (
          <li key={index}>
            {checkIn.activity} on {checkIn.date} for {checkIn.timeSpent} hours
          </li> */}
        {/* ))} */}
      {/* </ul> */}
    </div>
  );
};

export default CheckInForm;

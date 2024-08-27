'use client'

import React, { useState } from 'react'
import Category from '@/components/Category';
import FixedProgressBar from '@/components/FixedProgressBar';
import StackDetails from '@/components/StackDetails';



const MyStacks = () => {
const [selectedStack, setSelectedStack] = useState<string | null>(null)

const handleStackClick = (stack: string) => {
    setSelectedStack(stack);
  };

    return (
        <div className="mt-10 flex flex-1 flex-col gap-6 px-4">
          <h1 className="header-2">My Stacks</h1>
    
          <div className="space-y-6">
        <div
          className="bg-gray-100 p-4 rounded-lg shadow max-w-3xl cursor-pointer"
          onClick={() => handleStackClick('Front End')}
        >
          <h2 className="text-xl font-semibold">Front End</h2>
          <div>
            <Category />
          </div>
        </div>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow max-w-3xl cursor-pointer"
          onClick={() => handleStackClick('Back End')}
        >
          <h2 className="text-xl font-semibold">Back End</h2>
          <div>
            <Category />
          </div>
        </div>
        <div
          className="bg-gray-100 p-4 rounded-lg shadow max-w-3xl cursor-pointer"
          onClick={() => handleStackClick('Banco de Dados')}
        >
          <h2 className="text-xl font-semibold">Banco de Dados</h2>
          <div>
            <Category />
          </div>
        </div>
      </div>

      {selectedStack && (
       <StackDetails stackType={selectedStack} />
      )}
      </div>
  );
};

    

export default MyStacks
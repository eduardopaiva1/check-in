import React from 'react'
import ToDoApp from '@/components/ToDo'

const ToDo = () => {
  return (
    <div className="mt-10 flex flex-1 flex-col gap-6 px-4">
        <h1 className="header-2">ToDo - Atividades</h1>
        <div className="mt-8">
            <ToDoApp />
        </div>
    </div>
  )
}

export default ToDo
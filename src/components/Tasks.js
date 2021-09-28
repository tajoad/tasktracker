import React from 'react';
import { useState } from 'react';
import Task from './Task';


const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 1:30pm',
                reminder: true
            }
        ]
    );

    return (
        <div>
            <h2>{console.log(tasks)}</h2>
            <Task tasks={tasks} />
        </div>
    );
}

export default Tasks;
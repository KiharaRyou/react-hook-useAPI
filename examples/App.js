import React, { useEffect } from 'react';
import { useAPI } from '../src/useAPI';

const App = () => {
 const { data, read } = useAPI({ 
        url: '/api/tasks/',
        handleError: res => {
            console.log(res.status);
        }
    });

    useEffect(() => {
        read();
    },[read])
 
  return (
        <div>
            <table>
                <tbody>
                    {data.map(task => <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                    </tr>)}   
                </tbody>
            </table>
        </div> 
  )
}

export default App

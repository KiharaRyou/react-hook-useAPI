import React, { useEffect } from 'react';
import { useAPI } from '../src';

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
    <div style={{'padding': 15}}>
        <h3>Example</h3>      
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>    
            </thead>
            <tbody>
                {data.results.map(task => <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                </tr>)}   
            </tbody>
        </table>
    </div> 
  )
}

export default App

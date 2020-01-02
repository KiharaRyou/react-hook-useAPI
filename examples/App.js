import React, { useEffect } from 'react';
import useAPI from '../src';

const App = () => {
    
 const { data, create, read, update, del } = useAPI({ 
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
                    <th>Operations</th>
                </tr>    
            </thead>
            <tbody>
                {data.results.map(task => <tr key={task.id}>
                    <td>{task.title}</td>
                    <td style={{width: '50%'}}>{task.description}</td>
                    <td>
                        <a className="button" onClick={() => update(task.id, task)}>Update</a>
                        <a className="button del_button" onClick={() => del(task.id)}>Delete</a>
                    </td>
                </tr>)}   
            </tbody>
        </table>
        <a className="button" onClick={() => create({test: 'test'})}>Create</a>
    </div> 
  )
}

export default App

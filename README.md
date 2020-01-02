# react-hook-useAPI
handle the restful api easily

# Installation
`npm install react-hook-useapi`
or
`yarn add react-hook-useapi`

# Configuration
Prop|Type|Required|Description
----|----|--------|-----------
url|string|Yes|The restufl api url, e.g 'api/users'
fetchOptions|object|No|The options what needs to add in the request
handleError|function|No|(response) => void It will run this function when response's status code is not success(status code != 2xx)

# Props
Prop|Type|Description|Default
----|----|-----------|-------
data|object| Use to store the response json|{results:[]}
filter|object| Use to store search params|{page:1}
read|function|Function(filter) The function use to get the list
getDetail|function|Fucntion(key) The function use to get the item's detail
create|function|Function(values) The function use to create new item
update|function|Function(key, values) The function use to update item
del|function|Function(key) The function use to delete item

# Example
```
import React, { useEffect } from 'react';
import useAPI from 'react-hook-useapi';

export default const App = () => {
    
 const { data, read, del } = useAPI({ 
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
                    <td>{task.description}</td>
                    <td>
                        <button onClick={() => del(task.id)}>Delete</a>
                    </td>
                </tr>)}   
            </tbody>
        </table>
    </div> 
  )
}
```

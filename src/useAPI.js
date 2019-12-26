import { useState, useCallback } from 'react';
import request from './request';

export function useAPI({url, fetchOptions, handleError}) {
   
    const [data, setData] = useState({
        results: []
    });
    
    const read = async params => {
        const res = await request(url, { body: params, ...fetchOptions }, handleError);
        if(!res.error) {
            setData(res);
        }
    }

    const create = async params => {
        
    }
    

    return {
        data,
        read: useCallback(read, [])
    };
}

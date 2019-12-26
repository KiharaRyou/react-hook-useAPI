import { useState, useCallback } from 'react';
import request from './request';

export function useAPI({url, fetchOptions, handleError}) {
   
    const [data, setData] = useState({
        results: []
    })

    const [filter, setFilter] = useState({
        page: 1
    })

    const [loading, setLoading] = useState(false)

    const read = async params => {
        setLoading(true);
        const newFilter = {...filter, ...params};
        newFilter.page = params && params.page ? params.page : 1;
        const res = await request(url, {...fetchOptions, body: newFilter}, handleError);
        setLoading(false);
        if(res && !res.error) {
            setData(res);
            setFilter(newFilter);
        }
    }

    const create = async params => {
        setLoading(true);
        const res = await request(url, {...fetchOptions, body: params, method: 'POST'}, handleError);
        setLoading(false);
        if(res && !res.error) {
            read();
        }
    }

    const update = async(key, params) => {
        setLoading(true);
        const res = await request(`${url}/${key}`, {...fetchOptions, body: params, method: 'PUT'}, handleError);
        setLoading(false);
        if(res && !res.error) {
            read();
        }
    }

    const del = async key => {
        setLoading(true);
        const res = await request(`${url}/${key}`, {...fetchOptions, method: 'DELETE'}, handleError);
        setLoading(false);
        if(res && !res.error) {
            read();
        }
    }

    return {
        create: useCallback(create, []),
        data,
        del: useCallback(del, []),
        filter,
        loading,
        read: useCallback(read, []),
        update: useCallback(update, [])
    }
}

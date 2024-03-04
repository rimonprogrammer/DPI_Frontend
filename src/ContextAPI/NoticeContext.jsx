import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const NoticeContexts = createContext();

function NoticeContext({children}) {
    // fetch the all notice
    const [data, setData] = useState([]);

    const API = 'https://dpi-api.onrender.com/notice'
    const get_notice = async (APIData) =>{
        const noticeData = await axios.get(APIData);
        const notice = await noticeData.data;

        const justNotice = await notice.filter((FilterNotice) =>{
            return ! FilterNotice.title;
        });
        setData(justNotice);
    }
    useEffect(()=>{
        get_notice(API)
    }, []);
  return (
    <NoticeContexts.Provider value={{data}}>
        {children}
    </NoticeContexts.Provider>
  )
}

const useNoticeContexts = () =>{
    return useContext(NoticeContexts);
}

export {NoticeContext, useNoticeContexts};
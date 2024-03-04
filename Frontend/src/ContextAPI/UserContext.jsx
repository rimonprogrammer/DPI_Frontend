import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const All_UserContext = createContext();

function UserContext({children}) {

    const API = 'https://dpi-api.onrender.com/dpi-users';

    // fetch the all user
    const [data, setData] = useState([]); 
    const get_user = async (API) =>{
        try {
            const data = await axios.get(API);
            const respons = await data.data;

            const filterUser = respons.filter((user) =>{
                return user.email !== 'rahitulislam213@gmail.com'
            })
            setData(filterUser);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
        get_user(API)
    }, []);


    // delete an particular user
    const [deleteRes, setDeleteRes] = useState()
    const deleteUser = async(_id) =>{
        const respons = await fetch(`${API}/${_id}`, {
            method : 'DELETE',
            headers : {
                'Context-Type' : 'application/json'
            }
        });
        const json = await respons.json();
        setDeleteRes(json);

        const newData = data.filter((data)=>{
            return data._id !== _id;
        })
        setData(newData);
    }
  return (
    <All_UserContext.Provider value={{data, deleteUser, deleteRes}}>
        {children}
    </All_UserContext.Provider>
  )
}

const useAll_UserContext = () =>{
    return useContext(All_UserContext);
}
export {UserContext, useAll_UserContext}
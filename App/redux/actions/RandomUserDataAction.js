import {
    RANDOM_USER_DATA_START,
    RANDOM_USER_DATA_SUCCESS,
    RANDOM_USER_DATA_ERROR
}from './index.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RandomUserDataAction=(pagination)=>{
    return(dispatch)=>{
        dispatch({type:RANDOM_USER_DATA_START});
        const baseUrl=`https://randomuser.me/api/?results=${pagination}`;
        fetch(baseUrl,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        }).then((response)=>response.json())
        .then((responseData)=>{
            let resultData=[];
            responseData.results.map((item,index)=>{
                let obj={
                    fav:'0',
                    gender:item.gender,
                    name:item.name,
                    location:item.location,
                    email:item.email,
                    picture:item.picture,
                }
                resultData.push(obj);
            })

            dispatch({
                type:RANDOM_USER_DATA_SUCCESS,
                payload: resultData,
              });
              return Promise.resolve(resultData);
        }).catch((error)=>{
            dispatch({
                type:RANDOM_USER_DATA_ERROR,
                payload: error,
            })
        }).done();
    }
}   
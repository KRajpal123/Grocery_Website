import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsDetails } from "../../ApiFolder/getProductsApi";
import { setProductsList } from "../reducers/products";

export const getProductsListFromServer = createAsyncThunk('productsList/get',async (_,{dispatch}) => {
    try{
        const {err,data} = await getProductsDetails();
        if(err){
            console.log("error",err);
            throw new Error('failed while fetching products details data')
        }
        if(data){
            dispatch(setProductsList(data));
            // return setProductsList(data);
        }
    }
    catch(err){
        console.log("error while getting data from server")
        throw err;
    }
})
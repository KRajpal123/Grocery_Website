import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProductsList } from '../../../../redux/reducers/products';
import { getProductsDetails } from '../../../../ApiFolder/getProductsApi';
import { getProductsListFromServer } from '../../../../redux/actions/getProductsListFromServer';
const Products = () => {
const dispatch = useDispatch();


// difference in handling async / await and createAsyncThunK functionalities : 
 // 1. createAsyncThunck automatically handles the three lifeCycles [ pending,fulfilled,rejected]. Normal way it lead more boilerPlate code
 // 2. need to write logic for each stage in the extra reducers feild - createSlice.
 // 3. automatically dispatches the three actions based on promise resolution. Normal way manually dispacthes happn
 


// useEffect(() => {
//  const fetchData =  async () => {
//   try{
//     const {err,data} = await getProductsDetails();

//     if(data){
//       dispatch(setProductsList(data))
//     }
//     if(err){
//       console.log('err',err);
//     }
//   }
//   catch(err){
//     console.log('error while getting data')
//   }
//  }
//  fetchData()
// },[dispatch]);

useEffect(() => {
dispatch(getProductsListFromServer())
},[dispatch])

  return (
   <>
   </>
  )
}

export default Products
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { useParams } from "react-router-dom";
import axios from "axios";

 
export let getDetails=createAsyncThunk('get/details',async function(number){
 
    let DetailsData=await axios.get(`https://api.alquran.cloud/v1/surah/${number}`)
    return DetailsData.data.data
    
})
let details=createSlice({
    
    
    
    
    name:"details",
    
    
    initialState:{

          details:[],
          errors:"",
          loading:false







    },

extraReducers:(function(builder){
builder.addCase(getDetails.pending,function(state,action){
    state.loading=true 
});

builder.addCase(getDetails.fulfilled,function(state,action){
    state.loading=false;
    state.details=action.payload
});
builder.addCase(getDetails.rejected,function(state,action){
    state.loading=false 
});



})





})
export default details.reducer
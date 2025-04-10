import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { useParams } from "react-router-dom";
import axios from "axios";

 
export let getazkar=createAsyncThunk('get/azkar',async function(){
 
    let azkarData=await axios.get(`https://raw.githubusercontent.com/rn0x/Adhkar-json/main/adhkar.json`)
    return azkarData.data 
    
})
let azkar=createSlice({
    
    
    
    
    name:"azkar",
    
    
    initialState:{

          azkar:[],
          errors:"",
          loading:false







    },

extraReducers:(function(builder){
builder.addCase(getazkar.pending,function(state,action){
    state.loading=true 
});

builder.addCase(getazkar.fulfilled,function(state,action){
    state.loading=false;
    state.azkar=action.payload
});
builder.addCase(getazkar.rejected,function(state,action){
    state.loading=false 
});



})





})
export default azkar.reducer
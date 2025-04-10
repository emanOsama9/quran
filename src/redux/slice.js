import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";








export let getdata=   createAsyncThunk("get/data",async function(){
    let getdata=await axios.get("https://api.alquran.cloud/v1/surah")
     return getdata.data.data

})
let slice=createSlice({
  initialState:{
    quran:[],
    errors:"",
    loading:false

  },
  name:"quran",
  reducers:{},


extraReducers:(function(builder){
 builder.addCase(getdata.pending,function(state,action){
    state.loading=true
 });
 builder.addCase(getdata.fulfilled,function(state,action){
    state.loading=false;
    state.quran=action.payload

 });
 builder.addCase(getdata.rejected,function(state,action){
    state.loading=false;
    state.errors=action.error.message
 });

})






})
export default slice.reducer
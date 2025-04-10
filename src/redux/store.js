import { configureStore } from "@reduxjs/toolkit";
import slice from './slice'
import details from './dtails'
  import azkar from './azkar'
export let store=configureStore({
reducer:{
    quran:slice,
    details:details,
    azkar:azkar,
 }

})
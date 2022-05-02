import React from 'react';
// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
     
export function handleDefault(msg) { 
        toast(msg);
 }
export function handleError(msg) { 
        toast.error(msg);
 }
export function handleSuccessmsg(msg) { 
        toast.success(msg);
 }
 export function handleInfor(msg) { 
        toast.info(msg);
 }

export default {handleDefault, handleError, handleSuccessmsg}
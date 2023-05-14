import React, { useState } from 'react'
import './community2.css';
import Grid from '../../Grid/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Community2() {

    let [showForm,setShowForm] = useState(false);
    let [numberOfItem,SetNumberOfItem] = useState(10);

    const MyForm = () => {

        const validationSchema = Yup.object({
            name: Yup.string().required('Name is required'),
          });
    
        const initialValues = {
          name: '',
        };
      
        const handleSubmit = (values) => {
          numberOfItem++;
          SetNumberOfItem(numberOfItem);
          setShowForm(!showForm);
        };
        if(showForm)
        {
            return (
                <div id="formContainer">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form id="form">
                      <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                      </div>
          
                      <button type="submit">Submit</button>
                    </Form>
                  </Formik>
                </div>
              );
        }
        return null;
      };

    
    const array = [];
    for(let i = 0; i < numberOfItem;i++)
    {
        array.push(`c${i}`);
    }
  return (
    <div className ="communityContainer">
        <div id = "communityTitle">
            <span>My<br/>Community</span>
            <Fab color="primary" aria-label="add" onClick={()=>{setShowForm(!showForm)}}>
                <AddIcon />
            </Fab>
            
        </div>
        <div id = "favoriteGrid">
            <Grid array = {array} cols = {3}/>
        </div>
        <MyForm/>
    </div>
    
  )
}


  
  
  
  




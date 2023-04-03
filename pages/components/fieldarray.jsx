import React from "react";
import { Form, Formik, FieldArray, Field } from "formik";

const initialValues = {
  data: [
    {
      name: [],
      email: [],
    },
  ],
};

<Formik
  initialValues={initialValues}
  onSubmit={(values) => console.log(values)}
>
  {(values) => (
  

  <Form>
      <FieldArray name="data">
        {({ insert, remove, push }) => (
          <div>
            {values.data.length > 0 &&
              values.data.map((item, index) => (
                <div key={index}>
                  <Field
                    name={`data.${index}.name`}
                    placeholder="Enter your name"
                    type="text"
                  />
                   <Field
                    name={`data.${index}.email`}
                    placeholder="Enter your email"
                    type="text"
                  />
                  <div>
                    <button onClick={()=>remove(index)}>Remove</button>
                  </div>
                  <div>
                    <button onClick={()=>push({name:"",email:""})}>ADD</button>
                  </div>
                </div>
                
                
              ))}
          </div>
        )}
      </FieldArray>
    </Form>
  )}
</Formik>;

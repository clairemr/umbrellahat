import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//https://formik.org/docs/tutorial

const LocationForm = () => {    
    const formik = useFormik({
        initialValues: {
            location: 'Sydney',
        },
        validationSchema: Yup.object({
            location: Yup.string()
            .max(10, 'Must be under 10 characters')
            .required('Location is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    });
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="location"> Location: </label>
            <input 
                id="location"
                name="location"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? <div>{formik.errors.location}</div> : null}
            <button type="submit">Update</button>
        </form>
    );
}

export default LocationForm;
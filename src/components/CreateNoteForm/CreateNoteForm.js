import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import React from 'react';

export const CreateNoteForm = ({ addNote }) => {
  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      onSubmit={(values, actions) => {
        addNote(values).then(() => actions.setSubmitting(false));
        console.log(values);
        console.log(actions);
        actions.resetForm();
      }}
      validationSchema={yup.object({
        title: yup.string().required(),
        description: yup.string().required('Required'),
      })}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <label id="title">
              Title
              <Field type="text" name="title" />
            </label>
            <br />
            <label id="description">
              Description
              <Field type="text" name="description" />
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>
              Add note
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

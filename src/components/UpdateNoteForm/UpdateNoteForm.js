import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// const resetInitialValue =
export const UpdateNoteForm = ({
  title,
  description,
  id,
  updateNote,
  openModal,
}) => {
  return (
    <Formik
      initialValues={{ title: `${title}`, description: `${description}` }}
      onSubmit={(values, actions) => {
        updateNote({ ...values, id }).then(() => {
          actions.setSubmitting(false);
          openModal();
        });
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
              update note
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

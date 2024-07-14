import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

const ContactForm = ({handleNewContact}) => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too much chars"),
  });

  const initialValues = { name: "", number: "" };

  const handleSubmit = (data, actions) => {
    handleNewContact(data.name, data.number);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className="error-message"
            />
          </label>
          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className="error-message"
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidator } from "validators/auth";
const SignupComponent = () => {
  const signupForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
      setSubmitting(false);
    };
    return (
      <Formik 
      initialValues={{name:"", email:"", password:""}} 
      validate={values=>signupValidator(values)} 
      onSubmit={handleSubmit}>
        {({
          isSubmitting,
        }) => (
          <Form>
            <Field name="name" />
            <ErrorMessage name="name" />
            <Field name="email" type="email"/>
            <ErrorMessage name="email" />
            <Field name="password" type="password"/>
            <ErrorMessage name="password" />
            <button type="submit" disabled={isSubmitting}>Sign up</button>
          </Form>
        )}
      </Formik>
    );
  };
  return <div>{signupForm()}</div>;
};

export default SignupComponent;

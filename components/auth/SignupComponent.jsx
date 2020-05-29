import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupValidator } from "validators/auth";
import { FormLabel, FormGroup, Row, FormControl, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios'

const SignupComponent = () => {
  const [formResult, setFormResult] = useState("")
    
  const signupForm = () => {
    const handleSubmit = async (values, { setSubmitting }) => {
      axios.post("api/auth/signup",values,{headers:{"Content-type":"application/json"}})
      .then(res=>setFormResult(res.data.message))
      .catch(err=>setFormResult(err))
      .finally(()=>setSubmitting(false))
      values={ name: "", email: "", password: "" }
    };
    return (
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => signupValidator(values)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup as={Row} controlId="name">
              <FormLabel column md={2} className="px-0">
                Name
              </FormLabel>
              <FormControl
                as={Field}
                className="col col-md-10"
                name="name"
              ></FormControl>
              <ErrorMessage
                name="name"
                render={(err) => (
                  <Col md="auto" className="ml-auto px-0">
                    {err}
                  </Col>
                )}
              />
            </FormGroup>
            <FormGroup as={Row} controlId="email">
              <FormLabel column md={2} className="px-0">
                Email
              </FormLabel>
              <FormControl
                as={Field}
                className="col col-md-10"
                name="email"
                type="email"
              ></FormControl>
              <ErrorMessage
                name="email"
                render={(err) => (
                  <Col md="auto" className="ml-auto px-0">
                    {err}
                  </Col>
                )}
              />
            </FormGroup>
            <FormGroup as={Row} controlId="password">
              <FormLabel column md={2} className="px-0">
                Password
              </FormLabel>
              <FormControl
                as={Field}
                className="col col-md-10"
                name="password"
                type="password"
              ></FormControl>
              <ErrorMessage
                name="password"
                render={(err) => (
                  <Col md="auto" className="ml-auto px-0">
                    {err}
                  </Col>
                )}
              />
            </FormGroup>
            <Row>
              <Col md="auto" className="mr-auto px-0 offset-md-2">
              <Button variant="primary" type="submit" disabled={isSubmitting}>Sign up</Button>
              </Col>
            </Row>
            {formResult && <Row>
              {JSON.stringify(formResult)}
              </Row>}
          </Form>
        )}
      </Formik>
    );
  };
  return (
    <Row className="justify-content-center mt-4">
      <Col md={6}>{signupForm()}</Col>
    </Row>
  );
};

export default SignupComponent;

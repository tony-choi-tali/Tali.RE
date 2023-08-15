"use client";

import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";

const SignUpForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          breLicense: "",
          broker: "",
          address: "",
          website: "",
          rName: "",
          rEmail: "",
          rPhone: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="h-full bg-black">
            <div className="flex flex-col justify-between h-full gap-4 pt-3 overflow-auto">
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="name"
                label="Name"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="phone"
                label="Phone"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="email"
                label="Email"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="breLicense"
                label="BRE License"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="broker"
                label="Brokage/Broker"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="address"
                label="Office Address"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="website"
                label="Website"
                size="small"
                fullWidth
              />
              <div className="my-3">
                <strong>Referral</strong>
                <div className="faded-divider" />
              </div>
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="rName"
                label="Name"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="rEmail"
                label="Email"
                size="small"
                fullWidth
              />
              <Field
                InputLabelProps={{
                  shrink: true,
                }}
                component={TextField}
                name="rPhone"
                label="Phone"
                size="small"
                fullWidth
              />
              <Button
                fullWidth
                disableElevation
                disabled={isSubmitting}
                type="submit"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Sign up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

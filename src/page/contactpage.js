import {
  Alert,
  Box,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextInputField } from "../components/textInput";
import { useAnimate, useInView } from "framer-motion";
import emailjs from "emailjs-com";

export const ContactPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const [data, setData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: [0, 1], x: [-800, 0] },
        { duration: 3, delay: 0.25, type: "spring" }
      );
    }
  }, [isInView]);

  const handledChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = () => {
    setFormErrors(validate(data));
    setSubmitting(true);
  };

  const validate = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.senderName) {
      errors.senderName = "Please Enter name";
    }
    if (!data.senderMail) {
      errors.senderMail = "Please Enter mail";
    } else if (!regex.test(data.senderMail)) {
      errors.senderMail = "Invalid mail format";
    }
    if (!data.message) {
      errors.message = "Please Enter message";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && submitting) {
      console.log(data);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          setData({});
          alert("E mail send successfully");
        },
        (error) => {
          console.log(error.text);
          alert("E mail send fail");
        }
      );
    }
  }, [formErrors]);

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#141414",
      }}
    >
      <Grid container>
        <Grid item sm={1}></Grid>
        <Grid item xs={12} sm={7}>
          <Box
            ref={scope}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#292929",
              padding: 5,
              mt: 5,
              borderRadius: 5,
              // opacity: 0,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Acme",
                fontSize: 20,
                fontStyle: "italic",
                my: 2,
              }}
            >
              Contact.
            </Typography>
            <TextInputField
              header="Your Name"
              placeHolder="What is your name?"
              name="senderName"
              onchange={handledChange}
              helperText={formErrors.senderName ? formErrors.senderName : ""}
              error={formErrors.senderName && true}
            ></TextInputField>
            <TextInputField
              header="Your Email"
              placeHolder="What is your email?"
              name="senderMail"
              onchange={handledChange}
              helperText={formErrors.senderMail ? formErrors.senderMail : ""}
              error={formErrors.senderMail && true}
            ></TextInputField>
            <TextInputField
              header="Your Message"
              placeHolder="What is your message?"
              name="message"
              onchange={handledChange}
              helperText={formErrors.message ? formErrors.message : ""}
              error={formErrors.message && true}
            ></TextInputField>

            <Button sx={{ color: "white" }} onClick={submit}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

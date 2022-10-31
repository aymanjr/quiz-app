import React from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Center from "./Center";
import useForm from "../hooks/useForm";
import { createAPIEndpoint } from "../Api";
const getFreshModel = () => ({
  name: "",
  email: "",
});
export default function Login() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const login = (e) => {
    e.preventDefault();
    createAPIEndpoint("participant").post(values).then(res=>console.log(res)).catch(err=>console.log(err));
  };

  return (
    <Center>
      <Card sx={{ width: 400, textAlign: "center" }}>
        <Typography variant="h3" sx={{ my: 3 }}>
          Quiz App
        </Typography>
        <CardContent>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate autoComplete="off" onSubmit={login}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                values={values.email}
                onChange={handleInputChange}
              />
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                values={values.name}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "90%",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}

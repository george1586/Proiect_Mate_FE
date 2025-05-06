import { LockOutlined } from "@mui/icons-material";
import { Avatar, Container, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import postFormData from "../services/authService.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    passwordHash: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postFormData(formData); 
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar sx={{ mx: "auto", backgroundColor: 'secondary.main', mb: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5" align="center" gutterBottom>
          Log in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            name="name"
            placeholder="Enter username"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            name="passwordHash"
            placeholder="Enter password"
            type="password"
            value={formData.passwordHash}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            Log in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;

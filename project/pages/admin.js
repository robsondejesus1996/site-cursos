import Link from "next/link";
import Navbar from "../components/Navbar";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function UnidadesCurriculares() {
  return (
    <div>
      <div className="espacemento">
        <h1>Admin Cadastro Cursos</h1>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </div>
  );
}

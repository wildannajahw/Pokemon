import React from "react";
import { Box, Button,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface PokeAddSuccessProps {
  handleClose: () => void;
}

export default function PokeAddSuccess({ handleClose }: PokeAddSuccessProps) {
  const navigate = useNavigate();
  const gotoPokebag = () => {
    navigate("/pokebag");
  };
  return (
    <>
      <Typography variant="h2">
        Your Pokemon is safe and sound in your pokebag.
      </Typography>
      <Box sx={{ mt: 500, flexDirection: "row" }}>
        <Button
          onClick={handleClose}
        />
        <Box />
        <Button  onClick={gotoPokebag} sx={{ flex: 1 }} />
      </Box>
    </>
  );
}
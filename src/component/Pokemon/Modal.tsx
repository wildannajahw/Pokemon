import React, { lazy, Suspense, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Pokemon } from "../../query/types";


const AddForm = lazy(
  () => import(/* webpackChunkName: "poke-add-form" */ "./AddForm")
);
const AddSuccess = lazy(
  () => import(/* webpackChunkName: "poke-add-success" */ "./AddSuccess")
);
interface PokeModalProps {
  result: boolean;
  handleClose: () => void;
  pokemon: Pokemon;
}
export default function PokeModal({
  result,
  handleClose,
  pokemon,
}: PokeModalProps) {
  const [status, setStatus] = useState<"success" | null>(null);

  const message = result ? "Gotcha!" : "Sorry, lady luck not in your side!";

  return (
    <Container>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 0,
          borderRadius: "32px 32px 0px 0px",
          backgroundColor: "ui-1",
          maxHeight: "80%",
          p: 5,
          pt: 7,
          pb: 6,
          maxWidth:"480px",
          margin: "0 auto"
        }}
      >
        <Suspense fallback>
          {status === "success" ? (
            <AddSuccess handleClose={handleClose} />
          ) : (
            <>
              <Typography  variant="h1" sx={{ fontWeight: 4 }}>
                {message}
              </Typography>
              {result && (
                <AddForm
                  pokemon={pokemon}
                  onSuccess={() => setStatus("success")}
                />
              )}
              {!result ? (
                <Button onClick={handleClose} sx={{ mt: 5 }} />
              ) : null}
            </>
          )}
        </Suspense>
      </Box>
    </Container>
  );
}


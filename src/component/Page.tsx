
import React, { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
// import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  title: string;
}
const Page = forwardRef<HTMLDivElement, Props>(({ children, ...other }, ref) => (
  <Box ref={ref} {...other} sx={{
    minHeight: '100vh',
    bgcolor: 'background.default',
  }}>
    {children}
  </Box>
));

export default Page;

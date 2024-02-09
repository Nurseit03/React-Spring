import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import AnimationsList from "@/components/animations/AnimationsList";

interface IAnimationsContentProps {}

const AnimationsContent: FC<IAnimationsContentProps> = (props) => {
  return (
    <Box
      component="section"
      py={10}
      display="flex"
      flexDirection="column"
      gap="60px"
      marginBottom="40px"
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "36px",
          fontWeight: 600,
        }}
      >
        React Spring components list
      </Typography>

      <AnimationsList />
    </Box>
  );
};

export default AnimationsContent;

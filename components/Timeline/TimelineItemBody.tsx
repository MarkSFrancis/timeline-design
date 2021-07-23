import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import React from "react";

export const TimelineItemBody = forwardRef<BoxProps, typeof Box>(
  (props, ref) => {
    return (
      <Box position="relative" padding={0} left="4em" ref={ref} {...props} />
    );
  }
);

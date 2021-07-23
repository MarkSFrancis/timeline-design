import { Box, BoxProps, forwardRef, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const TimelineItemIcon = forwardRef<BoxProps, typeof Box>(
  (props, ref) => {
    const outlineColor = useColorModeValue("white", "gray.800");

    return (
      <Box
        outline="10px solid"
        outlineColor={outlineColor}
        margin="0.5em 0.5em 0.5em -0.5em"
        position="absolute"
        top={0}
        left="2em"
        width="1em"
        height="1em"
        ref={ref}
        {...props}
      >
        {props.children ?? <TimelineItemIconDiamond />}
      </Box>
    );
  }
);

export const TimelineItemIconDiamond = forwardRef<BoxProps, typeof Box>(
  (props, ref) => {
    const defaultBackground = useColorModeValue("gray.800", "#FFF");

    return (
      <Box
        transform="rotate(45deg)"
        background={defaultBackground}
        width="100%"
        height="100%"
        ref={ref}
        {...props}
      />
    );
  }
);

import { forwardRef, ListItem, ListItemProps } from "@chakra-ui/react";
import React from "react";

export const TimelineItem = forwardRef<ListItemProps, typeof ListItem>(
  (props, ref) => {
    return <ListItem position="relative" ref={ref} {...props} />;
  }
);

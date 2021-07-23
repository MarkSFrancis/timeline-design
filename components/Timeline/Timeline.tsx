import {
  CSSObject,
  forwardRef,
  ListProps,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export interface TimelineProps extends ListProps {
  timelineColor?: string;
  timelineWidth?: number;
  timelineCss?: CSSObject;
}

export const Timeline = forwardRef<TimelineProps, typeof UnorderedList>(
  ({ timelineColor, timelineWidth, timelineCss, ...props }, ref) => {
    const defaultTimelineColor = useColorModeValue("gray.800", "#FFF");
    if (timelineWidth === undefined) {
      timelineWidth = 2;
    }
    const marginLeft = -Math.floor(timelineWidth / 2);

    return (
      <UnorderedList
        align="stretch"
        styleType="none"
        position="relative"
        _before={{
          content: "''",
          background: timelineColor ?? defaultTimelineColor,
          marginLeft: `${marginLeft}px`,
          position: "absolute",
          top: 0,
          left: "2em",
          width: `${timelineWidth}px`,
          height: "100%",
          ...(timelineCss ?? {}),
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

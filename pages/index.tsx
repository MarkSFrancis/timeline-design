import { VStack, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Timeline } from "../components/Timeline";
import { TimelineItem } from "../components/Timeline/TimelineItem";
import { TimelineItemBody } from "../components/Timeline/TimelineItemBody";
import { TimelineItemIcon } from "../components/Timeline/TimelineItemIcon";

export default function Home() {
  return (
    <Container maxW="container.md" my={4}>
      <Timeline spacing={8} timelineWidth={1}>
        <TimelineItem>
          <TimelineItemIcon />
          <TimelineItemBody>
            <VStack align="stretch" spacing={4}>
              <VStack align="stretch" spacing={1}>
                <Heading size="lg" lineHeight={1}>
                  Latest thing
                </Heading>
                <small>{new Date().toLocaleString()}</small>
              </VStack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                molestias aut alias facere veniam quam asperiores! Veniam beatae
                perspiciatis, aperiam aliquam magni, provident dicta dolores
                iure earum explicabo molestiae recusandae?
              </Text>
              <Text>
                Neque dolore exercitationem error quasi autem rerum? Cupiditate,
                neque officiis voluptas nulla dolor sapiente in dolorum,
                accusantium ducimus mollitia suscipit deleniti asperiores nemo,
                a perspiciatis natus incidunt praesentium voluptatem iure.
              </Text>
              <Text>
                Ex hic temporibus quo illo modi veniam voluptatum quam quos
                tempore laudantium nostrum, aut impedit doloribus! Hic dolore
                nostrum minus eius totam, quia, accusantium ea deserunt
                obcaecati adipisci repellat asperiores?
              </Text>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                quos dolorem mollitia architecto, harum eius. Quia sint enim
                officiis reprehenderit?
              </Text>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur incidunt esse fuga magni harum sed. Deleniti odit
                voluptates, molestias soluta a inventore id eveniet odio fugiat
                officiis totam deserunt doloribus corporis amet impedit! Iste
                voluptas provident commodi, molestias, eum quia, tenetur modi
                laborum dicta incidunt ad doloremque inventore fugit ducimus?
              </Text>
            </VStack>
          </TimelineItemBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineItemIcon />
          <TimelineItemBody>
            <VStack align="stretch" spacing={4}>
              <VStack align="stretch" spacing={1}>
                <Heading size="lg" lineHeight={1}>
                  A change I made earlier
                </Heading>
                <small>
                  {new Date(
                    new Date().setMonth(new Date().getMonth() - 1)
                  ).toLocaleString()}
                </small>
              </VStack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                esse et iste aspernatur quaerat facilis totam, temporibus qui
                quod commodi eveniet, voluptatibus expedita id, cumque odit
                similique tempore officia provident?
              </Text>
              <Text>
                Quis rerum culpa iure harum rem iste numquam eos magni
                voluptatum error soluta fuga, molestiae maxime, voluptatibus
                magnam? Nam, quas. Nostrum culpa aspernatur dolor pariatur eius
                hic illum, facilis eum.
              </Text>
            </VStack>
          </TimelineItemBody>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

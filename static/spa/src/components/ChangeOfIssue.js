import React from "react";
import { Card, Row, ScrollContainer, Box, Text } from "../Styles";
import Avatar from "@atlaskit/avatar";

function ChangeOfIssue({ value }) {
  return (
    <Row>
      <Box>
        <Avatar size="large" src={value.author.avatarUrls["48x48"]} />
      </Box>
      <Box>
        <Text>{value.author.displayName}</Text>
      </Box>
      <Box>
        <Text>{value.created}</Text>
      </Box>
      <Box>
        <Text>
          {value.items[1] ? value.items[1].field : value.items[0].field}
        </Text>
      </Box>
      <Box>
        <Text>
          <Text>
            {value.items[1]
              ? value.items[1].fromString
              : value.items[0].fromString}
          </Text>
        </Text>
      </Box>
      <Box>
        <Text>
          {value.items[1] ? value.items[1].toString : value.items[0].toString}
        </Text>
      </Box>
    </Row>
  );
}

export default ChangeOfIssue;

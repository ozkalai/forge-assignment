import React, { useEffect, useState, Fragment } from "react";
import { invoke } from "@forge/bridge";

// Atlaskit
import { LoadingButton as Button } from "@atlaskit/button";

// Custom Styles
import { Card, Row, ScrollContainer, Box, Text } from "./Styles";
import RowList from "./components/RowList";

function App() {
  const [changeLog, setChangeLog] = useState([]);

  useEffect(() => {
    fetch("/rest/api/3/issue/TASK-1/changelog", {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          "melihozkalayy@gmail.com:FuCbGOTOQSWHXrtQ6NYwB7C9"
        ).toString("base64")}`,
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setChangeLog(text);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(changeLog);

  return (
    <Card>
      <ScrollContainer>
        <RowList changeLog={changeLog} />
      </ScrollContainer>
    </Card>
  );
}

export default App;

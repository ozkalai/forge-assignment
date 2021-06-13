import React, { useState } from "react";
import ChangeOfIssue from "./ChangeOfIssue";

export default function RowList({ changeLog, values }) {
  console.log(changeLog.values.length);
  if (changeLog.values.length > 0) {
    return (
      <>
        {changeLog.values.map((value) => (
          <ChangeOfIssue value={value} key={value.id} />
        ))}
      </>
    );
  }
  return <p>Loadig Data ... </p>;
}

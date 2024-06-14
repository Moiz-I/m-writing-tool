"use client";

import React from "react";

import { Plate, PlateContent } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";

const initialValue = [
  {
    type: "p",
    children: [
      {
        text: "This is editable plain text with react and history plugins, just like a <textarea>!",
      },
    ],
  },
];

export function BasicEditor() {
  const [value, setValue] = React.useState(initialValue);
  return (
    <Plate
      initialValue={value}
      onChange={(value) => {
        console.log("value", value);
      }}
    >
      <Editor
        onKeyDown={(e) => {
          if (e.shiftKey) {
            console.log("shift key is pressed");
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }
          // if (e.key === "Enter") {
          //   e.preventDefault();
          // }
        }}
      />
    </Plate>
  );
}

import React from "react";
import AppbarCom from "./AppbarCom";
import ContentsCom from "./ContentsCom";

export default function Main() {
  return (
    <div className="flex flex-col gap-3">
      <AppbarCom />
      <div className="px-3">
        <ContentsCom />
      </div>
    </div>
  );
}

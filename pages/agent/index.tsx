import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Agent: NextPage = () => {
  return (
    <div style={{margin: "20px 0"}}>
      <Stack className="container">AGENT LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(Agent);

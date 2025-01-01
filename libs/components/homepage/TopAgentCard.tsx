import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box
        className="img"
        style={{
          backgroundImage: "url('/img/profile/girl.svg')",
        }}
      >
      </Box>
      <Box className="info">
        <p className="title">David</p>
        <p className="desc">AGENT</p>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;

import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Community: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>COMUNITY  MOBILE</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">COMUNITY</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Community);

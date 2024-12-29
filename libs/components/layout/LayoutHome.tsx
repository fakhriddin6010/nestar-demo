import Footer from "@/libs/Footer";
import Top from "@/libs/Top";
import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack id={"top"}>
            <Top/>
          </Stack>
          <Stack className={"header-main"}>Header Filter</Stack>
          <Stack id={"main"}>
            <Component {...props} />
          </Stack>
          <Stack id={"footer"}>
            <Footer/>
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
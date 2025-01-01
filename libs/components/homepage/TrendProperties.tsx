import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./TrendPropertyCard";

const TrendProperties = ({ initialInput, ...props }: any) => {
  const [trendProperties, setTopProperties] = useState<number[]>(initialInput);

  return (
    <Stack className="trend-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Trend Properties</span>
            <p>Trend is based on likes</p>
          </Box>
          <Box className="right">
            <div className="pagination-box">
              <WestIcon className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
              <EastIcon className="swiper-trend-next" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          <Swiper
            className="trend-property-swiper"
            slidesPerView="auto"
            spaceBetween={15}
            navigation={{
              nextEl: ".swiper-trend-next",
              prevEl: ".swiper-trend-prev",
            }}
            pagination={{
              el: ".swiper-trend-pagination",
            }}
          >
            {trendProperties.map((property, index) => {
              return (
                <SwiperSlide className="trend-property-slide" key={index}>
                  <TrendPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Stack>
    </Stack>
  );
};
TrendProperties.defaultProps = {
    initialInput: [1, 2, 3, 4, 5, 6, 7],
  };

export default TrendProperties;

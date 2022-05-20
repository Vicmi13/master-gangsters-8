import React from "react";
import { Chart, Point, Line, Slider } from "bizcharts";

const data = [
  { type: "Sensor1", time: "2020/03/25 06:31", value: 1 },
  { type: "Sensor1", time: "2020/03/24 06:30", value: 3 },
  { type: "Sensor1", time: "2020/03/24 06:30", value: 4 },
  { type: "Sensor1", time: "2020/03/28 04:30", value: 3.5 },
  { type: "Sensor1", time: "2020/03/28 20:00", value: 5 },
  { type: "Sensor1", time: "2020/03/21 06:30", value: 8 },
  { type: "Sensor1", time: "2020/03/30 14:00", value: 4.9 },
  { type: "Sensor1", time: "2020/03/28 16:00", value: 6 },
  { type: "Sensor1", time: "2020/03/30 18:00", value: 7 },
  { type: "Sensor1", time: "2020/03/30 06:30", value: 9 },
  { type: "Sensor1", time: "2020/04/06 20:00", value: 44 },
  { type: "Sensor1", time: "2020/04/06 15:00", value: 24 },
  { type: "Sensor1", time: "2020/04/06 09:00", value: 5 },
  { type: "Sensor1", time: "2020/03/29 20:00", value: 13 },
  { type: "Sensor2", time: "2020/03/26 06:30", value: 6 },
  { type: "Sensor2", time: "2020/03/31 16:00", value: 8 },
  { type: "Sensor2", time: "2020/03/28 22:00", value: 5.5 },
  { type: "Sensor2", time: "2020/03/29 14:00", value: 7 },
  { type: "Sensor2", time: "2020/03/25 04:30", value: 9.9 },
  { type: "Sensor2", time: "2020/03/30 20:00", value: 6 },
  { type: "Sensor2", time: "2020/03/28 14:00", value: 5 },
  { type: "Sensor2", time: "2020/03/31 22:00", value: 10 },
  { type: "Sensor2", time: "2020/04/6 22:00", value: 30 },
  { type: "Sensor2", time: "2020/04/6 17:00", value: 17 },
  { type: "Sensor2", time: "2020/04/6 07:00", value: 8 },
  { type: "Sensor3", time: "2020/03/28 06:30", value: 2 },
  { type: "Sensor2", time: "2020/03/27 06:30", value: 25 },
  { type: "Sensor3", time: "2020/03/31 18:00", value: 6 },
  { type: "Sensor3", time: "2020/03/31 04:30", value: 9 },
  { type: "Sensor3", time: "2020/03/30 04:30", value: 10 },
  { type: "Sensor3", time: "2020/03/26 04:30", value: 15 },
  { type: "Sensor3", time: "2020/03/23 06:30", value: 8 },
  { type: "Sensor3", time: "2020/03/22 06:30", value: 8 },
  { type: "Sensor3", time: "2020/03/31 14:00", value: 5 },
  { type: "Sensor3", time: "2020/03/30 22:00", value: 4.6 },
  { type: "Sensor3", time: "2020/04/06 18:00", value: 54 },
  { type: "Sensor3", time: "2020/04/06 13:00", value: 39 },
  { type: "Sensor3", time: "2020/04/06 10:00", value: 20 },
];

const BizGraphics = () => {
  let flag = false;
  return (
    <Chart
      padding={[10, 20, 50, 30]}
      // autoFit
      width={590}
      height={450}
      data={data}
      scale={{ value: { min: 0, max: 60 } }}
      onGetG2Instance={(c) => {
        const slider = c.getController("slider").slider.component;
        slider.on("sliderchange", console.log);
        c.on("afterrender", () => {
          // get the slider padding
          const [paddingTop, paddingRight, paddingBottom, paddingLeft] =
            slider.cfg.padding;
          // recalculate the slider
          slider.update({
            ...slider.cfg,
            width: slider.cfg.width - paddingLeft,
          });
          slider.render();
        });
      }}
    >
      <Line position="time*value"></Line>
      <Point position="time*value"></Point>

      <Slider
        start={0.2}
        padding={[0, 0, 0, 100]}
        formatter={(v, d, i) => {
          flag = !flag;
          return `${v} year`;
        }}
      />
    </Chart>
  );
};

export default BizGraphics;

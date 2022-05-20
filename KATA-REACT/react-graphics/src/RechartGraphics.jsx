import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const RechartGraphics = () => {
  const data = [
    { time: "2020/03/25 06:31", value: 1 },
    { time: "2020/03/24 06:30", value: 3 },
    { time: "2020/03/24 06:30", value: 4 },
    { time: "2020/03/28 04:30", value: 3.5 },
    { time: "2020/03/28 20:00", value: 5 },
    { time: "2020/03/21 06:30", value: 8 },
    { time: "2020/03/30 14:00", value: 4.9 },
    { time: "2020/03/28 16:00", value: 6 },
    { time: "2020/03/30 18:00", value: 7 },
    { time: "2020/03/30 06:30", value: 9 },
    { time: "2020/04/06 20:00", value: 44 },
    { time: "2020/04/06 15:00", value: 24 },
    { time: "2020/04/06 09:00", value: 5 },
    { time: "2020/03/29 20:00", value: 13 },
    { time: "2020/03/26 06:30", value: 6 },
  ];

  return (
    <LineChart width={900} height={500} data={data} padding={[10, 20, 50, 30]}>
      {/* padding={{ top:10, left: 20, bottom: 50, right: 30 }} */}
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        // strokeDasharray="4"
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="4 4" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default RechartGraphics;

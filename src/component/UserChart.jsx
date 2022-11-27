import React from "react";
import { DonutChart } from "@tremor/react";
import { Card, Typography } from "@mui/material";

const UserChart = ({ posts }) => {
  // const post = { posts };
  const cities = [
    {
      sehir: "New York",
      ucret: 9800,
    },
    {
      sehir: "London",
      ucret: 4567,
    },
    {
      sehir: "Hong Kong",
      ucret: 3908,
    },
    {
      sehir: "San Francisco",
      ucret: 2400,
    },
    {
      sehir: "Singapore",
      ucret: 1908,
    },
    {
      sehir: "Zurich",
      ucret: 1398,
    },
  ];
  console.log(posts);
  const valueFormatter = (number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Card maxWidth="max-w-lg">
      <Typography>Sales by City</Typography>
      <DonutChart
        data={cities}
        category="ucret"
        dataKey="sehir"
        valueFormatter={valueFormatter}
        marginTop="mt-6"
        height="h-80"
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </Card>
  );
};

export default UserChart;

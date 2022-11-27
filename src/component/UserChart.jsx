import React from "react";
import { DonutChart } from "@tremor/react";
import { Card, Typography } from "@mui/material";

const UserChart = () => {
  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];

  const valueFormatter = (number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  return (
    <Card maxWidth="max-w-lg">
      <Typography>Sales by City</Typography>
      <DonutChart
        data={cities}
        category="sales"
        dataKey="name"
        valueFormatter={valueFormatter}
        marginTop="mt-6"
        height="h-80"
        colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
      />
    </Card>
  );
};

export default UserChart;

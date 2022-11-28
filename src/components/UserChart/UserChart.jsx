import React from "react";
import { DonutChart } from "@tremor/react";
import { Card, Typography } from "@mui/material";

const UserChart = ({ posts, userPost }) => {
  

  console.log(userPost);
  const valueFormatter = (number) =>
    ` ${Intl.NumberFormat("us").format(number)}`;
  return (
    <Card>
      <Typography>Sales by City</Typography>
      <DonutChart
        data={userPost}
        category="userPostCount"
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

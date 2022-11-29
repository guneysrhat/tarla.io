import React from "react";
import { DonutChart } from "@tremor/react";


const UserChart = ({ userPost }) => {
  const valueFormatter = (number) =>
    ` ${Intl.NumberFormat("us").format(number)}`;
  return (
    <>
      <DonutChart
        data={userPost}
        category="userPostCount"
        dataKey="name"
        valueFormatter={valueFormatter}
        marginTop="mt-6"
        height="h-80"
        colors={[
          "slate",
          "violet",
          "indigo",
          "rose",
          "cyan",
          "amber",
          "pink",
          "brown",
          "lime",
          "emerald",
        ]}
      />
    </>
  );
};

export default UserChart;

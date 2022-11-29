import React from "react";
import { DonutChart } from "@tremor/react";
import { Container, Title } from "./UserChart.style";

const UserChart = ({ posts, userPost }) => {
  const valueFormatter = (number) =>
    ` ${Intl.NumberFormat("us").format(number)}`;
  return (
    <Container>
      <Title>Sales by City</Title>
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
          "emerald"  ,
        ]}
      />
    </Container>
  );
};

export default UserChart;

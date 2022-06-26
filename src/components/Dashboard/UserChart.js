import React from "react";
import Chart from "react-google-charts";

const UserChart = () => {
  return (
    <div>
      <h1>Monthly Users</h1>
      <Chart
        width={"500px"}
        height={"500px"}
        chartType="LineChart"
        loader={<div>Loading User Line Chart</div>}
        data={[
          ["Jan-1", 10],
          ["Jan-2", 23],
        ]}
        options={{
          title: "Monthly Users",
          hAxis: { title: "No of Users", titleTextStyle: { color: "red" } },
          vAxis: { title: "Month", minValue: 0 },
          chartArea: { width: "50%", height: "50%" },
        }}
      />
    </div>
  );
};

export default UserChart;

import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
  h: {
    paddingLeft: "20px",
    paddingTop: "10px",
  },
});

function UserGraph(props: { loading: boolean; data: any }) {
  const classes = useStyles();

  if (props.loading)
    return <Skeleton variant="rect" width={1500} height={50} />;

  return (
    <div>
      <Card style={{ backgroundColor: "#414563" }}>
        <Typography className={classes.h} variant="h5" color="textSecondary">
          Monthly Users
        </Typography>
        <React.Fragment>
          <ResponsiveContainer width="100%" aspect={5}>
            <LineChart
              width={1500}
              height={50}
              data={props.data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis dataKey="date" tick={{ fill: "#000000" }}>
                <Label angle={0} position="left" style={{ fill: "#0e0d0d" }}>
                  Date
                </Label>
              </XAxis>

              <YAxis dataKey="price" tick={{ fill: "#000000" }}>
                <Label
                  angle={270}
                  position="left"
                  style={{ textAnchor: "middle", fill: "#000000" }}
                >
                  Users
                </Label>
              </YAxis>
              <Tooltip
                formatter={(value: string, _name: string, props: any) => [
                  "No of Users",
                ]}
                contentStyle={{
                  backgroundColor: "#12152c",
                  color: "#111111",
                }}
                itemStyle={{ color: "#000000" }}
                cursor={false}
                active={true}
                // animationDuration={0}
                // animationEasing="linear"
                isAnimationActive={false}
              />

              <Line dataKey="users" stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        </React.Fragment>
      </Card>
    </div>
  );
}

export default UserGraph;

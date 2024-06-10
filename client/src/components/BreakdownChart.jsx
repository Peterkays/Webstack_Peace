import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetSalesQuery } from "state/api";

const BreakdownChart = ({ isDashboard = false }) => {
  // Use the useGetSalesQuery hook to fetch the sales data
  const { data, isLoading } = useGetSalesQuery();
  const theme = useTheme();

  // Check if the data is loaded and not loading
  if (!data || isLoading) return "Loading...";

  // Define the colors for the pie chart
  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ];

  // Format the data for the pie chart
  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );

  // Render the pie chart
  return (
    <Box
      // Set the height and width of the chart
      height={isDashboard ? "400px" : "100%"}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      <ResponsivePie
        // Set the data for the pie chart
        data={formattedData}
        // Set the theme for the pie chart
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        // Set the colors for the pie chart
        colors={{ datum: "data.color" }}
        // Set the margin for the pie chart
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        // Sort the data by value
        sortByValue={true}
        // Set the inner radius of the pie chart
        innerRadius={0.45}
        // Set the active outer radius offset
        activeOuterRadiusOffset={8}
        // Set the border width and color
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        // Enable arc link labels
        enableArcLinkLabels={!isDashboard}
        // Set the arc link label color
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        // Set the arc link label thickness
        arcLinkLabelsThickness={2}
        // Set the arc link label color
        arcLinkLabelsColor={{ from: "color" }}
        // Set the arc label skip angle
        arcLabelsSkipAngle={10}
        // Set the arc label text color
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        // Set the legends
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
      <Box
        // Set the position and color of the total label
        position="absolute"
        top="50%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total:"} ${data.yearlySalesTotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default BreakdownChart;

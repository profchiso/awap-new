// import React from "react";
import { PieChart, Pie, Cell, Legend, Label, Tooltip } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 150 }
//   // {name: 'd', value: 1}
// ];

// const colors = [
//   "#1F77B4", // blue
//   "#FF7F0E", // orange
//   "#2CA028", // green
//   "#FFBB28", // yellow
//   "#9B59B6", // purple
// ];

const data = [
    { name: "Questions unanswered", value: 10 },
    { name: "Questions answered correctly", value: 30 },
    { name: "Questions answered incorrectly", value: 30 },
  ];
  
  const colors = [
    "#F14008", // lightOrange
    "#0D005F", // blue
    "#A8EC01", // lightGreen
  ];


// const CenterLabel = ({ viewBox, value1, value2 }) => {
//   const { cx, cy } = viewBox;
//   return (
//     <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
//       <tspan alignmentBaseline="middle" x={cx} dy="-0.25em" fontSize="26">
//         {value1}
//       </tspan>
//       <tspan dy="1.25em" x={cx} fontSize="14">
//         {value2}
//       </tspan>
//     </text>
//   );
// };

export default ({ name }) => (
  <PieChart height={297} width={540}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={80}
      outerRadius={130}
      dataKey="value"
      nameKey="name"
      fill="gray"
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={colors[index % colors.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend
      align="right"
      layout="vertical"
      verticalAlign="middle"
      iconSize={12}
      iconType="circle"
      wrapperStyle={{ fontSize: "14px", paddingLeft: "10px"}}
    />
  </PieChart>
);

// const OtherPie = () => (
//   <PieChart height={297} width={420}>
//     <Pie
//       data={[{ name: "No data collected", value: 1 }]}
//       cx="60%"
//       cy="50%"
//       innerRadius={80}
//       outerRadius={130}
//       dataKey="value"
//       nameKey="name"
//       fill="gray"
//     />
//     <Legend
//       align="right"
//       layout="vertical"
//       verticalAlign="middle"
//       iconSize={12}
//       iconType="circle"
//       wrapperStyle={{ fontSize: "14px", right: "-30px" }}
//     />
//   </PieChart>
// );

// export { OtherPie };

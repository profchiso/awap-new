// import React from "react";
import { PieChart, Pie, Cell, Legend, Label, Tooltip } from "recharts";


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

const anwseredQuestions =()=>{
  
}

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

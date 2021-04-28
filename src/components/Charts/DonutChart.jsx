import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Label, Tooltip } from "recharts";
import { connect } from "react-redux";

const colors = [
  "#F14008", // lightOrange
  "#0D005F", // blue
  "#A8EC01", // lightGreen
];

function DonutChart(props) {
  const { questionArray } = props.practiceQuestionReducer;

  console.log(questionArray);

  let correctAnswers = questionArray.filter(
    (item) => item.userSelectedAnswer === item.answer
  );
  let wrongAnswers = questionArray.filter(
    (item) => item.userSelectedAnswer && item.userSelectedAnswer !== item.answer
  );
  let unAnswered = questionArray.filter((item) => !item.userSelectedAnswer);

  let correctAnswersCount = correctAnswers.length;
  let wrongAnswersCount = wrongAnswers.length;
  let unAnwseredQuestionsCount = unAnswered.length;
  let totalQuestionsCount = questionArray.length;

  const data = [
    { name: "Questions unanswered", value: unAnwseredQuestionsCount },
    { name: "Questions answered correctly", value: correctAnswersCount },
    { name: "Questions answered incorrectly", value: wrongAnswersCount },
  ];

  let percentScore = (correctAnswersCount / totalQuestionsCount) * 100;
  let roundedPercentScore = Math.round(percentScore * 10) / 10;

  console.log(
    "correctAnswersCount:",
    correctAnswersCount,
    "\n",
    "wrongAnswersCount:",
    wrongAnswersCount,
    "\n",
    "unAnwseredQuestionsCount:",
    unAnwseredQuestionsCount,
    "\n",
    "roundedPercentScore:",
    `${roundedPercentScore}%`
  );

  return (
    <div>
      <div className="flex flex-col relative top-40 left-32 text-3xl font-medium">
        {/* <p>Percent Score</p> */}
        <p>{`${roundedPercentScore}%`}</p>
      </div>
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
          wrapperStyle={{ fontSize: "14px", paddingLeft: "10px" }}
        />
      </PieChart>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(DonutChart);

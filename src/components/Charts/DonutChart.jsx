import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { connect } from "react-redux";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
// import React, {useState, useEffect } from "react";
// import {
//   selectPastQuestionYear,
// } from "../../redux/actions/practiceQuestion";

const colors = [
  "#9ca3af", // ash  unanswered
  "#0D005F", //  blue correctly
  "#F14008", // lightOrange incorrectly
];

function DonutChart(props) {
  const { questionArray } = props.practiceQuestionReducer;
  const { width } = useWindowDimensions();
  //Beninging
  const { subject, year } = props.practiceQuestionReducer;

  // useEffect(() => {
  //   props.selectPastQuestionYear(year)
  // }, [])

  const untimedPracticeQuestions =
    props?.practiceQuestionReducer?.untimedPracticeQuestions;

  const yearOfBiologyUntimedQuestionArray = untimedPracticeQuestions?.filter(
    (item) =>
      item?.subject === subject &&
      item?.year == props?.practiceQuestionReducer?.year
  );

  const submittedQuestionArray =
    yearOfBiologyUntimedQuestionArray[0]?.submittedQuestionsAndAnswers;

  //Endinging

  let correctAnswers = submittedQuestionArray?.filter(
    (item) => item.userSelectedAnswer === item.answer
  );
  let wrongAnswers = submittedQuestionArray?.filter(
    (item) => item.userSelectedAnswer !== item.answer
  );
  // let unAnswered = questionArray?.filter((item) => !item.userSelectedAnswer);
  let unAnswered = questionArray?.filter((item) => !item.userSelectedAnswer);

  let correctAnswersCount = correctAnswers?.length;
  let wrongAnswersCount = wrongAnswers?.length;
  let unAnwseredQuestionsCount = unAnswered?.length;
  let totalQuestionsCount = questionArray?.length;

  const data = [
    { name: "Unanswered Questions", value: unAnwseredQuestionsCount },
    { name: "Questions answered correctly", value: correctAnswersCount },
    { name: "Questions answered incorrectly", value: wrongAnswersCount },
  ];

  let percentScore = (correctAnswersCount / totalQuestionsCount) * 100;
  let roundedPercentScore = Math.round(percentScore * 10) / 10;

  let valueOfroundedPercentScore = Boolean(roundedPercentScore);

  return (
    <div>
      {/* <div className="flex flex-col relative top-52 left-16 sm:left-28 text-2xl sm:text-3xl font-medium "> */}
        <div className="flex flex-col absolute top-44 left-16 sm:left-28 text-2xl sm:text-3xl font-medium ">
          {valueOfroundedPercentScore ? (
            roundedPercentScore !== Infinity ? (
              roundedPercentScore + "%"
            ) : (
              <span className="text-center">
                <svg
                  class="animate-spin ml-3 mb-1 h-5 w-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </span>
            )
          ) : (
            "0%"
          )}
     
      </div>
      <div
        className={`flex flex-row items-center sm:gap-14`}
      >
        <div className="flex flex-col items-center transform scale-50 sm:scale-100 -ml-20 sm:ml-0">
          <div className="sm:mb-4">
            <p className="sm:text-lg font-medium text-3xl">Percent Score</p>
          </div>
          <div className="">
            <PieChart height={297} width={270}>
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
                  <Cell key={index} fill={colors[index % colors?.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        <div className="flex items-center mt-4 -ml-12 sm:ml-0">
          <div className="flex flex-col gap-1">
            <div className="bg-grayEllipse text-white text-center font-semibold p-3.5  bg-center bg-no-repeat">
              {unAnwseredQuestionsCount}
            </div>

            <div className=" bg-blueEllipse text-white text-center font-semibold p-3.5  bg-center bg-no-repeat">
              {correctAnswersCount}
            </div>

            <div className="bg-orangeEllipse text-white text-center font-semibold p-3.5  bg-center bg-no-repeat">
              {wrongAnswersCount}
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="ml-3 whitespace-nowrap"> Unanswered {width > 640 && "Questions"}</div>
            <div className="ml-3 whitespace-nowrap">
              {width > 640 ? "Questions answered correctly" : "Correct"} 
            </div>
            <div className="ml-3 whitespace-nowrap">
              {width > 640 ? "Questions answered incorrectly" : "Incorrect"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(DonutChart);

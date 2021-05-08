import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { connect } from "react-redux";

const colors = [
  "#9ca3af", // ash  unanswered
  "#0D005F", //  blue correctly
  "#F14008", // lightOrange incorrectly

];

function DonutChart(props) {
  const { questionArray } = props.practiceQuestionReducer;

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
    { name: "Unanswered Questions", value: unAnwseredQuestionsCount },
    { name: "Questions answered correctly", value: correctAnswersCount },
    { name: "Questions answered incorrectly", value: wrongAnswersCount },
  ];

  let percentScore = (correctAnswersCount / totalQuestionsCount) * 100;
  let roundedPercentScore = Math.round(percentScore * 10) / 10;


  return (
    <div>
      <div className="flex flex-col relative top-52 left-28 text-3xl font-medium">
        <p>{`${roundedPercentScore}%`}</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-14">
        <div className=" flex flex-col items-center">
          <div className="mb-4">
            <p className="text-lg font-medium">Percent Score</p>
          </div>
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
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
       
          </PieChart>
        </div>

        <div>
          <div className="flex items-center mt-4">
            <div className="flex flex-col gap-1">
              <div className="bg-gray-400 rounded-3xl text-white  text-center font-semibold p-2  bg-center bg-no-repeat">
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
              <div className="ml-3">Unanswered Questions</div>
              <div className="ml-3">Questions answered correctly</div>
              <div className="ml-3">Questions answered incorrectly</div>
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

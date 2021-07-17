import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  setHasTakenPqBefore,
  fetchPracticeQuestion,
  fetchPracticeQuestionTimed,
} from "../../redux/actions/practiceQuestion";

function AnsweredBeforeContent(props) {
  const { questionArray, year, subject, questionType, isQuestionFetched } =
    props.practiceQuestionReducer;
  const { token } = props.loginReducer;

  const history = useHistory();

  const handleRetakeExam = () => {
    props.setHasTakenPqBefore(false);

    if ((questionType === "Timed")) {
      props.fetchPracticeQuestionTimed(
        {
          subject: subject,
          year,
          pastQuestionBody: "WAEC",
          practiceQuestionType: "Timed",
        },
        token
      );
    } else {
      props.fetchPracticeQuestion(
        { subject: subject.toLowerCase(), year },
        token
      );
    }
    history.push(`/pq/subject-${questionType.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center mb-24 pb-40 sm:pb-0">
      <div className="font-body flex flex-col gap-8 text-center mt-24 md:mt-16 px-6 sm:px-0">
        <p className="text-md sm:text-xl md:text-2xl font-body">
          You've answered {questionType} {year} {subject} Past Questions before
        </p>
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <h3 className="md:text-lg xl:text-xl pl-3">
              What do you want to do next?
            </h3>
          </div>
        </div>
        <div className="">
          <div className="pt-4 text-primary">
            <div className="flex flex-col max-w-lg mx-auto text-base xl:text-lg">
              <div className="flex gap-3 justify-center">
                <Link
                  to="/stats"
                  className="text-primary hover:text-primary p-2 font-mediu hover:underline"
                >
                  View Solutions
                </Link>
              </div>
              <div className="flex gap-3 justify-center">
                {/* <Link
                  to={`/pq/subject-${questionType.toLowerCase()}`}
                  className="text-primary hover:text-primary p-2 font-mediu hover:underline"
                  onClick={() => setHasTakenPqBefore(false)}
                >
                  Retake the Exam
                </Link> */}
                <div
                  className="text-primary hover:text-primary p-2 font-mediu hover:underline cursor-pointer"
                  onClick={handleRetakeExam}
                >
                  Retake the Exam
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <Link
                  to=""
                  className="text-primary hover:text-primary p-2 font-mediu hover:underline"
                >
                  Go to Home
                </Link>
              </div>
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
export default connect(mapStateToProps, {
  setHasTakenPqBefore,
  fetchPracticeQuestion,
  fetchPracticeQuestionTimed,
})(AnsweredBeforeContent);

import next from "../../static/dashboard_image/next.svg";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";

const UnsolvedQuestionsView = (props) => {
  const [limit, setLimit] = useState(3);
  let unsolvedQuestionList = props.unsolvedQuestions.slice(0, limit);
  return (
    <React.Fragment>
      <div className="col-5">
        <div className="careerBox unsolvedQues">
          <div className="row careerBoxTitleBox">
            <div className="col-10">
              <h3>Unsolved Questions</h3>

              <span>{props.unsolvedQuestions.length} questions remaining</span>
            </div>
            <div className="col-2 nextButtonbox" onClick={() => setLimit(props.unsolvedQuestions.length)}>
              <span className="nextBtn">
                <img src={next} />
              </span>
            </div>
          </div>
          <div className="unsolvedQuesContents">
            {unsolvedQuestionList.length > 0 ? (
              unsolvedQuestionList.map((unsolvedQuestion, index) => {
                return (
                  <div className="row unsolvedQuesContentsList" key={index}>
                    <div className="col-2 USImg">
                      <img src={unsolvedQuestion.studentImage} />
                    </div>
                    <div className="col-8 USContent">
                      <Link
                        href={{
                          pathname: "/posts",
                          query: {
                            id: unsolvedQuestion.questionId,
                            type: "unsolvedQuestion",
                          },
                        }}
                      >
                        <a>
                          {" "}
                          <span>{unsolvedQuestion.questionTitle}</span>
                          <br />
                        </a>
                      </Link>
                      <span className="USauthor">
                        Question By <strong>{unsolvedQuestion.studentName}</strong>
                      </span>
                    </div>
                    <div className="col-2 USTime">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <span>{moment(unsolvedQuestion.time).format("ddd, hA")}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h4>No Question Found!!</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UnsolvedQuestionsView;

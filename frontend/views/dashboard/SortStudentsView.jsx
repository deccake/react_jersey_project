import next from "../../static/dashboard_image/next.svg";
import React, { useState } from "react";
import user from "../../static/dashboard_image/user.png";

const SortStudentsView = (props) => {
  const [limit, setLimit] = useState(3);
  let studentList = props.student.slice(0, limit);
  return (
    <React.Fragment>
      <div className="col-4">
        <div className="careerBox studentsData">
          <div className="row careerBoxTitleBox">
            <div className="col-10">
              <h3>Students</h3>
              <span>{props.student.length} Students</span>
            </div>

            <div className="col-2 nextButtonbox" onClick={() => setLimit(props.student.length)}>
              <span className="nextBtn">
                <img src={next} />
              </span>
            </div>
          </div>
          <div>
            {studentList.length > 0 ? (
              studentList.map((studentObj) => {
                return (
                  <div className="row studnetContentsList">
                    <div className="col-3 USImg SImg">
                      <img src={user} />
                    </div>
                    <div className="col-6 USContent SContent">
                      <span>{studentObj.name}</span>
                      <br />
                      <span className="USauthor">
                        <strong>{studentObj.userName}</strong>
                      </span>
                      <br />
                      <span className="SclassNameHistory">
                        {studentObj.class}, <strong>{studentObj.subscribedSubject}</strong>
                      </span>
                    </div>
                    <div className="col-3 USTime SNumber">
                      <span>{studentObj.id}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <h4>No Student Found!!</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SortStudentsView;

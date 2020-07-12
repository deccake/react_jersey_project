import next from "../../static/dashboard_image/next.svg";
import React,{useState} from 'react';
let color = ["green", "pink", "orange", "blue", "red", "cyan", "yellow"];

const CareerCardView = (props) => {
  const [limit, setLimit] = useState(3);
  let careerCardList = props.careerCard.slice(0, limit);
  return (
    <React.Fragment>
      <div className="careerBox">
        <div className="row careerBoxTitleBox">
          <div className="col-8">
            <h3>Your Careers</h3>
            <span> Currently managing {props.careerCard.length} careers </span>
          </div>
          <div className="col-4 nextButtonbox" onClick={()=>setLimit(props.careerCard.length)}>
            <span className="nextBtn">
              <img src={next} />
            </span>
          </div>
        </div>
      </div>
      <div className="row careerBoxes">
        {careerCardList.length > 0 ? (
          careerCardList.map((itemObj, index) => {
            return (
              <React.Fragment key={index}>
                {" "}
                <div className="col-4 careerboxContent">
                  <div className="subjectCard" style={{ backgroundColor: color[index] }}>
                    <div className="totalStudentsBox clearfix">
                      <div className="TSdnt">
                        <span>
                          Total Students:
                          <br />
                          {itemObj.studentCount}
                        </span>
                      </div>
                      <div className="TSdntImg">
                        <span>
                          <img src={itemObj.subjectIcon} />
                        </span>
                      </div>
                    </div>
                    <div className="totalStdntBtmCnt">
                      <span>{itemObj.subjectName}</span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        ) : (
          <div >
            <h4>No Career Found!!</h4>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default CareerCardView;

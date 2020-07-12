import CareerCardView from "./CareerCardView";
import UnsolvedQuestionsView from "./UnsolvedQuestionsView";
import StudentPerformentceView from "./StudentPerformentceView";
import SortStudentsView from "./SortStudentsView";


const DashboardView = (props) => {
  return (
    <React.Fragment>
      <div className="mainDashboardContentBg">
        <div className="mainDashboardContent">
          <div className="mainContentBox">
            <div className="row">
              <div className="col-7">
                <CareerCardView  careerCard={props.careerCard} />
              </div>

              <UnsolvedQuestionsView
                unsolvedQuestions={props.unsolvedQuestions}
              />
            </div>
            <div className="row bottomSections">
              <StudentPerformentceView />

              <SortStudentsView student={props.students} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardView;

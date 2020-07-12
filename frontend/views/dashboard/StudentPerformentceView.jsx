import graph from '../../static/dashboard_image/graph.png'

const StudentPerformentceView = () => {
  return (
    <React.Fragment>
      <div className="col-8 graphSection">
        <div className="careerBox unsolvedQues">
          <img src={graph} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default StudentPerformentceView;

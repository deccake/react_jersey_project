import MentorScheduleView from "./MentorScheduleView";
import MentorProfileAnalysisView from "./MentorProfileAnalysisView";

const MentorProfileView = props => {
  return (
    <div className="rightSidebar">
      <MentorProfileAnalysisView member={props.member} />
      <MentorScheduleView />
    </div>
  );
};

export default MentorProfileView;

import AnswerBoxComponent from "./answer-box/answer-box.component";
import TeamAComponent from "./team/team-a/team-a.component";
import TeamBComponent from "./team/team-b/team-b.component";
import "./dashboard.stylesheet.css";

export default function DashboardComponent() {

  return (
    <>
      <div className="card">
        <div className="flex card-container indigo-container">
          <div className="flex-1 p-1 text-center">
            <TeamAComponent />
          </div>
          <div className="flex-grow-1 p-1 text-center">
            <h1>TEA TIME</h1>
            <AnswerBoxComponent />
          </div>
          <div className="flex-1 p-1 text-center">
            <TeamBComponent />
          </div>
        </div>
      </div>
    </>
  );
}

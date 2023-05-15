import React from "react";
import "./style.css";
import { deleteTeamRequest, getTeamsRequest } from "./middleware";

type Team = {
  id: string;
  name: string;
  promotion: string;
  url: string;
  members: string;
};
type Props = {
  loading: boolean;
  teams: Team[];
};
type Actions = {
  // deleteTeam: (id: string) => void;
  deleteTeam(id: string): void;
};

export function TeamsTable(props: Props & Actions) {
  return (
    <form id="editForm" action="" method="post" className={props.loading ? "loading-mask" : ""}>
      <table>
        <colgroup>
          <col span={1} style={{ width: "40px" }} />
          <col span={1} style={{ width: "125px" }} />
          <col span={1} />
          <col span={1} />
          <col span={1} />
          <col span={1} style={{ width: "81px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotions</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ id, url, promotion, members, name }) => {
            let displayUrl = url;
            if (url.startsWith("https://")) {
              displayUrl = url.substring(8);
            }
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" name="selected" value={id} />
                </td>
                <td>{promotion}</td>
                <td>{members}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank" rel="noreferrer">
                    {displayUrl}
                  </a>
                </td>
                <td>
                  <a
                    className="link-btn"
                    onClick={() => {
                      props.deleteTeam(id);
                    }}
                  >
                    ✖️
                  </a>
                  <a className="link-btn">✎</a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" id="promotion" placeholder={"Enter promotion"} required />
            </td>
            <td>
              <input type="text" name="members" id="members" placeholder="Enter members" required />
            </td>
            <td>
              <input type="text" name="project" id="project" placeholder="Enter project name" required />
            </td>
            <td>
              <input type="text" name="url" id="url" placeholder="project URL" required />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset">✖️</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
};
// < > daca folosim typescript -> ce prop foloseste, ce state foloseste
export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props: WrapperProps) {
    super(props);
    console.warn("constructor props", props);
    this.state = {
      loading: true,
      teams: []
    };
  }
  componentDidMount(): void {
    console.log("mount");
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await getTeamsRequest();
    this.setState({
      loading: false,
      teams: teams
    });
  }

  render() {
    console.log("render");
    return (
      <TeamsTable
        teams={this.state.teams}
        loading={this.state.loading}
        deleteTeam={async id => {
          console.warn("to do: please reemove this team", id);
          const status = await deleteTeamRequest(id);
          console.warn("status", status);
          this.loadTeams();
        }}
      />
    );
  }
}

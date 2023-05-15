import React from "react";
import "./style.css";

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

export function TeamsTable(props: Props) {
  console.warn("props", props);
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
                  <a data-id={id} className="link-btn remove-btn">
                    ✖️
                  </a>
                  <a data-id={id} className="link-btn edit-btn">
                    ✎
                  </a>
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
    setTimeout(() => {
      console.info("change loading");
      // @ts-ignore
      // this.state.loading = false;  // not working as is read only
      this.setState({
        loading: false,
        teams: [
          {
            id: "toze8j1610313009673",
            promotion: "html",
            members: "Nicolae Matei, HTML",
            name: "Web Presentation",
            url: "https://github.com/nmatei/web-intro-presentation"
          },
          {
            id: "ezabnf1630345987541",
            promotion: "css",
            members: "Nicolae",
            name: "Names",
            url: "https://github.com/nmatei/nmatei.github.io"
          },
          {
            id: "86mq81630347385708",
            promotion: "js",
            members: "Matei, Andrei",
            name: "JS/HTML/CSS Quiz",
            url: "https://github.com/nmatei/simple-quiz-app"
          },
          {
            id: "w2aal1630347411901",
            promotion: "js",
            members: "FastTrackIT Students, Nicolae",
            name: "Teams Networking",
            url: "https://github.com/nmatei/teams-networking"
          },
          {
            id: "w2aal1630347411902",
            promotion: "react",
            members: "FastTrackIT Students, Nicolae",
            name: "Teams Networking React",
            url: "https://github.com/nmatei/teams-networking-react"
          }
        ]
      });
    }, 5000);
  }
  render() {
    console.log("render");
    return <TeamsTable teams={this.state.teams} loading={this.state.loading} />;
  }
}

// export function TeamsTableWrapper() {
//   let teams: Team[] = [];
//   setTimeout(() => {
//     console.warn("timeout");
//     teams = [
//       {
//         id: "toze8j1610313009673",
//         promotion: "html",
//         members: "Nicolae Matei, HTML",
//         name: "Web Presentation",
//         url: "https://github.com/nmatei/web-intro-presentation"
//       },
//       {
//         id: "ezabnf1630345987541",
//         promotion: "css",
//         members: "Nicolae",
//         name: "Names",
//         url: "https://github.com/nmatei/nmatei.github.io"
//       },
//       {
//         id: "86mq81630347385708",
//         promotion: "js",
//         members: "Matei, Andrei",
//         name: "JS/HTML/CSS Quiz",
//         url: "https://github.com/nmatei/simple-quiz-app"
//       },
//       {
//         id: "w2aal1630347411901",
//         promotion: "js",
//         members: "FastTrackIT Students, Nicolae",
//         name: "Teams Networking",
//         url: "https://github.com/nmatei/teams-networking"
//       },
//       {
//         id: "w2aal1630347411902",
//         promotion: "react",
//         members: "FastTrackIT Students, Nicolae",
//         name: "Teams Networking React",
//         url: "https://github.com/nmatei/teams-networking-react"
//       }
//     ];
//   }, 2000);

//   // return TeamsTable({ teams: teams });

//   return (
//     <>
//       <TeamsTable teams={[]} loading={true} />
//       <hr />
//       <TeamsTable teams={[]} loading={false} />
//       <hr />
//       <TeamsTable teams={teams} loading={true} />
//       <hr />
//       <TeamsTable teams={teams} loading={false} />
//     </>
//   );
// }

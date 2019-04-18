import { Component } from "@angular/core";

@Component({
  selector: "app-github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"]
})
export class GithubFollowersComponent {
  followers = [
    {
      login: "SeaBassTian",
      id: 10586972,
      node_id: "MDQ6VXNlcjEwNTg2OTcy",
      avatar_url: "https://avatars3.githubusercontent.com/u/10586972?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/SeaBassTian",
      html_url: "https://github.com/SeaBassTian",
      followers_url: "https://api.github.com/users/SeaBassTian/followers",
      following_url:
        "https://api.github.com/users/SeaBassTian/following{/other_user}",
      gists_url: "https://api.github.com/users/SeaBassTian/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/SeaBassTian/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/SeaBassTian/subscriptions",
      organizations_url: "https://api.github.com/users/SeaBassTian/orgs",
      repos_url: "https://api.github.com/users/SeaBassTian/repos",
      events_url: "https://api.github.com/users/SeaBassTian/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/SeaBassTian/received_events",
      type: "User",
      site_admin: false
    },
    {
      login: "lfurzewaddock",
      id: 5821497,
      node_id: "MDQ6VXNlcjU4MjE0OTc=",
      avatar_url: "https://avatars2.githubusercontent.com/u/5821497?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/lfurzewaddock",
      html_url: "https://github.com/lfurzewaddock",
      followers_url: "https://api.github.com/users/lfurzewaddock/followers",
      following_url:
        "https://api.github.com/users/lfurzewaddock/following{/other_user}",
      gists_url: "https://api.github.com/users/lfurzewaddock/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/lfurzewaddock/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/lfurzewaddock/subscriptions",
      organizations_url: "https://api.github.com/users/lfurzewaddock/orgs",
      repos_url: "https://api.github.com/users/lfurzewaddock/repos",
      events_url: "https://api.github.com/users/lfurzewaddock/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/lfurzewaddock/received_events",
      type: "User",
      site_admin: false
    },
    {
      login: "yusijs",
      id: 11261560,
      node_id: "MDQ6VXNlcjExMjYxNTYw",
      avatar_url: "https://avatars0.githubusercontent.com/u/11261560?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yusijs",
      html_url: "https://github.com/yusijs",
      followers_url: "https://api.github.com/users/yusijs/followers",
      following_url:
        "https://api.github.com/users/yusijs/following{/other_user}",
      gists_url: "https://api.github.com/users/yusijs/gists{/gist_id}",
      starred_url: "https://api.github.com/users/yusijs/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yusijs/subscriptions",
      organizations_url: "https://api.github.com/users/yusijs/orgs",
      repos_url: "https://api.github.com/users/yusijs/repos",
      events_url: "https://api.github.com/users/yusijs/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yusijs/received_events",
      type: "User",
      site_admin: false
    },
    {
      login: "kiuka",
      id: 11283191,
      node_id: "MDQ6VXNlcjExMjgzMTkx",
      avatar_url: "https://avatars1.githubusercontent.com/u/11283191?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kiuka",
      html_url: "https://github.com/kiuka",
      followers_url: "https://api.github.com/users/kiuka/followers",
      following_url:
        "https://api.github.com/users/kiuka/following{/other_user}",
      gists_url: "https://api.github.com/users/kiuka/gists{/gist_id}",
      starred_url: "https://api.github.com/users/kiuka/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/kiuka/subscriptions",
      organizations_url: "https://api.github.com/users/kiuka/orgs",
      repos_url: "https://api.github.com/users/kiuka/repos",
      events_url: "https://api.github.com/users/kiuka/events{/privacy}",
      received_events_url: "https://api.github.com/users/kiuka/received_events",
      type: "User",
      site_admin: false
    }
  ];
  constructor() {}
}

var repos = {};

repos.all = [];

repos.requestRepos = function(callback) {
  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/users/mirandalily/repos?sort=updated',
    headers: { Authorization: 'token ' + githubToken}
  }).done(function(data) {
    repos.all = data;
  }).done(callback);
};

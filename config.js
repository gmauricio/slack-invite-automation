module.exports = {
  // your cummunity or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Manizales-dev',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'manizales-dev.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'slack_token'
};

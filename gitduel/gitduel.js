document.querySelector('#compare').addEventListener('click', function (event) {
  var username1 = document.querySelector('#username-1')
  var username2 = document.querySelector('#username-2')

  axios.all([
    axios.get('https://api.github.com/users/' + username1.value),
    axios.get('https://api.github.com/users/' + username2.value)
  ]).then(result => {
    var user1 = result[0].data
    var user2 = result[1].data
    console.log(result);

    compare(user1, user2)
    replace('user-1', user1)
    replace('user-2', user2)
  })
})

function compare (user1, user2) {
  user1.git_duel = {}
  user2.git_duel = {}

  if (user1.public_repos > user2.public_repos) {
    user1.git_duel.public_repos = true
  } else if (user1.public_repos < user2.public_repos) {
    user2.git_duel.public_repos = true
  }

  if (user1.followers > user2.followers) {
    user1.git_duel.followers = true
  } else if (user1.followers < user2.followers) {
    user2.git_duel.followers = true
  }
}

function replace (user, data) {
  var container = document.querySelector('#' + user)
  var avatar = container.querySelector('.avatar')
  var username = container.querySelector('.username')
  var name = container.querySelector('.name span')
  var repos = container.querySelector('.public-repos span')
  var followers = container.querySelector('.followers span')

  avatar.src = data.avatar_url
  username.textContent = data.login
  name.textContent = data.name
  repos.textContent = data.public_repos
  followers.textContent = data.followers

  if (data.git_duel.public_repos) repos.classList.add('text-success')
  if (data.git_duel.followers) followers.classList.add('text-success')
}

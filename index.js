
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Larissa Martinez' + ' ' + thisYear;
footer.appendChild(copyright);
var skills = ['JavaScript', 'HTML', 'CSS'];
var skillsSelection = document.getElementById('.skills');
var skillsList = skillsSelection.querySelector('ul');
var skills = ['JavaScript', 'HTML', 'CSS'];
for (var i = 0; i < skills.length; i++) {
  var skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
var messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var usersName = event.target.usersName.value;
  var usersEmail = event.target.usersEmail.value;
  var usersMessage = event.target.usersMessage.value;
  console.log('Name:', usersName);
  console.log('Email:', usersEmail);
  console.log('Message:', usersMessage);

  var messageSection = document.getElementById('.sentmessage');
  var messageList = messageSection.querySelector('ul');
  var messagesTitle = null; 

  if (!document.querySelector('.messages-title')) {
  messagesTitle = document.createElement('h2');
  messagesTitle.innerText = 'New Messages';
  messagesTitle.classList.add('messages-title'); 
  messageSection.insertBefore(messagesTitle, messageList);
  }

  var newMessage = document.createElement('li');
  newMessage.classList.add('message-item');
  newMessage.innerHTML = '<a href="mailto:' + usersEmail + '" style="color: #E20855;">' + "From: " + usersName + '</a> ' +
    '<span class="message-text">' + "<br>" + usersMessage + ' </span>';
  var removeButton = document.createElement('button');

  removeButton.classList.add('remove-button');

  removeButton.innerText = 'Remove';
  removeButton.type = 'button';
  removeButton.addEventListener('click', function () {
    var entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

/*
var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/larissamc1397/repos", true);

githubRequest.addEventListener("load", function () {
    if (githubRequest.status === 200) {
        var repositories = JSON.parse(githubRequest.response);
        console.log("GitHub Repositories:", repositories);

        var projectSection = document.getElementById("projects");
        var projectList = projectSection.querySelector("ul");

        for (var i = 0; i < repositories.length; i++) {
            var project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    }
});

githubRequest.send();
*/

fetch("https://api.github.com/users/larissamc1397/repos")
  .then(response => response.json())
  .then(repositories => {
    console.log("GitHub Repositories:", repositories);

    var projectSection = document.getElementById(".projects");
    var projectList = projectSection.querySelector("ul");

    for (var i = 0; i < repositories.length; i++) {
      var project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
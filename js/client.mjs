import { round1 , round2 } from "./finals.mjs";

function outputCard(student){
  return `
  <div class="card">
  <div class="topprofile">
    <h1 class="name">${student.name}</h1>
    <img class="profpic" src=${(student.links[0].imageLink.length) ? student.links[0].imageLink  : (student.name === "Lauren Kruger") ? `assets/images/${student.firstName}.jpg` : 'assets/images/this_is_fine.jpg'}   alt="pic">

  </div>
  <div class="info">
    <h3>${(student.tagline.length) ? student.tagline : 'insert tagline'}</h3>
  </div>
  <div class="links">
<p class="linking"><a href=${student.links[0].username}>Github!</a></p>
<p class="linking"><a href=${student.links[2].link}>Portfolio!</a></p>
</div>
    <hr>
  <div class="talents">
    <p><strong>Skills: </strong> ${student.skills.length ? student.skills.join(', ') : 'insert skills'}</p>
    <p><strong>Trophies:</strong> ${student.trophies.length ? `<span>${student.trophies.join(', ')}</span></p>` : `<i class="far fa-frown"></i>`}</p>
  </div>
</div>
  `
}

// Fetch implementation

// fetch('https://skulls-standings.herokuapp.com/api/v0/students/')
fetch('https://sait-wbdv.herokuapp.com/api/v0/students/')
.then(res => {
  return res.json();
})
.then(students => {
  let output = '';

  let cardGallery = document.querySelector('.grid-container');

  output += `<h2>Round 1: 9:30am</h2>`;

  round1.forEach( handle => {
    console.log(handle);
    let student = students.find(student => student.handle === handle);
    student.trophies = [];
    student.firstName = student.name.split(' ')[0].toLowerCase();

    student.achievements.forEach(achievement => {
      if (achievement.trophy) {
        student.trophies.push(achievement.name);
      }
    });

    output += outputCard(student)

  });
  cardGallery.innerHTML = output;
});
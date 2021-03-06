// Fetch implementation

fetch('https://sait-wbdv.herokuapp.com/api/v0/students/')
.then(res => {
  return res.json();
})
.then(students => {
  let output = '';

  students.forEach(student => {
    let cardGallery = document.querySelector('.grid-container');
    let trophies = [];
    let firstName = student.name.split(' ')[0].toLowerCase();

    student.achievements.forEach(achievement => {
      if (achievement.trophy) {
        trophies.push(achievement.name);
      }
    });

    output += `
    <div class="card">
    <div class="topprofile">
      <h1 class="name">${student.name}</h1>
      <img class="profpic" src=${(student.links[0].imageLink.length) ? student.links[0].imageLink  : (student.name === "Lauren Kruger") ? `assets/images/${firstName}.jpg` : 'assets/images/this_is_fine.jpg'}   alt="pic">

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
      <p><strong>Trophies:</strong> ${trophies.length ? `<span>${trophies.join(', ')}</span></p>` : `<i class="far fa-frown"></i>`}</p>
    </div>
  </div>
    `

    cardGallery.innerHTML = output;
  });
});
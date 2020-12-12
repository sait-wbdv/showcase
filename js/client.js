// Fetch implementation

fetch('https://skulls-standings.herokuapp.com/api/v0/students/')
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
      <img class="profpic" src="assets/images/${firstName}.jpg" alt="pic">

    </div>
    <div class="info">
      <h3>card extraordinaire</h3>
    </div>
    <div class="links">
 <p class="linking"><a href=${student.links[0].username}>Github!</a></p>
 <p class="linking"><a href=${student.links[3].url}>Portfolio!</a></p>
 </div>
      <hr>
    <div class="talents">
      <p><strong>Skills: </strong> Master of cards, lover of colour</p>
      <p><strong>Trophies:</strong> ${trophies.length ? `<span>${trophies.join(', ')}</span></p>` : `<i class="far fa-frown"></i>`}</p>
    </div>
  </div>
    `

    cardGallery.innerHTML = output;
  });
});
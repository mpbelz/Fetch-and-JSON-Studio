// TODO: add code here
// const init = () => {
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
//         response.json().then(json => {
//             let container = document.getElementById("container");
//             for (let astronaut of json) {
//                 container.innerHTML += `
//                 <article class="astronaut">
//                 <section class="bio">
//                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
//                    <ul>
//                       <li>Hours in space: ${astronaut.hoursInSpace}</li>
//                       <li>Active: ${astronaut.active}</li>
//                       <li>Skills: ${astronaut.skills}</li>
//                    </ul>
//                 </section>
//                 <section>
//                    <img class="avatar" src=${astronaut.picture}>
//                 </section>
//                 </article>
//                 `;
//             }
//         })
//     })
// };

const init = async () => {
    let response = await fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    );
    let json = await response.json();
    let container = document.getElementById("container");
    for (let astronaut of json) {
      container.innerHTML += `
            <article class="astronaut">
                <section class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li id="active-txt">Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills}</li>
                   </ul>
                </section>
                <section>
                   <img class="avatar" src=${astronaut.picture}>
                </section>
            </article>
            `;
    };
};

window.addEventListener("load", init);
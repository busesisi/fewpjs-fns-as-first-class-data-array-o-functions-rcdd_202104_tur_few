          function wakeDog(dogName, dogBreed) {
            console.log(`Wake ${dogName} the ${dogBreed}`);
            return `Wake ${dogName} the ${dogBreed}`;
          }
          function leashDog(dogName, dogBreed) {
            console.log(`Leash ${dogName} the ${dogBreed}`);
            return `Leash ${dogName} the ${dogBreed}`;
          }
          function walkToPark(dogName, dogBreed) {
            console.log(`Walk to the park with  ${dogName} the ${dogBreed}`);
            return `Walk to the park with ${dogName} the ${dogBreed}`;
          }
          function throwFrisbee(dogName, dogBreed) {
            console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
            return `Throw the frisbee for ${dogName} the ${dogBreed}`;
          }
          function walkHome(dogName, dogBreed) {
            console.log(`Walk home with ${dogName} the ${dogBreed}`);
            return `Walk home with ${dogName} the ${dogBreed}`;
          }
          function unleashDog(dogName, dogBreed) {
            console.log(`Unleash ${dogName} the ${dogBreed}`);
            return `Unleash ${dogName} the ${dogBreed}`;
          }

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
//let routine = [wakeDog(dogName,dogBreed), leashDog(dogName,dogBreed), walkToPark(dogName,dogBreed),throwFrisbee(dogName,dogBreed),walkHome(dogName,dogBreed),unleashDog(dogName,dogBreed)];


function exerciseDog (dogName, dogBreed) {
<<<<<<< HEAD
let message = [];
=======

>>>>>>> b55a7618fb392c57ccc433ab3ecaf82b0cf451a1
for (let i = 0; i < routine.length; i++) {

    //routine[i]();
    //return routine[i];
<<<<<<< HEAD
    message.push(routine[i](dogName,dogBreed));

}
return message;
=======
    routine[i](dogName,dogBreed);

}
>>>>>>> b55a7618fb392c57ccc433ab3ecaf82b0cf451a1
}

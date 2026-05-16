const name = "Francesco Grienti"
const email = "francescogrienti99@gmail.com"
const location = {
  it: "Gallarate, Italia",
  en: "Gallarate, Italy"
}
const age = () => {
  var today = new Date();
  var birthDate = new Date(1999, 10, 6);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const aboutme = {
  it: "Ciao! Sono uno sviluppatore appassionato di tecnologia.",
  en: "Hi! I'm Francesco, an italian physicist who recently got passionate about IT and computer science related stuff (although I do not forget where I come from!). In fact, my background resides in the physics of complex systems and I recently graduated with a thesis focused on Vision Transformers applied to crystal nucleation investigation. Since I've always been a curious person, various activities were able to get my attention letting me deeply dive into them, and in the last couple of years computer science, programming and IT technologies strongly hit me. I'm basically a real beginner and I still have a lot to learn, therefore suggestions and feedbacks are well-appreciated!"
}


export { name, email, location, age, aboutme }
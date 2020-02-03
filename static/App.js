
const imageContent = document.getElementById('image');

const imageComponent = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Chintan Bhadrecha"
  ),
  React.createElement("img", { alt: "react logo", src: "headshot.jpg" }),
  React.createElement(
    "p",
    null,
    "I am Chintan Bhadrecha, currently pursuing masters in Computer Science from San Diego State University. I have dream of becoming technical architect at a reputed company.",
    React.createElement("br", null),
    "I am a patient, hardworking and dedicated person. I believe in maintaining positive environment around me to build a healthy community.",
    React.createElement("br", null),
    "I have completed undergraduation from Mumbai university with courses such as Operating Systems, Object Oriented Programming Methodology, Data Structures etc.",
    React.createElement("br", null),
    "I have worked on some academic projects like Diagnosis of Diabetic Retinopathy using Deep Learning, Live GPS tracking, Personality predictor using social media and machine learning,",
    React.createElement("br", null),
    "Event planner application, Basic utility application. Apart from curriculum, I have supervised as a coach for First Robotics Competition at Robofun labs,",
    React.createElement("br", null),
    "where I led team of 5 students to offer them direction and guidance with the purpose of learning aspects of robotics.",
    React.createElement("br", null),
    "Also successfully helped the team to come up with 80% efficient solution. With this experience I worked as the Vice President at Robotics club at Watumull college of Engineering."
  )
);
ReactDOM.render(imageComponent, imageContent);
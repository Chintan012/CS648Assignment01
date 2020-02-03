
const imageContent = document.getElementById('image');



class Home extends React.Component {
    render() {
        return (
<div>
                  <header>Chintan Bhadrecha</header>
                  <img alt="react logo"  src="headshot.jpg"  />
                        <p>I am Chintan Bhadrecha, currently pursuing masters in Computer Science from San Diego State University.
                          I have dream of becoming technical architect at a reputed company.<br/>
                           I am a patient, hardworking and dedicated person.
                            I believe in maintaining positive environment around me to build a healthy community.<br/>
                   I have completed undergraduation from Mumbai university with courses such as Operating Systems,
                    Object Oriented Programming Methodology, Data Structures etc.<br/>
                     I have worked on some academic projects like Diagnosis of Diabetic Retinopathy using Deep Learning,
                      Live GPS tracking, Personality predictor using social media and machine learning,<br/>
                      Event planner application, Basic utility application.
                    Apart from curriculum, I have supervised as a coach for First Robotics Competition at Robofun labs,<br/>
                     where I led team of 5 students to offer them direction and guidance with the purpose of learning aspects of robotics.<br/>
                      Also successfully helped the team to come up with 80% efficient solution. With this experience I worked as the Vice President
                        at Robotics club at Watumull college of Engineering.</p>
                        <p>
                        <button> <a href="https://github.com/Chintan012/CS648Assignment01.git" target="_blank">VIEW MY GITHUB REPO</a></button>
                        </p>
                      </div>
                    );
}
}
ReactDOM.render(<Home />, imageContent);

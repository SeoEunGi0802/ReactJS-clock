//import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyClock from './MyClock';
//import ParticlesBg from 'particles-bg';
//import SnowStorm from 'react-snowstorm';
// import Board from './board';

// let config = {
//   num: [4, 7],
//   rps: 0.1,
//   radius: [5, 40],
//   life: [1.5, 3],
//   v: [2, 3],
//   tha: [-40, 40],
//   alpha: [0.6, 0],
//   scale: [.1, 0.4],
//   position: "all",
//   color: ["random", "#ff0000"],
//   cross: "dead",
//   // emitter: "follow",
//   random: 15
// };

// if (Math.random() > 0.85) {
//   config = Object.assign(config, {
//     onParticleUpdate: (ctx, particle) => {
//       ctx.beginPath();
//       ctx.rect(
//         particle.p.x,
//         particle.p.y,
//         particle.radius * 2,
//         particle.radius * 2
//       );
//       ctx.fillStyle = particle.color;
//       ctx.fill();
//       ctx.closePath();
//     }
//   });
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <MyClock text="시계 1번" zone="Asia/Seoul" color="RED" />
        <MyClock text="시계 2번" zone="Europe/London" color="ORANGE" />
        <MyClock text="시계 3번" zone="Africa/Cairo" color="YELLOW" />
        <MyClock text="시계 4번" zone="Antarctica/Vostok" color="GREEN" />
        <MyClock text="시계 5번" zone="Antarctica/Troll" color="BLUE" />
        {/* <SnowStorm /> */}
        {/* <ParticlesBg type="custom" config={config} bg={true} /> */}
      </div>
    )
  }
}

export default App;

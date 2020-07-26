import React from 'react';
import './ProfileData.scss';

export function ProfileData() {
  return (
   <div className="profile-data">
      <h1>Q21 Sport Fitness ® (desde <span role="img" aria-label="home">🏡</span>)</h1>
      <span role="img" aria-label="emoji">▪Entrenamiento PERSONALIZADO📲
        <br />▪Clases en directo por <a href="https://google.com">#ZOOM</a>
        <br />🏋🏻&zwj;♀️ID de reunión: 660 556 2744
        <br />👇🏼<a href="https://google.com">#Q21ONLINE</a>
      </span>
      <a className="page-link" href="https://google.com">bit.ly/3f8avN9</a>
      <span className="followers"><span className="follower">leandrogallippi</span>, <span className="follower">matiasalibertti</span>, <span className="follower">pabloduranti</span> y 10 personas más siguen esta cuenta</span>
    </div>
  );
}
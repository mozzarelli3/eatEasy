import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div class="menuLogo">
          <a href="?">
            <img src="assets/menuIcon.png" />
          </a>
          <img src="assets/blackLogo.png" />
        </div>
        <p class="slogan">The safer way to eat</p>
      </header>
      <main>
        <section class="info">
          <h2>
            Struggling to find a restaurant that caters to your dietary
            requirements?
          </h2>
          <h2></h2>
          <p>It's as easy as 1, 2, 3</p>
          <p id="1">Enter your location</p>
          <p id="2">Choose your preferences using our handy filters</p>
          <p id="3">Enjoy your food!</p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

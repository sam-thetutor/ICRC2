import { html, render } from 'lit-html';
import { ICRC2_backend } from 'declarations/ICRC2_backend';
import logo from './logo2.svg';

class App {
  greeting = '';

  constructor() {
    this.#render();
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    this.greeting = await ICRC2_backend.greet(name);
    this.#render();
  };

  #render() {
    const template = html`
      <header>
        <nav>
          <div class="container">
            <h1 class="logo">Fisi Inu</h1>
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <section class="hero">
          <div class="container">
            <h2>Welcome to Fisi Inu</h2>
            <p>The next big meme coin in the crypto world!</p>
            <a href="#tokenomics" class="btn">Learn More</a>
          </div>
        </section>
      </header>

      <section id="about">
        <!-- About section content goes here -->
      </section>

      <section id="tokenomics">
        <!-- Tokenomics section content goes here -->
      </section>

      <section id="roadmap">
        <!-- Roadmap section content goes here -->
      </section>

      <section id="team">
        <!-- Team section content goes here -->
      </section>

      <section id="faq">
        <!-- FAQ section content goes here -->
      </section>

      <section id="contact">
        <!-- Contact section content goes here -->
      </section>

      <footer>
        <div class="container">
          <p>&copy; 2024 Fisi Inu. All rights reserved.</p>
        </div>
      </footer>
    `;

    render(template, document.getElementById('root'));
    document.querySelector('form').addEventListener('submit', this.#handleSubmit);
  }
}

export default App;

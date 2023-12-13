@import url("https://fonts.googleapis.com/css?family=Roboto");

:root {
  --primary-color: #003699;
  --dark-color: #333333;
  --light-color: #f4f4f4;
  --lose-color: #dc3545;
  --win-color: #28a745;
  --modal-duration: 1s;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  
  color: #333;
}

.form-group{
  display: flex;
  justify-content: center;
}

.form-item {
  margin: 20px;
}



.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-btn,
.restart-btn {
  border: 2px solid black;
  background-color: #ffc107;
  padding: 6px;
  font-weight: 600;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
  height: 80vh;
  
}

.header {
  text-align: center;
  margin: 1rem 0;
}

.header h2 {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: monospace;
}

.score {
  font-size: 1.2rem;
  font-family: monospace;
  color: black;
}

.score p {
  font-size: 20px;
}

.choices {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
  text-align: center;
}

.choice {
  cursor: pointer;
}

.choice:hover {
  color: var(--primary-color);
}

.game-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.scoreBoardL {
  border: 2px solid #000;
  border-radius: 5px;
}

.modal-content img {
  margin: 0 auto;
}

.game-img {
  width: 150px;

  margin-bottom: 20px;
}

.text-win {
  color: var(--win-color);
}

.text-lose {
  color: var(--lose-color);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #fff;
  text-align: center;
  margin: 10% auto;
  width: 350px;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
}

.modal-content h1 {
  margin-bottom: 1rem;
}

.modal-content p {
  font-size: 1.2rem;
  margin-top: 1rem;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .choice {
    font-size: 110px;
  }
}

@media (max-width: 500px) {
  .choice {
    font-size: 80px;
  }
}

header .navbar-brand {
  height: 150px;
}

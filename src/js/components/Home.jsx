import React from 'react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Jumbotron/Hero Component
const Jumbotron = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
            </p>
            <button className="btn btn-primary btn-lg">Call to action!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component (reusable with props)
const Card = ({ title, text, buttonText, buttonLink }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img 
          src="https://via.placeholder.com/500x325?text=500+x+325" 
          className="card-img-top" 
          alt="Card image"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{text}</p>
          <div className="mt-auto">
            <a href={buttonLink} className="btn btn-primary">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">Copyright © Your Website 2023</p>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  // Card data to demonstrate DRY principle
  const cardData = [
    {
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      buttonText: "Find Out More!",
      buttonLink: "#"
    },
    {
      title: "Card title", 
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More!",
      buttonLink: "#"
    },
    {
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      buttonText: "Find Out More!",
      buttonLink: "#"
    },
    {
      title: "Card title",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae.",
      buttonText: "Find Out More!",
      buttonLink: "#"
    }
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <Jumbotron />
        
        {/* Cards Section */}
        <div className="container my-5">
          <div className="row">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
            ))}
          </div>
        </div>
        
        <Footer />
      </div>

      {/* Bootstrap JS CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Home;
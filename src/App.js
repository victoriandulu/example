import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
  <h1>Contact Us</h1>
  <form target="_blank" action="https://formsubmit.co/judyvicm1@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input 
          type="text" 
          name="name" 
          class="form-control" 
          placeholder="Full Name" required/>
        </div>
        <div class="col2">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
       
    </div>
    <div class="message">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
 </div>
      </div>
  </form>
</div>
  );
}

export default App;

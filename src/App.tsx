import './App.css';
import User from './components/User';

function App() {

  return (
    <>
      <h1>Users List</h1>

      <br />

      {/* In here I can create various user components layouts with one reusable one main component */}

      <User>
        <User.Id>1</User.Id>
        <User.Name>Jeral Sandeeptha</User.Name>
        <User.Email>jeral.sandeeptha1@gmail.com</User.Email>
        <User.Company>Virtusa Pvt Ltd.</User.Company>
      </User>

      <br />
      
      <User>
        <User.Name>Jeral Sandeeptha</User.Name>
        <User.Company>Virtusa Pvt Ltd.</User.Company>
      </User>

      <br />

      <User>
        <div>
          <User.Id>1</User.Id>
          <User.Name>Jeral Sandeeptha</User.Name>
        </div>
        <User.Email>jeral.sandeeptha1@gmail.com</User.Email>
        <User.Company>Virtusa Pvt Ltd.</User.Company>
      </User>

      <br />
      
      <User>
        <User.Company>Virtusa Pvt Ltd.</User.Company>
        <User.Email>jeral.sandeeptha1@gmail.com</User.Email>
        <div>
          <User.Id>1</User.Id>
          <User.Name>Jeral Sandeeptha</User.Name>
        </div>
      </User>

      <br />
      
      <User>
        <User.Company>Virtusa Pvt Ltd.</User.Company>
        <User.Email>jeral.sandeeptha1@gmail.com</User.Email>
        <div style={{ display: 'flex' }}>
          <User.Id>1</User.Id>
          <User.Name>Jeral Sandeeptha</User.Name>
        </div>
      </User>

      <br />

      <User>
        <User.Id>1</User.Id>
        <User.Name>Jeral Sandeeptha</User.Name>
        <div style={{ display: 'flex', gap: '50px' }}>
          <User.Email>jeral.sandeeptha1@gmail.com</User.Email>
          <User.Company>Virtusa Pvt Ltd.</User.Company>
        </div>
      </User>
    </>
  );

}

export default App;
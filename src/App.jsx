import { useState } from "react";

const App = () => {
  const [fields, setFeilds] = useState({num1:"", num2:"", result:""});
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // if(name === "num1"){
    //     setFeilds({...fields, num1:value })
    // }
    // if(name === "num2"){
    //     setFeilds({...fields, num2:value })
    // }


    // we can do same thing in shorter way
    setFeilds({...fields, [name]:value})
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let sum = Number(fields.num1) + Number(fields.num2) ;
    
    setFeilds({...fields, result:sum})
  
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="num1">Enter first number:</label><br />
        <input type="text" name="num1" onChange={onChangeHandler} value={fields.num1} required /> <br />
        <label htmlFor="num2">Enter Second Number: </label> <br />
        <input type="text" name="num2" onChange={onChangeHandler}  value={fields.num2} required/> <br />
        <button type="submit">Add</button><br />
       
        {/* <input className="result" type="text" name="result" onChange={onChangeHandler}  value={fields.result}/> <br /> */}
        
      </form>
      <p>Result: {fields.result}</p>
    </>
  );
};

export default App;

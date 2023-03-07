import React,{useState} from 'react'

export default function Calculator() {

    const[result,setResult]= useState('');

    const clickHandler = (event)=>{
        setResult(result.concat(event.target.value))
    }

    const clear=()=>{
        setResult('');
    }
    const backspace=()=>{
        setResult(result.slice(0,-1));
    }
    const calculate=()=>{
        try{

            setResult(eval(result).toString());
        }catch(err){
            setResult('error')
        }
    }

  return (
    <>
        <div className="container">
        <div className="calculator">
          <form action>
            <div className="display">
              <input type="text" name="display" value={result} />
            </div>
            <div>
              <input type="button" value="AC" id='clear' onClick={clear} className="operator" />
              <input type="button" value="DE" id='backspace' onClick={backspace} className="operator" />
              <input type="button" value="." onClick={clickHandler}className="operator" />
              <input type="button" value="/" onClick={clickHandler} className="operator" />
            </div>
            <div>
              <input type="button" value='7' onClick={clickHandler} />
              <input type="button" value={8} onClick={clickHandler} />
              <input type="button" value={9} onClick={clickHandler}/>
              <input type="button" value="*" onClick={clickHandler}className="operator" />
            </div>
            <div>
              <input type="button" value={4} onClick={clickHandler} />
              <input type="button" value={5} onClick={clickHandler} />
              <input type="button" value={6} onClick={clickHandler} />
              <input type="button" value="-" onClick={clickHandler} className="operator" />
            </div>
            <div>
              <input type="button" value={1} onClick={clickHandler} />
              <input type="button" value={2} onClick={clickHandler} />
              <input type="button" value={3} onClick={clickHandler} />
              <input type="button" value="+" onClick={clickHandler} className="operator" />
            </div>
            <div>
              <input type="button" value="00" onClick={clickHandler} />
              <input type="button" value={0} onClick={clickHandler} />
              <input type="button" value="=" className="equal operator" onClick={calculate} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

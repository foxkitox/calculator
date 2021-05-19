import React,{useState} from 'react'

const Calculator = () => {

    
    const [numero,setNumero] = useState('0')
    const [cadena,setCadena] = useState('')

    const clear = () => {
        
        setNumero(0)
        setCadena('')
    }

    const concatenar = (e) =>{
        
        if(e ==='.'){
            const valor = document.getElementById('display').value
            const punto = new RegExp(/\./)
            punto.test(valor) ? e=''  : e='.'
        }
        //if(numero == '0' && e ==='0'){
        if(document.getElementById('display').value === '0' && e ==='0'){    
           e = ''
        }else if(document.getElementById('display').value === '0' && e !== '0'){
            
            e ==='.' ? setNumero(numero + e) : setNumero(e)
        }else{
            setNumero(numero + e)
        }
            
        

    }
     
    
    const operar = (e) => {
        
        if(e === 'ENTER'){
            if(cadena!=='0'){    
                
                // eslint-disable-next-line no-eval
                setNumero(eval(cadena + document.getElementById('display').value))
                setCadena('')    
            }
        }else{
            if(document.getElementById('display').value !== '0'){
                setCadena(cadena + document.getElementById('display').value + e) 
                setNumero('0')
            }else{
                
                if(e !=='-'){
                   const inter = cadena.replace(/(\*|\/|\+|-)+/gi,e)
                    setCadena(inter)
                }else{
                    if(cadena.charAt(cadena.length-1)!=='-')
                        setCadena(cadena + e)
                }
            }
        }
        
        
    }

    return (
        <div className="App-header">
            
            <div className="row">
                <div className="col">
                    <p>{cadena}</p>
                    <input type="text" name="" id="display" value={numero}/> 
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={() => clear()} id="clear" value="CE">CE</button>
                    <button className="btn btn-primary" onClick={(e) => operar(e.target.value)} id="divide" value="/">/</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="seven" value="7">7</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="eight" value="8">8</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="nine" value="9">9</button>
                    <button className="btn btn-primary" onClick={(e) => operar(e.target.value)} id="multiply" value="*">*</button>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="four" value="4">4</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="five" value="5">5</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="six" value="6">6</button>               
                    <button className="btn btn-primary" onClick={(e) => operar(e.target.value)} id="subtract" value="-">-</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="one" value="1">1</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="two" value="2">2</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="three" value="3">3</button>
                    <button className="btn btn-primary" onClick={(e) => operar(e.target.value)} id="add" value="+">+</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="zero" value="0">0</button>
                    <button className="btn btn-primary" onClick={(e) => concatenar(e.target.value)} id="decimal" value=".">.</button>
                    <button className="btn btn-primary" onClick={(e) => operar(e.target.value)} id="equals" value="ENTER">=</button> 
                </div>
                
            </div>
            
           
            
        </div>
    )
}

export default Calculator

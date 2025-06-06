function C1()
{
    function f1()
    {
        let t1=document.getElementById("t1");
        let t=t1.value;
        let n=t.length;
        if(n>0)
        {
             let t2=t.substring(0,n-1);
             t1.value=t2;
        }
    }
    function f2()
    {
        let t1=document.getElementById("t1");
        t1.value="";
    }
    function f3()
    {
        let t1=document.getElementById("t1");
        let y1=t1.value;
        let y2=eval(y1);
        t1.value=y2;
    }
    function digitClick(e)
    {
        let b=e.target; 
        let s=b.innerHTML;
        let t1=document.getElementById("t1");
        let s1=t1.value;
        t1.value=s1+s;
    }
    function f4(e)
    {
        
        let t1=document.getElementById("t1");
        let x1=Math.sqrt(t1.value);
        t1.value=x1;
    }
    function f5()
    {
        let t1=document.getElementById("t1");
        let x1=Math.sin(t1.value);
        t1.value=x1;
    }
    function f6()
    {
        let t1=document.getElementById("t1");
        let x1=Math.cos(t1.value);
        t1.value=x1;   
    }
    function f7()
    {
        let t1=document.getElementById("t1");
        let x1=Math.tan(t1.value);
        t1.value=x1;
    }
    function f8()
    {
        let t1=document.getElementById("t1");
        let x1=Math.log(t1.value);
        t1.value=x1;
    }
    function f9()
    {
        let t1=document.getElementById("t1");
        let x1=Math.log10(t1.value);
        t1.value=x1;
    }
    function f10()
    {
        let t1=document.getElementById("t1");
        let x1=Math.ln(t1.value);
        t1.value=x1;
    }
    function f11()
    {
        let t1=document.getElementById("t1");
    }
    return(        
        <table align="center" border='0' style={{border:'solid 1px #022D36E', backgroundColor:'#022D36', borderRadius:'10px', marginTop:'79px', boxShadow:'8px 8px black'}}width={200}>
            <tbody>
            <thead>
            <tr><td colSpan="5">
                <input type="text" id="t1" style={{backgroundColor:'white', borderRadius:'0px 20px 0px 20px', width:'550px', height:'50px', fontSize:'33px', fontFamily:'revert', textAlign:'right', border:'2px'}}/>
            </td></tr>
            <br/>
            <tr>
                <td><button type="button" value="Sin" onClick={f5} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>Sin</button></td>
                <td><button type="button" value="sqrt" onClick={f4} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>&#x221A;</button></td>
                <td><button type="button" value="+/-" style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>+/-</button></td>
                <td><button type="button" value="C" onClick={f1} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>C</button></td>
                <td><button type="button" value="AC" onClick={f2} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#7393B3',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>AC</button></td>
            </tr>
            <tr>
                <td><button type="button" value="Cos" onClick={f6} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>Cos</button></td>
                <td><button type="button" value="1/x" style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>1/x</button></td>
                <td><button type="button" value="x*y" onClick={f11} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>X<sup>y</sup></button></td>
                <td><button type="button" value="%" style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>%</button></td>
                <td><button type="button" value="/" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black', border:'10px', boxShadow:'4px 4px black'}}>/</button></td>
            </tr>
            <tr>
                <td><button type="button" value="Tan" onClick={f7} style={{width:'100px', height:'50px',fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>Tan</button></td>
                <td><button type="button" value="7" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>7</button></td>
                <td><button type="button" value="8" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>8</button></td>
                <td><button type="button" value="9" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>9</button></td>
                <td><button type="button" value="*" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>*</button></td>
            </tr>
            <tr>
                <td><button type="button" value="log" onClick={f8} style={{width:'100px', height:'50px' ,fontSize:'15px', backgroundColor:'#22815B',color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>log</button></td>
                <td><button type="button" value="4" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>4</button></td>
                <td><button type="button" value="5" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>5</button></td>
                <td><button type="button" value="6" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>6</button></td>
                <td><button type="button" value="-" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>-</button></td>
            </tr>
            <tr>
                <td><button type="button" value="log10" onClick={f9} style={{width:'100px', height:'50px', backgroundColor:'#22815B',fontSize:'15px', color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>log<sub>10</sub></button></td>
                <td><button type="button" value="1" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>1</button></td>
                <td><button type="button" value="2" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>2</button></td>
                <td><button type="button" value="3" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>3</button></td>
                <td><button type="button" value="+" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>+</button></td>
            </tr>
            <tr>
                <td><button type="button" value="ln" onClick={f10} style={{width:'100px', height:'50px', backgroundColor:'#22815B',fontSize:'15px', color:'ivory', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>ln</button></td>
                <td><button type="button" value="0" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>0</button></td>
                <td><button type="button" value="00" onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>00</button></td>
                <td><button type="button" value="." onClick={digitClick} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#22815B', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>.</button></td>
                <td><button type="button" value="=" onClick={f3} style={{width:'100px', height:'50px',fontSize:'15px', color:'ivory', backgroundColor:'#7393B3', borderRadius:'50%', border:'10px', boxShadow:'4px 4px black'}}>=</button></td>
            </tr>
            </thead>
            </tbody>
        </table>        
    );
}   
export default C1;
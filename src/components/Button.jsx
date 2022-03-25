// import styled ,{css} from 'styled-components/macro';
// const Button = styled.button`
//     font-size: 1rem;
//     text-align:center;

    
//      color:${({children})=> children==="Default"?"white":"black"};
//     background-color:${({children})=>{
//              return children ==='Default'?"black":children==='Primary'?"green":'red'}};  

// `
// export {Button}
import styled ,{css} from 'styled-components/macro';
const Button = styled.button`
    font-size: 1rem;
    text-align:center;

    ${
        ({Primary})=> Primary && css`
                    background-color: blue;
                    color:white;
                    
        `
    }
    ${
        ({Default})=> Default && css `
                    background-color: green;
                    color:white;
                    

        `
    }
    ${
        ({Warning})=> Warning && css `
                    background-color: red;
                    color:white;
                    

        `
    }

`
export {Button}
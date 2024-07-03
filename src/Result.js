function Result({secretNum,term}){
    let result;
    if(term){
        if(term>secretNum){
            result="Higher";
        }else if(term <secretNum){
            result = "Lower"
        }else if(term == secretNum){
            result = "Yes!! Correct🥳"
        }else{
            result='Enter correct value'
        }
    }
    
    return <h3>You Guessed :{result} </h3>
}
export default Result
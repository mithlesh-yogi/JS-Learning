const inupts = document.querySelector('.button');

inupts.addEventListener('click',function(e){
    e.preventDefault()

    const height = parseInt((document.querySelector('#height').value))
    const weight = parseInt((document.querySelector('#weight').value))
    const results = document.querySelector('.results')
    if(height<0||height===''|| isNaN(height)){
        results.innerHTML = `not a valid height ${height}`
        
    }else if(weight<0||weight===''|| isNaN(weight)){
        results.innerHTML = `not a valid weight ${weight}` 
    } else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        if(bmi<18.5){   
            results.innerHTML = `<span>${bmi}</span> <br> You are underweight`
        }else if(bmi>=18.5 && bmi<25){
            results.innerHTML = `<span>${bmi}</span> <br> You have a normal weight`
        }else{
            results.innerHTML = `<span>${bmi}</span> <br> You are overweight`
        }
    }
    

})
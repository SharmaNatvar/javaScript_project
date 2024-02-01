const inputdata = document.querySelectorAll('.box input')

// console.log(inputdata);

function handleInput(){
    console.log(this.value);
    const suf = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suf)
}


inputdata.forEach(input => input.addEventListener('change' , handleInput))
inputdata.forEach(input => input.addEventListener('mousemove' , handleInput))
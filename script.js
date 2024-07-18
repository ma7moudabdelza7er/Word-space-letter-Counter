let textInput = document.querySelector(".text-input");
let spaceCount = document.querySelector(".space-count")
let wordCount = document.querySelector(".word-count")
let LetterCount = document.querySelector(".letter-count")

textInput.addEventListener("input",function(e){
    value = e.target.value
    numSpace=value.match(/\s/g)
    numChars = value.match(/([a-z\w]|[^a-z\w\s])/ig)
    if(numSpace == null){
        spaceCount.innerHTML = 0
    }else{
        
        spaceCount.innerHTML = numSpace.length
    }
    if(numChars == null){
        LetterCount.innerHTML = 0
    }else{
        LetterCount.innerHTML = numChars.length
    }
    // console.log(value.match(/[a-z]{2,}/ig).length)
   wordCount.innerHTML = value.split(" ").length
})
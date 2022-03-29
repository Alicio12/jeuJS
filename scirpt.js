

$(document).ready(function () {

    let randomNumberOne = Math.floor(Math.random() * 6) +1;
        console.log(randomNumberOne)

    var scorePlayerOne = 0;
        document.getElementById("sumOne").innerHTML=scorePlayerOne;

    $("#formUserOne").on("submit" , function(e){
        e.preventDefault()
        let input = $("input[type=text]")

        let userOneValue = parseInt(input.val())
        if(randomNumberOne !== userOneValue){
            input.val("")
            console.log("perdu")
        }
        if(randomNumberOne === userOneValue){
            console.log("gagné")
            ++scorePlayerOne
            console.log(scorePlayerOne)
            document.getElementById("sumOne").innerHTML=scorePlayerOne;
            input.val("")
            randomNumberOne = Math.floor(Math.random() * 6) +1;
                console.log(randomNumberOne)

        }
    })

    let randomNumberTwo = Math.floor(Math.random() * 6) +1;
        console.log(randomNumberTwo)

    var scorePLayerTwo = 0;
        document.getElementById("sumTwo").innerHTML=scorePLayerTwo;

    $("#formUserTwo").on("submit" , function(e){
        e.preventDefault()
        let input = $("input[type=text]")

        let userTwoValue = parseInt(input.val())
        if(randomNumberTwo !== userTwoValue){
            input.val("")
            console.log("perdu")
        }
        if(randomNumberTwo === userTwoValue){
            console.log("gagné")
            ++scorePLayerTwo
            console.log(scorePLayerTwo)
            document.getElementById("sumTwo").innerHTML=scorePLayerTwo;
            input.val("")
            randomNumberTwo = Math.floor(Math.random() * 6) +1;
                console.log(randomNumberTwo)

        }
    })

    $("#refresh").on("click", function() {
        location.reload();
    })
})
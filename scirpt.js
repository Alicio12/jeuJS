var scorePlayerOne = 0;
    document.getElementById("sumOne").innerHTML=scorePlayerOne;
var scorePLayerTwo = 0;
    document.getElementById("sumTwo").innerHTML=scorePLayerTwo;

var randomNumer = Math.floor((Math.random() * 10) + 1);

$(document).ready(function(){   //assure que jquery est prêt

    $("#formUserOne").on("submit" , function(e){    //lance une fonction lors de la soumission de la réponse de J1, le "e" capture l'évènement
        e.preventDefault()  //bloc le rechargement de la page, empêche en réalité le comprtement par défaut
        let inputOne = $("input[type=text]")

        let userOneValue = parseInt(inputOne.val()) //transforme la saisie en valeur du bon typage
        if(randomNumber !== userOneValue){  //condition de mauvaise réponse
            input.val("")   //efface la valeur saisie du champ
            input.addClass("error animated bounce") //ajoute une classe à l'input pour ajouter du style

            setTimeout(function(){  //annule l'affet donné à l'input après un délais
                input.removeClass("error animated bounce")
            }, 1000)
        }
        if(randomNumber === userOneValue){  //condition de bonne réponse
            ++scorePlayerOne
        }

    })

    $("#formUserTwo").on("submit" , function(e){
        e.preventDefault()
        let inputTwo = $("input[type=text]")

        let userTwoValue = parseInt(inputTwo.val())
        if(randomNumber !== userTwoValue){
            input.val("")
            input.addClass("error animated bounce")

            setTimeout(function(){
                input.removeClass("error animated bounce")
            }, 1000)
        }
        if(randomNumber === userTwoValue){
            ++scorePLayerTwo
        }

    })

})





// Página vai ter busca para dois campeões mostrando a loading img (a menor), com as skills e stats by level de cada campeão
// http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/Aatrox.png (square assets)


    
// fetch(`http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/summoner.json`)
// .then(res => res.json())
// .then(json => {
//     console.log(json)
    


// })

// ajuste no input de Level:

//adicionar efeito hover nas imagens
//ver se rola fazer alteração nos finalItems
//Adicionar navegação entre paginas
//Adicionar Sobre



function ForNumbers(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
    //0~9
    charCode >= 48 && charCode <= 57 ||
       //number pad 0~9
       charCode >= 96 && charCode <= 105 ||
    //backspace
       charCode == 8 ||
    //tab
    charCode == 9 ||
    //enter
    charCode == 13 || 
    //left, right, delete..
    charCode >= 35 && charCode <= 46
    )
    {
    //make sure the new value below 18
    if(parseInt(this.value+String.fromCharCode(charCode), 10) <= 18) 
        return true;
    }

    evt.preventDefault()
    evt.stopPropagation()

    return false
}



//ajuste level fim



var champs 
var j

function summonChampions () {

    fetch(`http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json`)
        .then(res => res.json())
        .then(json => {
        // console.log(json.data)
        // console.log(json.data[Object.keys(json.data)[0]].name)
        // var jsonOb = json.data[Object.keys(json.data)[0]]
        // console.log(jsonOb.name) 

        var j = []
        var k = []
        

        for (num in json.data) {
            
            j.push(json.data[num].id)
           
            // console.log(k)
            
            // console.log(num)
            
            
            

            
                       
                    

            var cnam = json.data[num].name
            // console.log(cnam)     
            
            // document.getElementById('cAv').innerHTML += 
            // `
            // <div style="display: flex; flex-direction: column; justify-content:center; margin: 4px;">
            //     <div class="foto" style="width:50px; padding: 2px;height: 50px;"><img class="foto" id="${num}" style="width:50px" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${num}.png" title=${num}></div>
            //     <div><p style="font-size: 0.8em;">${cnam}<p></div>
            // </div>           
            // `   



        }

        for (nam in json.data) {
            k.push(json.data[nam].name)
        }

        var rOne = 0
        var rTwo = 54

        
        for (let i = rOne; i < rTwo; i++) {
        

            // console.log(j[i])

          

            document.getElementById('cAv1').innerHTML += 
            `
            <div style="display: flex; flex-direction: column; justify-content:center; margin: 4px;">
            <div class="foto" style="width:50px; padding: 2px;height: 50px;"><img class="chpic" id="${i}" style="width:50px"  onclick="chamar(${i})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${j[i]}.png"></div>
                <div><p style="font-size: 0.8em;">${k[i]}<p></div>
            </div>           
            `           
        } 

        var rOne = 55
        var rTwo = 104

        for (let i = rOne; i < rTwo; i++) {
        

            // console.log(j[i])

         

            document.getElementById('cAv2').innerHTML += 
            `
            <div style="display: flex; flex-direction: column; justify-content:center; margin: 4px;">
                <div class="foto" style="width:50px; padding: 2px;height: 50px;"><img class="chpic" id="${i}" style="width:50px"  onclick="chamar(${i})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${j[i]}.png"></div>
                <div><p style="font-size: 0.8em;">${k[i]}<p></div>
            </div>           
            `           
        } 

        var rOne = 105
        var rTwo = 154

        for (let i = rOne; i < rTwo; i++) {
        

            // console.log(j[i])

         

            document.getElementById('cAv3').innerHTML += 
            `
            <div style="display: flex; flex-direction: column; justify-content:center; margin: 4px;">
                <div class="foto" style="width:50px; padding: 2px;height: 50px;"><img class="chpic" id="${i}" style="width:50px"  onclick="chamar(${i})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${j[i]}.png"></div>
                <div><p style="font-size: 0.8em;">${k[i]}<p></div>
            </div>           
            `           
        }

        
        
        
})


//carousel

    let slidePosition = 0
    const slides = document.getElementsByClassName('carousel__item')
    const totalSlides = slides.length

    document.getElementById('rbt').addEventListener('click', function () {
        moveToNextSlide()
    })

    document.getElementById('lbt').addEventListener('click', function () {
        moveToPrevSlide()
    })

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('carousel__item--visible')
            slide.classList.add('carousel__item--hidden')
        }

        if (slidePosition === 4) {
            slidePosition = 0
        }

        slides[slidePosition].classList.add('carousel__item--visible')
    
    }

    function moveToNextSlide() {
        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++
        }
        updateSlidePosition()
        }

    function moveToPrevSlide() {
        if (slidePosition === 0) {
            slidePosition = totalSlides - 1
        } else {
            slidePosition--
        }
        updateSlidePosition()
        }

    }

summonChampions()

 

function chamar(champion) {

    

    


    
    fetch(`http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json`)
        .then(res => res.json())
        .then(champd => {
            console.log(champd.data)

            var l = []

            for (champ in champd.data) {
                l.push(champd.data[champ].id)
            }

            var cName = `${l[champion]}`

            console.log(champd.data[cName])

            if (champd.data[cName].tags[0] == "Marksman") {
                var func = "Atirador"
            } else if (champd.data[cName].tags[0] == "Assassin") {
                var func = "Assassino"
            } else if (champd.data[cName].tags[0] == "Fighter") {
                var func = "Lutador"
            } else if (champd.data[cName].tags[0] == "Mage") {
                var func = "Mago"
            } else if (champd.data[cName].tags[0] == "Support") {
                var func = "Suporte"
            } else if (champd.data[cName].tags[0] == "Tank") {
                var func = "Tanque"
            } else {
                var func = "undefined"
            }



            


            var radios = document.getElementsByName('DivSelect')

            var check

            for(i = 0; i < radios.length; i++) {
                if(radios[i].checked) {                    
                    check = radios[i].value
                }               

            }

            console.log(check)

            uPnam = champd.data[cName].name.toUpperCase()
            uPtit = champd.data[cName].title.toUpperCase()
            if (check == "Champion 1") {

                var ch1 = champd.data[cName].id                     


                // console.log(champd.data[cName])
                // console.log(ch1.stats.hpperlevel)

             

                document.getElementById('c1').innerHTML = 
                `<div><h1>${uPnam}</h1></div>                
                <div><h4>${uPtit}</h4></div>
                <div><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${l[champion]}_0.jpg">
                <h6 style="margin-right: 90px;">  Função: ${func} `+ '    ' + ` <img src='Images/`+champd.data[cName].tags[0]+`.jpg' width="70px"> </h6>                 
                <div style="display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; text-align: right;"> 
                <div id="stcont">
                <div style="display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; text-align: right;">
                <div id="st2" style="margin-right:50px;">
                    <br>                   
                    <p>Vida: ` + champd.data[cName].stats.hp + ` (+`+champd.data[cName].stats.hpperlevel+`/lv)</p>
                    <p>Velocidade de Movimento: ` + champd.data[cName].stats.movespeed + `</p>
                    <p>Alcance de Ataque: ` + champd.data[cName].stats.attackrange + `</p>
                    <p>Velocidade de Ataque: ` + champd.data[cName].stats.attackspeed + ` (+`+champd.data[cName].stats.attackspeedperlevel+`/lv)</p>      
                </div>
                <div>
                    <br>
                    <p>Dano de Ataque: ` + champd.data[cName].stats.attackdamage + ` (+`+champd.data[cName].stats.attackdamageperlevel+`/lv)</p>
                    <p>Armadura: ` + champd.data[cName].stats.armor + ` (+`+champd.data[cName].stats.armorperlevel+`/lv)</p>
                    <p>Resistência Mágica: ` + champd.data[cName].stats.spellblock + ` (+`+champd.data[cName].stats.spellblockperlevel+`/lv)</p>
                    <p>Mana: ` + champd.data[cName].stats.mp + ` (+`+champd.data[cName].stats.mpperlevel+`/lv)</p>    
                </div>
                </div>
                <br>
                <br>
                <br>  
                <div>
                <br>
                <br>
                <br>                                                                                
                `
                



            } else if (check == "Champion 2") {

                var ch2 = champd.data[cName]
                // console.log(ch2)
                // console.log(champd.data[cName])



                 document.getElementById('c2').innerHTML = 
               `<div><h1>${uPnam}</h1></div>                
                <div><h4>${uPtit}</h4></div>
                <div><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${l[champion]}_0.jpg">
                <h6 style="margin-right: 90px;">  Função: ${func} `+ '    ' + ` <img src='Images/`+champd.data[cName].tags[0]+`.jpg' width="70px"> </h6>                 
                <div style="display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; text-align: right;"> 
                <div id="stcont">
                <div style="display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; text-align: right;">
                <div id="st2" style="margin-right:50px;">
                    <br>                   
                    <p>Vida: ` + champd.data[cName].stats.hp + ` (+`+champd.data[cName].stats.hpperlevel+`/lv)</p>
                    <p>Velocidade de Movimento: ` + champd.data[cName].stats.movespeed + `</p>
                    <p>Alcance de Ataque: ` + champd.data[cName].stats.attackrange + `</p>
                    <p>Velocidade de Ataque: ` + champd.data[cName].stats.attackspeed + ` (+`+champd.data[cName].stats.attackspeedperlevel+`/lv)</p>      
                </div>
                <div>
                    <br>
                    <p>Dano de Ataque: ` + champd.data[cName].stats.attackdamage + ` (+`+champd.data[cName].stats.attackdamageperlevel+`/lv)</p>
                    <p>Armadura: ` + champd.data[cName].stats.armor + ` (+`+champd.data[cName].stats.armorperlevel+`/lv)</p>
                    <p>Resistência Mágica: ` + champd.data[cName].stats.spellblock + ` (+`+champd.data[cName].stats.spellblockperlevel+`/lv)</p>
                    <p>Mana: ` + champd.data[cName].stats.mp + ` (+`+champd.data[cName].stats.mpperlevel+`/lv)</p>    
                </div>
                </div>
                <br>
                <br>
                <br>  
                <div>
                <br>
                <br>
                <br>                                                                                
                `               

            }                              




        })
}





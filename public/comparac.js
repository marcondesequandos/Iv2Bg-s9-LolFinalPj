
var champs 
var j

function summonChampions () {

    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json`)
        .then(res => res.json())
        .then(json => {


        var j = []
        var k = []
        

        for (num in json.data) {
            
            j.push(json.data[num].id)               
                                                                 
        }

        for (nam in json.data) {
            k.push(json.data[nam].name)
        }

    //carousel 
    //carousel botões

        var rOne = 0
        var rTwo = 54

        
        for (let i = rOne; i < rTwo; i++) {
        

    

          

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
        

      

         

            document.getElementById('cAv3').innerHTML += 
            `
            <div style="display: flex; flex-direction: column; justify-content:center; margin: 4px;">
                <div class="foto" style="width:50px; padding: 2px;height: 50px;"><img class="chpic" id="${i}" style="width:50px"  onclick="chamar(${i})" src="http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${j[i]}.png"></div>
                <div><p style="font-size: 0.8em;">${k[i]}<p></div>
            </div>           
            `           
        }

        
        
        
})


//carousel resto dafunção (imgs)

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

    

    


    
    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json`)
        .then(res => res.json())
        .then(champd => {
       

            var l = []

            for (champ in champd.data) {
                l.push(champd.data[champ].id)
            }

            var cName = `${l[champion]}`

   

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



            uPnam = champd.data[cName].name.toUpperCase()
            uPtit = champd.data[cName].title.toUpperCase()
            if (check == "Champion 1") {

                                    


     

             

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



const links = document.getElementsByClassName('mdl-navigation__link')
const totalLinks = links.length

links[i].addEventListener('click', function () {
    updateLinks()

})

function updateLinks () {
    for (let link of links)
    link.classList.remove('mdl-navigation__link')
    ('mdl-navigation__link active')
}
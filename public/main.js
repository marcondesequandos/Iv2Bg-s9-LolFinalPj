//focus na busca

const buscaC = document.getElementById('cNam')
buscaC.focus()

//** */





var champn
var mCont = document.getElementById('main')


//chamando input para adicionar funções

buscaC.addEventListener("keyup", function(e) {
    
    titleCase()
    
    if (e.keyCode === 13) {
                         
        removeDelta()
        removeSpaces()
        event.preventDefault()
        summonChampion ()
        
        
        
    }
})




//Ajuste da box de nível por atr para não preencher mais do q 18
  

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
    // 18 and below 
    if(parseInt(this.value+String.fromCharCode(charCode), 10) <= 18) 
        return true;
    }

    evt.preventDefault()
    evt.stopPropagation()

    return false
}

//adicionando no input lvl a função para limitar nível digitado

document.getElementById('nvl').addEventListener('keypress', ForNumbers, false)

//funçôes remove spaces, remove delta e titlecase definidas, foi colocada no keyup do input de champion

function removeSpaces() {
    var originalText = document.getElementById("cNam").value

    removedSpacesText = originalText.split(" ").join("")

    document.getElementById("cNam").value = removedSpacesText
}

function removeDelta() {
    var originalText = document.getElementById("cNam").value

    removedSpacesText = originalText.split("'").join("")

    document.getElementById("cNam").value = removedSpacesText
}



function titleCase() {

    var originalText = document.getElementById('cNam').value

    var splitStr = originalText.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }   


document.getElementById('cNam').value = splitStr.join(' ')

}

//função summonChampion carregada no keyup. Aqui tem o core da página com o fetch, etc.


function summonChampion () {

    document.getElementById('trdInfo').innerHTML = ""
    document.getElementById('frtInfo').innerHTML = ""
    document.getElementById('abInfos').innerHTML = ""
    document.getElementById('nvl').innerHTML = ""

    


    

    champn = document.getElementById('cNam').value

  
    

    
    mCont.style.visibility = "visible"
    document.getElementById('chImg').style.visibility = "visible"
    document.getElementById('abilities').style.visibility = "visible"
    document.getElementById('stlvl').style.visibility = "visible"
    document.getElementById('trd').style.visibility = "visible"
    document.getElementById('frt').style.visibility = "visible"
    document.getElementById('chSk').style.visibility = "visible"
    

   



    fetch(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion/${champn}.json`)
        .then(response =>  response.json()
        .then(champd => {
    
           
        



    cName = `${champn}`


  


    

//vars das Abilities Passive QWER
    let Passive = champd.data[cName].passive.image.full
    
    let Q = champd.data[cName].spells[0].image.full
    let W = champd.data[cName].spells[1].image.full
    let E = champd.data[cName].spells[2].image.full
    let R = champd.data[cName].spells[3].image.full






    if (champd.data[cName].info.difficulty <= 3) {
    var diff = 'Baixa'
    } else if (champd.data[cName].info.difficulty >= 4 && champd.data[cName].info.difficulty <=7 ) {
    var diff = 'Moderada'
    } else {
    var diff = "Alta"
    }

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




    noDelay()

    function noDelay () {
        var j = []
       

        for (skin in champd.data[cName].skins) {
            j.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champn}_`+champd.data[cName].skins[skin].num+`.jpg`)   
        }

        

        var k = [] 

        for (skN in champd.data[cName].skins) {
            k.push(champd.data[cName].skins[skN].name)
        }

                
       


       




        

        var cont = 0
        var chNam = champd.data[cName].name.toUpperCase()
        var chTit = champd.data[cName].title.toUpperCase()
      

        document.getElementById('chImg').innerHTML =
        
        `  
        <div class="cimg" id="skD">            
            <div class="mdl-card__title" style="display:flex; flex-direction: column; flex-wrap: wrap; justify-content: center; text-align:center;">
                <img id="camp" width="50%" src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champn}_${cont}.jpg''> 
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center;">                   
                <h1 style="margin-right: 90px;"> ${chNam}</h1>
                <h4> - ${chTit} - </h4>            
                </div>
                
                
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center;">            
                <h6 style="margin-right: 90px;">  Função: ${func} `+ '    ' + ` <img src='Images/`+champd.data[cName].tags[0]+`.jpg' width="70px"> </h6>
                <h6>Dificuldade: ${diff} <br> <img src='Images/${diff}.png' width="70px"></h6>
                </div>
                <div class="mdl-card__title" style="display:flex; flex-direction: column; flex-wrap: wrap; justify-content: center; text-align:center;">
                `+ champd.data[cName].lore + `
                </div>
            </div>            
        </div>  
        </div>
                                         
        `

        for (let i = 0; i < j.length; i++) {
            document.getElementById('chSk').innerHTML +=        
            `<div><img src="${j[i]}"></div>`
        }

        for (let i = 0; i < k.length; i++) {
            document.getElementById('chSk').innerHTML +=        
            `<div>${k[i]}</div>`
        }
        contSk = 0

        document.getElementById('chSk').innerHTML =

        `
        <div style="display:flex; flex-direction: row; justify-content: center; text-align:center; align-items: center;">        
            <p style="justify-content: center; margin: 0px">
                <button class="cimg" id="lbt"><span class="material-icons">keyboard_arrow_left</span></button>       
            </p> 
            <div class="cimg" id="skA">
                <div>
                    <h1>SKINS DISPONÍVEIS</h1>
                    <h4>${cName}</h4>
                </div>
                <div class="mdl-card__title" style="display:flex; flex-direction: column; flex-wrap: wrap; justify-content: center; text-align:center;">
                    <img class="ts" id="camp" src='https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champn}_${contSk}.jpg''>                
                </div>            
            </div>
            <p style="justify-content: center; margin: 0px">
                <button class="cimg" id="rbt"><span class="material-icons">keyboard_arrow_right</span></button>
            </p>    
        </div>
                                         
        `





        var maxJ = j.length
        var cont1 = 0

       

      

       

        document.getElementById('rbt').addEventListener('click', function() {  
    
            if(cont1 < (maxJ -1)) {
                cont1++ 
            } else if (cont1 == (maxJ -1)) {
                cont1 = 0
            }
            
            
                    

            document.getElementById('skA').innerHTML = 

            

            `
            <div class="cimg" id="sk">
                <div>
                    <h1>SKINS DISPONÍVEIS</h1>
                    <h4 id="skT">${k[cont1]}</h4>
                </div>            
                <div class="mdl-card__title" style="display:flex; flex-direction: column; flex-wrap: wrap; justify-content: center; text-align:center;">
                <img class="ts" id="camp" src="`+j[cont1]+`">                 
                </div>            
            </div>       
            </div>                                         
            `
            chDef()
     

        })


        

        document.getElementById('lbt').addEventListener('click', function() {
           
            if(cont1 <= (maxJ -1) && cont1 > 0) {
                cont1-- 
            } else if (cont1 == 0) {
                cont1 = (maxJ -1)       
            } 


            


            document.getElementById('skA').innerHTML = 

            `
            <div class="cimg" id="sk">
                <div>
                    <h1>SKINS DISPONÍVEIS</h1>
                    <h4 id="skT">${k[cont1]}</h4>
                </div>            
                <div class="mdl-card__title" style="display:flex; flex-direction: column; flex-wrap: wrap; justify-content: center; text-align:center;">
                <img class="ts" id="camp" src="`+j[cont1]+`">                 
                </div>            
            </div>       
            </div>                                         
            `

            chDef()
         

        })

        function chDef () {
            if (cont1 == 0) {
                document.getElementById('skT').innerHTML = `${cName}`
            } 
            
        }
        


    }   


    document.getElementById('stcont').innerHTML =

    `
    <div style="display:flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: center; text-align: right;">
    <div id="st" style="margin-right:50px;">
        <br>                   
        <p>Vida: ` + champd.data[cName].stats.hp + `</p>
        <p>Velocidade de Movimento: ` + champd.data[cName].stats.movespeed + `</p>
        <p>Alcance de Ataque: ` + champd.data[cName].stats.attackrange + `</p>
        <p>Velocidade de Ataque: ` + champd.data[cName].stats.attackspeed + `</p>      
    </div>
    <div>
        <br>
        <p>Dano de Ataque: ` + champd.data[cName].stats.attackdamage + `</p>
        <p>Armadura: ` + champd.data[cName].stats.armor + `</p>
        <p>Resistência Mágica: ` + champd.data[cName].stats.spellblock + `</p>
        <p>Mana: ` + champd.data[cName].stats.mp + `</p>    
    </div>
    </div>
    <br>
    <br>
    <br>    
    `

    





    document.getElementById('nvl').addEventListener('input', function () {


    var nvl = document.getElementById('nvl').value

    hpUP = (champd.data[cName].stats.hp + (champd.data[cName].stats.hpperlevel * (nvl -1)))
    vmUP = champd.data[cName].stats.movespeed.toFixed(0)
    arUP = champd.data[cName].stats.attackrange.toFixed(0)
    asUP = (champd.data[cName].stats.attackspeed + (champd.data[cName].stats.attackspeed * champd.data[cName].stats.attackspeedperlevel * (nvl -1) * 0.01)).toFixed(2)
    dmUP = (champd.data[cName].stats.attackdamage + (champd.data[cName].stats.attackdamageperlevel * (nvl -1))).toFixed(0)
    amUP = (champd.data[cName].stats.armor + (champd.data[cName].stats.armorperlevel * (nvl -1))).toFixed(0)
    rmUP = (champd.data[cName].stats.spellblock + (champd.data[cName].stats.spellblockperlevel * (nvl -1))).toFixed(0)
    mpUP = (champd.data[cName].stats.mp + (champd.data[cName].stats.mpperlevel * (nvl -1))).toFixed(0)

    
    if (nvl != "") {
        
        document.getElementById('stcont').innerHTML =

            `
            <div style="display:flex; flex-direction: row; align-items: center; justify-content: center; text-align: right;">
                <div id="st" style="margin-right:50px;">
                    <br>                   
                    <p>Vida: ` + hpUP + `</p>
                    <p>Velocidade de Movimento: ` + vmUP + `</p>
                    <p>Distância de Ataque: ` + arUP + `</p>
                    <p>Velocidade de Ataque: ` + asUP + `</p>
                </div>
                <div>
                    <br>
                    <p>Dano de Ataque: ` + dmUP + `</p>
                    <p>Armadura: ` + amUP + `</p>
                    <p>Resistência Mágica: ` + rmUP + `</p>
                    <p>Mana: ` + mpUP + `</p>                
                </div>
                
            </div>
            <br>
            <br>
            <br>  
            `  
    } else {

        `
        <div style="display:flex; flex-direction: row; align-items: center; justify-content: center; text-align: right;">
        <div id="st" style="margin-right:50px;">
            <br>                   
            <p>Vida: ` + champd.data[cName].stats.hp + `</p>
            <p>Velocidade de Movimento: ` + champd.data[cName].stats.movespeed + `</p>
            <p>Alcance de Ataque: ` + champd.data[cName].stats.attackrange + `</p>
            <p>Velocidade de Ataque: ` + champd.data[cName].stats.attackspeed + `</p>      
        </div>
        <div>
            <br>
            <p>Dano de Ataque: ` + champd.data[cName].stats.attackdamage + `</p>
            <p>Armadura: ` + champd.data[cName].stats.armor + `</p>
            <p>Resistência Mágica: ` + champd.data[cName].stats.spellblock + `</p>
            <p>Mana: ` + champd.data[cName].stats.mp + `</p>    
        </div>
        </div>
        <br>
        <br>
        <br>     
        `

    }


          
    })

    for (let at in champd.data[cName].allytips) {
        if (at <= 1) {
            document.getElementById('trdInfo').innerHTML += '<div id="allytips"><p>' + champd.data[cName].allytips[at] + '</p></div>'
        }
    }
    
    for (let et in champd.data[cName].enemytips) {
        if (et <= 1) {
            document.getElementById('frtInfo').innerHTML += '<div id="enemytips"><p>' + champd.data[cName].enemytips[et] + '</div></p>'
        }
    }
    

    function resizeImage(img) {
        img.style.width = "115px";
        
    }




    document.getElementById('passAb').innerHTML =
    `<img  id="Ps" class="abImg" style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/${Passive}" onclick="resizeImage(this)">`
    document.getElementById('abQ').innerHTML =
    `<img id="Q" class="abImg" style="width:100px" src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${Q}" onclick="resizeImage(this)">`
    document.getElementById('abW').innerHTML =
    `<img id="W" class="abImg" style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${W}" onclick="resizeImage(this)">`
    document.getElementById('abE').innerHTML =
    `<img id="E" class="abImg" style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${E}" onclick="resizeImage(this)">`
    document.getElementById('abR').innerHTML =
    `<img id="R" class="abImg" style="width:100px"  src="https://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/${R}" onclick="resizeImage(this)">`

    document.getElementById('passDsc').innerHTML = 

    `<div style="margin-top: 20px;">
    <p id="Ps1" style="display: none">`+ champd.data[cName].passive.name +`</p>
    <p id="Ps2" style="display: none">`+ champd.data[cName].passive.description +`</p>
    <br>
    </div>
    `

    for (var i in champd.data[cName].spells) {
    document.getElementById('abInfos').innerHTML +=

        `<div><div id="infos" style="margin-top: 20px"` + [i] + `">
        <p id="abname`+ [i] + `" style="display: none;">` + champd.data[cName].spells[i].name + `</p>
        <p id="custo`+ [i] + `" style="display: none;">Custo: ` + champd.data[cName].spells[i].costBurn + `</p>
        <p id="cooldown`+ [i] + `" style="display: none;">Tempo de Recarga: ` + champd.data[cName].spells[i].cooldown + `</p>
        <p id="description`+ [i] + `" style="display: none;">` + champd.data[cName].spells[i].description + `</p>
    </div></div>`


    document.getElementById('abQ').addEventListener('click', function () {

        document.getElementById('passDsc').style.display = "none"
        document.getElementById('Ps').style.width = "100px"
    
        document.getElementById('abname0').style.removeProperty('display')
        document.getElementById('custo0').style.removeProperty('display')
        document.getElementById('cooldown0').style.removeProperty('display')
        document.getElementById('description0').style.removeProperty('display')
        document.getElementById('Q').style.width = "115px"
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
        document.getElementById('W').style.width = "100px"
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
        document.getElementById('E').style.width = "100px"
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
        document.getElementById('R').style.width = "100px"

        document.getElementById('Q').style.opacity = "1"
        document.getElementById('W').style.opacity = "0.5"
        document.getElementById('E').style.opacity = "0.5"
        document.getElementById('R').style.opacity = "0.5"
        
        document.getElementById('Ps').style.opacity = "0.5"
  
    
    
    
    })
    
    document.getElementById('abW').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
        document.getElementById('Ps').style.width = "100px"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
        document.getElementById('Q').style.width = "100px"
    
        document.getElementById('abname1').style.removeProperty('display')
        document.getElementById('custo1').style.removeProperty('display')
        document.getElementById('cooldown1').style.removeProperty('display')
        document.getElementById('description1').style.removeProperty('display')
        document.getElementById('W').style.width = "115px"
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
        document.getElementById('E').style.width = "100px"
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
        document.getElementById('R').style.width = "100px"

        document.getElementById('Q').style.opacity = "0.5"
        document.getElementById('W').style.opacity = "1"
        document.getElementById('E').style.opacity = "0.5"
        document.getElementById('R').style.opacity = "0.5"

        document.getElementById('Ps').style.opacity = "0.5"


    })
    
    document.getElementById('abE').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
        document.getElementById('Ps').style.width = "100px"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
        document.getElementById('Q').style.width = "100px"
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
        document.getElementById('W').style.width = "100px"
    
        document.getElementById('abname2').style.removeProperty('display')
        document.getElementById('custo2').style.removeProperty('display')
        document.getElementById('cooldown2').style.removeProperty('display')
        document.getElementById('description2').style.removeProperty('display')
        document.getElementById('E').style.width = "115px"
    
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
        document.getElementById('R').style.width = "100px"

        document.getElementById('Q').style.opacity = "0.5"
        document.getElementById('W').style.opacity = "0.5"
        document.getElementById('E').style.opacity = "1"
        document.getElementById('R').style.opacity = "0.5"

        document.getElementById('Ps').style.opacity = "0.5"

    })
    
    document.getElementById('abR').addEventListener('click', function () {
        document.getElementById('passDsc').style.display = "none"
        document.getElementById('Ps').style.width = "100px"
    
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
        document.getElementById('Q').style.width = "100px"
    
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
        document.getElementById('W').style.width = "100px"
    
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
        document.getElementById('E').style.width = "100px"
    
        document.getElementById('abname3').style.removeProperty('display')
        document.getElementById('custo3').style.removeProperty('display')
        document.getElementById('cooldown3').style.removeProperty('display')
        document.getElementById('description3').style.removeProperty('display')
        document.getElementById('R').style.width = "115px"

        document.getElementById('Q').style.opacity = "0.5"
        document.getElementById('W').style.opacity = "0.5"
        document.getElementById('E').style.opacity = "0.5"
        document.getElementById('R').style.opacity = "1"

        document.getElementById('Ps').style.opacity = "0.5"

    })
    }
    
    
    
    
    
    
    
    
    
    
    
    })
    )

    
    
    
    }    
        
    document.getElementById('passAb').addEventListener('click', function () {
        document.getElementById('passDsc').style.removeProperty('display')  
        document.getElementById('Ps1').style.removeProperty('display')
        document.getElementById('Ps2').style.removeProperty('display')
        document.getElementById('custo1').style.removeProperty('display')
        document.getElementById('Ps').style.width = "115px"
        
        document.getElementById('abname0').style.display = "none"
        document.getElementById('custo0').style.display = "none"
        document.getElementById('cooldown0').style.display = "none"
        document.getElementById('description0').style.display = "none"
        document.getElementById('Q').style.width = "100px"
        
        document.getElementById('abname1').style.display = "none"
        document.getElementById('custo1').style.display = "none"
        document.getElementById('cooldown1').style.display = "none"
        document.getElementById('description1').style.display = "none"
        document.getElementById('W').style.width = "100px"
        
        document.getElementById('abname2').style.display = "none"
        document.getElementById('custo2').style.display = "none"
        document.getElementById('cooldown2').style.display = "none"
        document.getElementById('description2').style.display = "none"
        document.getElementById('E').style.width = "100px"
        
        document.getElementById('abname3').style.display = "none"
        document.getElementById('custo3').style.display = "none"
        document.getElementById('cooldown3').style.display = "none"
        document.getElementById('description3').style.display = "none"
        document.getElementById('R').style.width = "100px"

        document.getElementById('Q').style.opacity = "0.5"
        document.getElementById('W').style.opacity = "0.5"
        document.getElementById('E').style.opacity = "0.5"
        document.getElementById('R').style.opacity = "0.5"
        
        document.getElementById('Ps').style.opacity = "1"
      
    
    })

const links = document.getElementsByClassName('mdl-navigation__link')
const totalLinks = links.length

links[i].addEventListener('click', function () {
    updateLinks()

})

function updateLinks () {
    for (let link of links)
    link.classList.remove('mdl-navigation__link')
    link.classList.add('mdl-navigation__link active')
}
    

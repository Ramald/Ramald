let contador = 1

setInterval(function() {
    document.getElementById('slide' + contador).checked = true
    contador++

    if(contador > 4) {
        contador=1
    }
}, 5000)




let sc = document.getElementById('sc')
let sm = document.getElementById('sm')
let sb = document.getElementById('sb')
let sf = document.getElementById('sf')

let calab = document.getElementById('calab')
let muss = document.getElementById('muss')
let brow = document.getElementById('brow')
let fran = document.getElementById('fran')

function mouseEnter1() {
    sm.style.opacity = '1'
    muss.style.opacity = '0.1'
}

function mouseLeave1() {
    muss.style.opacity = '1'
    sm.style.opacity = '0'
}

function mouseEnter2() {
    sc.style.opacity = '1'
    calab.style.opacity = '0.1'
}

function mouseLeave2() {
    sc.style.opacity = '0'
    calab.style.opacity = '1'

}

function mouseEnter3() {
    sb.style.opacity = '1'
    brow.style.opacity = '0.1'
}

function mouseLeave3() {
    sb.style.opacity = '0'
    brow.style.opacity = '1'

}

function mouseEnter4() {
    sf.style.opacity = '1'
    fran.style.opacity = '0.1'
}

function mouseLeave4() {
    sf.style.opacity = '0'
    fran.style.opacity = '1'

}


let iten = document.getElementById('mobile-itens')

function clickPizza() {
   if( iten.style.display == 'none') {
    iten.style.display = 'block'
   } else {
    iten.style.display = 'none'
   }
}
function clickSobre() {
    let s = document.getElementById('sobre')
    let c = document.getElementById('container')
    let p = document.getElementById('projects')
    if(s.style.display == 'none') {
        s.style.display = 'block'
        c.style.display = 'none'
        p.style.display = 'none'
    } else {
        s.style.display = 'none'
        c.style.display = 'block'
    }
}

function clickSobre2() {
    let p = document.getElementById('projects')
    let c = document.getElementById('container')
    let s = document.getElementById('sobre')
    if(p.style.display == 'none') {
        p.style.display = 'block'
        c.style.display = 'none'
        s.style.display = 'none'
    } else {
        p.style.display = 'none'
        c.style.display = 'block'
    }
}

function clickSobre3() {
    let p = document.getElementById('projects')
    let c = document.getElementById('container')
    let s = document.getElementById('sobre')

    p.style.display = 'none'
    s.style.display = 'none'
    c.style.display = 'block'
}
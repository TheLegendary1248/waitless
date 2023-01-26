let t = {
    hi:     1049086800,
    cat:    1389738240,
    huh:    NaN,
    oh:     NaN,
    pink:   1571773440,
    hello3F:1582153440,
    nochar: 1647842580,
    unfair: 1657461600,
    noword: 1674201864,
    main:   0,
    orange: 1995854400,
    bye:    2153620800
}

let orange_t = t.orange;


function Since(t)
{
    let temp = CreateSquare()
    document.body.append(temp)
    temp.interval = setInterval(() => SetBits((Date.now() / 1000) - t, temp), 1000)
    return temp
}
function Stamp(t)
{
    let temp = CreateSquare()
    document.body.append(temp)
    SetBits(t, temp)
    return temp
}
let t_keys = Object.keys(t);
for (let ts = 0; ts < t_keys.length; ts++) {
    (t[t_keys[ts]] = Since(t[t_keys[ts]])).id = t_keys[ts]
    console.log(t[t_keys[ts]])
    t[t_keys[ts]].style.left = `calc(var(--unit) * ${ts})`
}

for (let i = 32; i < 36; i++) t.main.children[i].textContent = 1 << i
let tick = ["https://youtu.be/RGnvttkY2is?t=250", "https://youtu.be/o_Ay_iDRAbc?t=125"]
//t.main.onclick = () => window.open(tick[0], "_blank")
clearInterval(t.orange.interval)
SetBits((Date.now() / 1000) - orange_t, t.orange)
document.createElement("div")

lost_t = [204, 572837, 1]

for (let i = 0; i < lost_t.length; i++) {
    break;
    const e = lost_t[i];
    Since(e).style = "--fill: #1124"
}
const hr = 60 * 60 * 1000
let day = (Date.now() - (2 * hr)) % 864e+5
let root = document.querySelector(":root")
if(day < 10 * hr) {
    root.style = "--pos: #fff; --neg: #111"
    t.main.style.setProperty('--pos',"#edb7");
}
t.hi.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
})
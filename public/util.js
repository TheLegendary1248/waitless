function CreateSquare()
{
    let sqr = document.createElement("div")
    sqr.classList.add("square")
    sqr.tabIndex = "0"
    let bit = document.createElement("div")
    bit.classList.add("_0")
    for (let ct = 0; ct < 36; ct++) {
        sqr.append(bit.cloneNode())
    }
    return sqr
}
function SetBits(n, sqr)
{
    let e = sqr.children
    for (let i = 0; i < 32; i++) {
        const element = e[i];
        element.classList.remove(...element.classList);
        element.classList.add("_" + ((n >>> i) & 1))
    }
}
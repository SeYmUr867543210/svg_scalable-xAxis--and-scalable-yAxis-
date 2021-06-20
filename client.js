let margin = { top: 30, bottom: -15, left: 50, right: 70 }; //margin.bottom - 40
let svg = document.querySelector("svg")
let svgWidth = svg.clientWidth    // converting % to px
let svgHeight = svg.clientHeight // convert % to px
let g = document.createElement("g")

//gor yAxis
let priceCount = 28;
let priceStep = 1;
let yScale = svgHeight / priceCount
let price = 123;
function drawGorAxis(refresh, newPriceStep) {
    if (refresh) {
        priceStep = newPriceStep
        svg.innerHTML = ""
    }
    for (let i = 0; i < priceCount; i++) {
        if (i == 0) {
            //g.innerHTML
            svg.innerHTML += `
            <text class="gorPrice"onmouseenter='addGorLine(this)'onmouseleave='removeLine(this)'x="${svgWidth - margin.right}"y="${i * yScale - margin.bottom}">${price}</text>
         `
        } else {
            svg.innerHTML += `
            <text class="gorPrice"onmouseenter='addGorLine(this)'onmouseleave="removeLine(this)"x="${svgWidth - margin.right}"y="${i * yScale - margin.bottom}">${price = price - priceStep}</text>
         `
        }
    }

}
drawGorAxis()
function addGorLine (e){
    svg.innerHTML += `
                        <line class="gorLine"x1="20"y1="${e.getAttribute("y")-5}"x2="${e.getAttribute("x")-20}"y2="${e.getAttribute("y")-5}"stroke="black"stroke-width="3" stroke-linecap="round"/>
                    `
}
function removeLine(e){
    console.log("im here")        // second event not working at one el?
}
//vertic xAxis
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let dayMonthYear = `${day}/${month}/${year}`
let dateCount = 10
for (let i = 0; i < dateCount; i++) {
    svg.innerHTML += `
                        <text x="${i * (svgWidth / dateCount)}"y="${svgHeight}" text-anchor="middle">${dayMonthYear}</text>
                        <line class="verticLine"x1="${i * (svgWidth / dateCount)}"y1="${svgHeight}"x2="${i * (svgWidth / dateCount )}"y2="0"stroke="black"stroke-width="3"></line>
                       
                    `
}
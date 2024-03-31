interface Circle {
    radius : number
}
interface Square {
    side : number
}
interface Rectangle{
    width: number,
    height: number
}

type Shape = Rectangle | Square | Circle

function renderShape(type : Shape){
    console.log("Rendered")
}
function calculateArea(type : Shape ){
    console.log("Done with area calculation")
}

renderShape({
    radius : 10
})
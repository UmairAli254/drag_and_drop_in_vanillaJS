console.log("Drag and Drop Builders..!");
 
const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.querySelectorAll(".whiteBox");
 
//img Drag event listeners 
imgBox.addEventListener("dragstart", (e) => { //drag start event listener
 
    setTimeout(() => {
        e.target.className = " hide";
    }, 0);
    console.log("Drag Start is encountered!");
 
});
 
imgBox.addEventListener("dragend", (e) => { //drag stop event listener
    e.target.className="imgBox";
    console.log("Drag end is encountered!");
 
});
 
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener("dragover", (e) => {
        e.preventDefault(); //Drop EventListener will not work if don't prevent dragover's default behavior;
        console.log("Drag Over");
    });
 
    whiteBox.addEventListener("dragenter", () => {
        console.log("Drag Enter");
    });
 
    whiteBox.addEventListener("dragleave", () => {
        console.log("Drag Leave");
    });
 
    whiteBox.addEventListener("drop", (e) => {
        e.target.appendChild(imgBox);
        console.log("Drop");
    });
}
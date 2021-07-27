const pe = document.querySelector(".pe");
const pe1 = document.querySelector(".pe1");
const lect = document.querySelector(".lect");
const lect1 = document.querySelector(".lect1");

lect.onclick = () => {
    pe.style.display = "block"

    setTimeout(() => {
        pe.style.display = "none"
    },3000);
}

lect1.onclick = () => {
    pe1.style.display = "block"

    setTimeout(() => {
        pe1.style.display = "none"
    },3000);  
}


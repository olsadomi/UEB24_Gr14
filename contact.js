function countchar() {
    const mesazhi = document.getElementById("mesazhi");
    const output = document.getElementById("charCount");
    output.textContent = mesazhi.value.length;
}
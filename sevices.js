const tab = document.getElementById('tab');
const tabContent = document.querySelector('#tab-content #tab-details');
const closeButton = document.querySelector('#close-button');

const details = [
    `<p>Mirë se vini në Hertz Car Hire. Në vitin 1918, themeluesi ynë, Walter Jacobs pati një ide të guximshme. Sot, me mbi 10,000 vendndodhje në 145 vende dhe 6 kontinente, ne jemi kompania më globale e makinave me qira në botë.</p>
    <p>Kontaktoni me kompaninë:</p>
    <address>Website: <a href="http://www.hertzalbania.com/">http://www.hertzalbania.com/</a></address>
    <address>Email: <a href="mailto:info@hertzalbania.com">info@hertzalbania.com</a></address>
    <address>Nr. tel: <a href="tel:+38344205877">+38344205877</a></address>
    <form>
        <fieldset>Paraqitni kerkesen tuaj:</fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <textarea placeholder="Shkruani kerkesen ketu..."></textarea>
        <button type="submit">Dergo</button>
    </form>`,

    `<p>Shërbimi miqësor, makinat e reja dhe çmimet e ulëta janë pjesë e ofertës sonë të përditshme. Pavarësisht nëse jeni duke marrë me qira një makinë për biznes ose kënaqësi, Europcar ka makinën e duhur me qira në Aeroportin e Prishtines për ju.</p>
    <p>Kontaktoni me kompaninë:</p>
    <address>Website: <a href="https://www.cheap-auto-rentals.com">https://www.cheap-auto-rentals.com</a></address>
    <address>Email: <a href="mailto:info@europcar.com.al">info@europcar.com.al</a></address>
    <address>Nr. tel: <a href="tel:+38349125875">+38349125875</a></address>
    <form>
        <fieldset>Paraqitni kerkesen tuaj:</fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <textarea placeholder="Shkruani kerkesen ketu..."></textarea>
        <button type="submit">Dergo</button>
    </form>`,

    `<p>Mirë se vini në AVIS. Rent a Car në Prishtina Airport, (PA) me Avis Rent a Car. Zgjidhni nga një sërë opsionesh te makinave speciale lokale.</p>
    <p>Kontaktoni me kompaninë:</p>
    <address>Website: <a href="http://www.avis.al/">http://www.avis.al/</a></address>
    <address>Email: <a href="mailto:info@avis.al">info@avis.al</a></address>
    <address>Nr. tel: <a href="tel:+38348205333">+38348205333</a></address>
    <form>
        <fieldset>Paraqitni kerkesen tuaj:</fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <textarea placeholder="Shkruani kerkesen ketu..."></textarea>
        <button type="submit">Dergo</button>
    </form>`
];

function showDetails(index) {
    console.log(`Button clicked! Index: ${index}`);
    tabContent.innerHTML = details[index];
    tab.style.display = "flex";
}


closeButton.addEventListener("click", ()=>{
    tab.style.display = "none";
})

window.addEventListener("click", (event) => {
    if(event.target === tab) {
        tab.style.display = "none";
    }
})
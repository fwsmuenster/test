var side = 1;
var adminmode = false;
var admin = document.getElementById("admin");
var acht = document.getElementById("acht");
var faq = document.getElementById("faq");
var roles = document.getElementById("cast-section");
var tableroles = document.getElementById("tableroles");
var timer = document.getElementById("timer");
var infobox = document.getElementById("info-box");
var story = document.getElementById("story");
var datenschutz = document.getElementById("datenschutz");
var preview = document.getElementById("preview");
var locationsection = document.getElementById("location-section");
var timerundheader = document.getElementById("timerundheader");
const galerieContainer = document.getElementById('foto-galerie');
window.addEventListener("load", () => {
    setTimeout(() => document.getElementById("loader-wrapper").classList.add("loader-hidden"), 500);
});

// Liste deiner Termine (chronologisch sortiert)
let eventDates = [
    new Date("17 April, 2026 13:40:00").getTime(),
    new Date("8 May, 2026 19:30:00").getTime(),
    new Date("9 May, 2026 19:30:00").getTime(),
    new Date("10 May, 2026 16:00:00").getTime()
];

const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    
    // Prüfen, ob noch Termine in der Liste sindufführungen
    if (eventDates.length === 0) {
        document.getElementById("timer").innerHTML = "Keine weiteren Aufführungen!";
        clearInterval(timerInterval);
        return;
    }

    let diff = eventDates[0] - now;

    // Wenn das aktuelle Datum erreicht ist
    if (diff <= 0) {
        
        eventDates.shift(); // Entfernt das erste (abgelaufene) Datum aus der Liste
        
        // Falls nach dem Entfernen noch Daten da sind, Diff sofort aktualisieren
        if (eventDates.length > 0) {
            diff = eventDates[0] - now;
        } else {
            return; // Beendet den Durchlauf, falls Liste leer
        }
    }

    // Zeit-Berechnung (wie gehabt)
    var d = Math.floor(diff / 86400000), 
        h = Math.floor((diff % 86400000) / 3600000), 
        m = Math.floor((diff % 3600000) / 60000), 
        s = Math.floor((diff % 60000) / 1000);

    document.getElementById("timer").innerHTML = `Nächste Aufführung in:<br> ${d}d ${h}h ${m}m ${s}s`;
}, 1000);


/*
const eventDate = new Date("8 May,2026 19:30:00").getTime();
setInterval(() => {
    var diff = eventDate - new Date().getTime();
    var d = Math.floor(diff / 86400000), h = Math.floor((diff % 86400000) / 3600000), 
          m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
    document.getElementById("timer").innerHTML = `Noch ${d} Tage ${h} Stunden ${m} Minuten ${s} Sekunden`;
    if(eventDate == new Date().getTime()) {
        const eventDate = new Date("8 May, 2026 19:30:00").getTime();
        alert("TEst");
    }
}, 1000);

*/

/*const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
    themeBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️ Hell" : "🌙 Dunkel";
};
*/
const cast = [
    {order: "1", name: "Toni/Charlotte", rolle: "Mister Fogg", info: "Mister Phileas Fogg ist ein reicher englischer Gentleman der die Wette annimmt in 80 Tagen um die Erde zu reisen. Auf der Reise lernt er auch seine zukünftige Ehefrau kennen.", img: "bilder/bild.svg" },
    {order: "2", name: "Julian/Jo", rolle: "Passepartout", info: "Ich heiße Jean Passepartout. Den Spitznamen 'Passepartout' habe ich bekommen weil ich aus jeder Situation herauskomme. Ich bin stolzer und treuer Franzose und bin anpassungsfähig. Außerdem bin ich viel gereist und habe an vielen Stellen gearbeitet. Jetzt abeite ich beim exzentrischen Fogg und hoffe da Ruhe zu finden.", img: "bilder/bild.svg" },
    {order: "6", name: "Noah/Anastasia", rolle: "Sullivan", info: "Hallo ich bin Sullivan und bin Mitglied beim Club der exzentrischen. Ich bin sehr skeptisch nachdem Mr Fogg uns exzentrischen von der Wette erzählt hat und glaube nicht an ihn. ", img: "bilder/bild.svg" },
    {order: "17", name: "Noah/Florin", rolle: "Batulcar", info: "Guten Tag ich bin Zirkusdirektor Batulcar. In meinem Zirkus gibt es zum Bsp: den kleinsten Affen der Welt oder den größte Elefanten der Welt.", img: "bilder/bild.svg" },
    {order: "0", name: "Angelo/Mika/Hannah/Lena", rolle: "Regisseur/Produzent", info: "Wir drehen eine Serie mit dem Namen: 'In 80 Tagen um die Welt'. Wir erzählen die Die Szenen weiter die als Theaterstück schwer umzusetzen sind. Außerdem geben wir kleinere Informationen zu den Hauptdarstellern.", img: "bilder/bild.svg" },
    {order: "3", name: "Jakob/Raphael", rolle: "Fix", info: "Mein Name ist Fix. Ich bin Agent von Scotland Yard und versuche den Bankräuber zu fassen der die Bank von England überfallen hat.", img: "bilder/bild.svg" },
    {order: "7", name: "Niclas/Florin", rolle: "Kapitän Speedy", info: "Kapitän Speedy gehört die Henriette. Er verkauft sie an Herrn Fogg für 60 Tausend Dollar. Außerdem bezahlt er seine Mannschaft nicht immer pünktlich.", img: "bilder/bild.svg" },
    {order: "8", name: "Robert/Lennart", rolle: "Stuart", info: "Good Morning ich bin Stuart und Mitglied im Club der Exzentrischen. Ich bin verwöhnt und Luxus-süchtig.", img: "bilder/bild.svg" },
    {order: "9", name: "Malte/Fin", rolle: "Ralph", info: "Ralph ist ein Mann aus dem Club der Exzentrischen. Er ist Reich und interresiert sich für Neues. Er glaubt nicht, dass Fogg die Reise schafft. Er ist Ruhig und spricht sachlich.", img: "bilder/bild.svg" },
    {order: "10", name: "Malte/Mavie", rolle: "Cromarty", info: "Cromarty ist ein Ex-soldat aus dem Stück. Er hilft Phileas Fogg und seinen Freunden kurz auf ihrer Reise. Er ist mutig, ruhig und Zuverlässig.", img: "bilder/bild.svg" },
    {order: "11", name: "Bela/Lamia", rolle: "Archibald", info: "Archibald Corsican ist ein Amerikaner und dem Club 'Die Exzentrischen' beizutreten. Zuerst wurde er abgelehnt, doch dann will er sich nochmal reinschmuggeln indem er Fogg auf seiner Reise begleitet.", img: "bilder/bild.svg" },
    {order: "12", name: "Mavie/Lenja", rolle: "Dolly", info: "Dolly ist ein Dienstmädchen aus London. Sie arbeitet im Club der Exzentrischen. Sie hat während ihrer Arbeit Passepartout kennengelernt und sich mit ihm angefreundet.", img: "bilder/bild.svg" },
    {order: "13", name: "Jonte/Jonna", rolle: "Konsul", info: 'Der Konsul vergibt ein Visum an Herrn Fogg und ist sehr ordentlich. Er misstraut Fix der Herrn Fogg verdächtigt.', img: "bilder/bild.svg" },
    {order: "14", name: "Jona/Leander", rolle: "Flanagen", info:  "Flanagan ist im Club der exzentrischen. Die anderen Exzentrischen mögen ihn nicht so gerne wegen seiner abgehobenen art.", img: "bilder/bild.svg" },
    {order: "15", name: "Carl/Richard", rolle: "Wärter", info:  "Der Wärter ist eigentlich unwichtig für das Stück aber trotzdem der Kontakt zur außenwelt für Fogg.", img: "bilder/bild.svg" },
    {order: "16", name: "Carl/Ana", rolle: "Kneipenbesitzer", info:  "Der Kneipenbesitzer ist der Besitzer der Opiumhöhle und sehr freundlich. Er hilft seinen Besuchern beim Rauchen.", img: "bilder/bild.svg" },
    {order: "4", name: "Ana/Milla", rolle: "Aouda", info:  "Aouda wurde von Mister Fogg vor dem verbrennen gerettet. Nach langer Zeit trifft sie Nemea wieder und begleiten zusammen Mister Fogg auf seiner Reise. Am Ende des Stücks heiratet Aouda Mister Fogg.", img: "bilder/bild.svg" },
    {order: "18", name: "", rolle: "Elefanten<br>besitzer", info:  "Der Elefantenbesitzer verkauft seinen Elefanten an die Reisegruppe und führt sie durch Indien.", img: "bilder/bild.svg" },
    {order: "19", name: "", rolle: "Sargant", info:  "Meine Aufgabe den Zug vor Räubern und anderen gefahren zu schützen. Ich habe 100 Mann die mir dauerhaft bei den Aufgaben helfen. Außerdem habe ich Fogg mit seinem Problem geholfen.", img: "bilder/bild.svg" },
    {order: "20", name: "", rolle: "Hauptmann", info:  "", img: "bilder/bild.svg" },
    {order: "5", name: "Jonna/Lena", rolle: "Nemea", info: "Nemea ist die Schwester von Aouda nach etwa einem Drittel des Stückes, trifft sie auf die Reisegesellschaft und schließt sich ihr an.", img: "bilder/bild.svg" }
];

/*<img src="${p.img}" class="cast-image" alt="${p.name}">*/
cast.sort((a, b) => a.order - b.order);
const container = document.getElementById('castContainer');
cast.forEach(p => {
    const card = document.createElement('div');
    card.className = 'cast-card';
    card.innerHTML = `
        
        <div style="padding:15px;text-align:center"><h3>${p.rolle}</h3><p><strong style:"text-align:center">${p.name}</strong></p></div>
        <div class="description">${p.info}</div>`;
    card.onclick = () => card.classList.toggle('active');
    container.appendChild(card);
});


function changeside(sidetemporary) {
    if (sidetemporary == 1) {
        roles.style.display = "none";
        timerundheader.style.display = "block";
        timer.style.display = "block";
        infobox.style.display = "none";
        locationsection.style.display = "none";
        preview.style.display = "block";
        story.style.display = "none";
        tableroles.style.display = "none";
        galerieContainer.style.display = "none";
        faq.style.display = "none";
        label.innerHTML = "In 80 Tagen um die Welt";
        acht.style.display = "";
        datenschutz.style.display = "none";
    }
    if (sidetemporary == 2) {
        roles.style.display = "block";
        timerundheader.style.display = "none";
        timer.style.display = "none";
        infobox.style.display = "none";
        locationsection.style.display = "none";
        preview.style.display = "none";
        story.style.display = "none";
        tableroles.style.display = "";
        galerieContainer.style.display = "none";
        faq.style.display = "none";
        label.innerHTML = "Rollen";
        acht.style.display = "none";
        datenschutz.style.display = "none";
    }
    if (sidetemporary == 3) {
        roles.style.display = "none";
        timerundheader.style.display = "block";
        timer.style.display = "block";
        infobox.style.display = "block";
        locationsection.style.display = "block";
        preview.style.display = "none";
        story.style.display = "none";
        tableroles.style.display = "none";
        galerieContainer.style.display = "none";
        faq.style.display = "";
        label.innerHTML = "Infos und FAQ";
        acht.style.display = "none";
        datenschutz.style.display = "none";
    }
    if (sidetemporary == 4) {
        roles.style.display = "none";
        timerundheader.style.display = "none";
        timer.style.display = "none";
        infobox.style.display = "none";
        locationsection.style.display = "none";
        preview.style.display = "none";
        story.style.display = "block";
        tableroles.style.display = "none";
        galerieContainer.style.display = "none";
        faq.style.display = "none";
        label.innerHTML = "Story";
        acht.style.display = "none";
        datenschutz.style.display = "none";
    }
    if (sidetemporary == 5) {
        roles.style.display = "none";
        timerundheader.style.display = "none";
        timer.style.display = "none";
        infobox.style.display = "none";
        locationsection.style.display = "none";
        preview.style.display = "none";
        story.style.display = "none";
        tableroles.style.display = "none";
        galerieContainer.style.display = "block";
        faq.style.display = "none";
        label.innerHTML = "Galerie";
        acht.style.display = "none";
        datenschutz.style.display = "none";
    }
    if (sidetemporary == 6) {
        roles.style.display = "none";
        timerundheader.style.display = "none";
        timer.style.display = "none";
        infobox.style.display = "none";
        locationsection.style.display = "none";
        preview.style.display = "none";
        story.style.display = "none";
        tableroles.style.display = "none";
        galerieContainer.style.display = "none";
        faq.style.display = "none";
        label.innerHTML = "Datenschutz";
        acht.style.display = "none";
        datenschutz.style.display = "block";
    }

}

changeside(1);

/*document.getElementById('addToCalendar').onclick = () => {
    const icsMsg = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:20240615T193000\nSUMMARY:Theater: Der Große Auftritt\nLOCATION:Stadttheater Berlin\nEND:VEVENT\nEND:VCALENDAR";
    const blob = new Blob([icsMsg], {type: "text/calendar"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "theater.ics"; a.click();
};*/


//document.getElementById('whatsappShare').href = `https://wa.me{encodeURIComponent("Schau dir dieses Theaterstück an: " + window.location.href)}`;



const meineFotos = [
  { url: 'bilder/bild.svg', info: 'Lorem Ipsum' },
  { url: 'bilder/titelbildtest.svg', info: 'Custom Titelbild' }
];


const modal = document.getElementById('modal');

meineFotos.forEach(foto => {
  const img = document.createElement('img');
  img.src = foto.url;
  img.classList.add('galerie-item');
  

  img.onclick = () => {
    document.getElementById('modal-img').src = foto.url;
    document.getElementById('modal-text').innerText = foto.info;
    modal.style.display = "flex";
  };
  
  galerieContainer.appendChild(img);
});
var password = "6767676767";


function closeModal() {
  modal.style.display = "none";
}

function sixseven() {
    while (true) {
    alert("Six Seven");
    }
}
if (adminmode) {
    
}

const daten = [
  { name: "Charlotte", rolle: "Fogg", name2: "Toni" },
  { name: "Jo", rolle: "Passepartout", name2:"Julian" },
  { name: "Bela", rolle: "Archibald", name2:"Lamia" },
  { name: "Jakob", rolle: "Fix", name2:"Raphael" },
  { name: "Milla", rolle: "Aouda", name2:"Ana" },
  { name: "Lena", rolle: "Nemea", name2:"Jonna" },
  { name: "Angelo", rolle: "Regisseur", name2:"Hannah" },
  { name: "Mika", rolle: "Produzent", name2:"Lena" },
  { name: "", rolle: "Herr 1", name2:"" },
  { name: "Jona", rolle: "Flanagan", name2:"Leander" },
  { name: "Lennart", rolle: "Stuard", name2:"Robert" },
  { name: "Malte", rolle: "Ralph", name2:"Fin" },
  { name: "Noah", rolle: "Sullivan", name2:"Anastasia" },
  { name: "Mavie", rolle: "Dolly", name2:"Lenja" },
  { name: "Mavie", rolle: "Cromarty", name2:"Malte" },
  { name: "Filipa", rolle: "Dame 1", name2:"" },
  { name: "Richard", rolle: "Bote", name2:"Filipa" },
  { name: "", rolle: "Herr 2", name2:"Mika" },
  { name: "Jonna", rolle: "Konsul", name2:"Jonte" },
  { name: "Lenja", rolle: "Elefanten-<br>besitzer*in", name2:"Zena" },
  { name: "Ana", rolle: "Kneipen-<br>besitzer*in", name2:"Carl" },
  { name: "Slavin", rolle: "Opium-<br>raucher*in 1", name2:"Carla" },
  { name: "Fin", rolle: "Opium-<br>raucher 2", name2:"Leander" },
  { name: "Florin", rolle: "Batulcar", name2:"Noah" },
  { name: "Lennart", rolle: "Clown 1", name2:"Slavin" },
  { name: "Toni", rolle: "Clown 2", name2:"Milla" },
  { name: "", rolle: "Dame 2", name2:"" },
  { name: "Zena", rolle: "Haupt-<br>mann/frau", name2:"Jonte" },
  { name: "Raphael", rolle: "Sergant", name2:"Jona" },
  { name: "Niclas", rolle: "Speedy", name2:"Florin" },
  { name: "Carl", rolle: "Wärter", name2:"Richard" },
  { name: "Julian", rolle: "Gefangener 1", name2:"" },
  { name: "Hannah", rolle: "Mädchen 1", name2:"" },
  { name: "Lamia", rolle: "Schaffner", name2:"Niclas" },
  { name: "Zena", rolle: "Kellner", name2:"Mina" },
  { name: "Mina", rolle: "Brahmane 1", name2:"" },
  { name: "Robert", rolle: "Brahmane 2", name2:"" },
  { name: "", rolle: "Räuber 1", name2:"" },
  { name: "", rolle: "Räuber 2", name2:"" },
  { name: "", rolle: "Räuber 3", name2:"" },
  { name: "", rolle: "Räuber 4", name2:"" },
  { name: "", rolle: "Räuber 5", name2:"" }
];

const tbody = document.querySelector("#tableroles tbody");

daten.forEach(person => {
  const zeile = `<tr>
    <td>${person.name}</td>
    <td>${person.rolle}</td>
    <td>${person.name2}</td>
  </tr>`;
  tbody.innerHTML += zeile;
});




function submit(){
    var input = document.getElementById("admin").value;
    
    if (input == password) {
        document.getElementById("admin").style.display = "none";
        document.getElementById("admin2").style.display = "none";
        alert("Admin mode ON");
        adminmode = true;
        story.innerHTML = "<a href='test.html'>Hier Klicken ADMIN!</a>"
    } else {
        sixseven();
    }
}


// Startet die Animation sofort
/*confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});*/

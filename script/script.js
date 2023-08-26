let text = "J'ai découvert la programmation en STI2D, notamment à travers l'utilisation d'Arduino et les bases du HTML. Dès le début, <span>j'ai été captivé par ces concepts</span>, ce qui m'a poussé à <span>poursuivre dans cette voie</span>. Après l'obtention de mon Baccalauréat STI2D, j'ai choisi de <span>m'orienter vers la programmation de jeux vidéo</span>. J'ai ainsi rejoint l'école Creajeux à Nîmes, où j'ai véritablement <span>entamé mon apprentissage du développement en utilisant Lua</span>. Cette expérience a été enrichissante, mais je ressentais un <span>besoin d'aventure</span>. À l'époque âgé de 19 ans, j'ai alors <span>découvert le programme de formation de l'école 42</span>. Quelques mois plus tard, j'ai pris la décision de partir pour Lyon, <span>en totale indépendance</span>, afin d'<span>entamer mon parcours au sein de 42</span>. Deux années se sont écoulées, et me voilà <span>de retour à Montpellier, porteur d'une solide expertise en langages C et C++</span> acquise au cours de mon cursus. C'est à ce moment que j'ai choisi de me <span>plonger dans le domaine de la cybersécurité</span>, dans le but <span>d'en faire ma spécialité.</span>"
let presentation = document.getElementById("presentation");
let en_savoir_plus = document.getElementById("en_savoir_plus");

en_savoir_plus.addEventListener("click", function() {
	presentation.innerHTML = text;
	en_savoir_plus.style.display = "none";
	applyStylesBasedOnWindowSize();
});

alert("Responsive design : En cours de développement");
let image = document.getElementById("image");

function applyStylesBasedOnWindowSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768 && screenWidth < 1024) {
        image.style.display = "none";
    }
}
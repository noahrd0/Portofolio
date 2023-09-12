// Boutons de la barre
let a2019 = document.getElementById("a2019");
let a2020 = document.getElementById("a2020");
let a2021 = document.getElementById("a2021");
let a2022 = document.getElementById("a2022");
let a2023 = document.getElementById("a2023");
let a2024 = document.getElementById("a2024");
// Elements txt
let localisation = document.getElementById("localisation");
let ecole = document.getElementById("ecole");
let diplome = document.getElementById("diplome");
let formation = document.getElementById("formation");
let annee = document.getElementById("annee");

// Const pour les années
// 2019
const localisation2019 = "Localisation : Montpellier";
const ecole2019 = "École : Lycée Jean-François Champollion";
const diplome2019 = "Diplôme : Baccalauréat STI2D";
const formation2019 = "Mon parcours dans le monde de la programmation a débuté au sein de la filière Sciences et Technologies de l'Industrie et du Développement Durable (STI2D). Ce fut une étape formatrice où j'ai pu explorer les fondamentaux de la programmation et expérimenter avec des technologies telles qu'Arduino. Lors de ces années, j'ai été initié aux concepts de base du HTML et j'ai eu la chance de manipuler des plateformes comme Arduino, qui m'ont ouvert les portes de la programmation embarquée. La capacité de créer des systèmes interactifs et de contrôler des composants électroniques grâce au code a captivé mon attention dès le départ. C'est véritablement cette expérience qui a éveillé mon intérêt pour la programmation. Chaque ligne de code devenait une opportunité de créer quelque chose d'unique et fonctionnel. J'ai rapidement compris que la programmation offrait un moyen puissant de donner vie à des idées et de résoudre des problèmes de manière créative. Cette période de découverte en STI2D a jeté les bases de ma passion pour la programmation et a défini la direction que je souhaitais prendre dans mon parcours académique. Elle m'a montré le potentiel infini de la programmation et a renforcé mon désir de poursuivre cette voie afin de repousser toujours plus loin les limites de la création technologique."
// 2020
const localisation2020 = "Localisation : Nîmes";
const ecole2020 = "École : Créajeux"
const diplome2020 = "Diplôme : ...";
const formation2020 = "Mon immersion au sein de Creajeux m'a offert une opportunité exceptionnelle de perfectionner mes compétences en programmation. J'ai plongé dans l'apprentissage approfondi du langage Lua, un outil puissant, tout en renforçant ma maîtrise des concepts mathématiques appliqués, indispensables dans la conception logique. Durant cette période, j'ai eu la chance de collaborer avec des passionnés partageant la même passion pour le développement. En travaillant en équipe, j'ai pu affiner ma capacité à communiquer efficacement et à coordonner nos efforts pour donner vie à des projets complexes. J'ai également développé des compétences essentielles en gestion du temps et en planification, en veillant à ce que chaque étape soit exécutée de manière efficace. Ces expériences de collaboration m'ont également permis d'apprendre à gérer les défis qui surviennent lors de la création de solutions innovantes. Pourtant, malgré l'enthousiasme de la communauté de Creajeux et l'aspect créatif du développement de jeux, j'ai découvert que ma passion pour la programmation dépassait le cadre du jeu vidéo en lui-même. Bien que j'apprécie jouer, mon intérêt pour la programmation réside davantage dans la résolution de problèmes complexes, la création de systèmes performants et l'exploration des vastes possibilités qu'offre le code. Cette prise de conscience m'a conduit à explorer d'autres facettes du développement informatique, m'ouvrant ainsi de nouvelles perspectives et défis passionnants."
// 2021
const localisation2021 = "Localisation : Lyon";
const ecole2021 = "École : 42";
const diplome2021 = "Diplôme : ...";
const formation2021 = "Ma première année au sein de l'école 42 a marqué une étape fondamentale dans mon parcours de programmation. Au cœur de cet environnement d'apprentissage intense et stimulant, j'ai été immergé dans un monde de découvertes et de défis continus. Au sein de l'école, j'ai acquis une expertise approfondie en shell, en langage C et en création de makefiles. Chaque ligne de code que j'ai écrit était une pièce du puzzle pour résoudre des problèmes complexes et construire des projets solides. La rigueur et la précision étaient primordiales. L'approche unique du peer-learning à 42 a ajouté une dimension nouvelle à mon parcours. La collaboration avec mes pairs m'a permis de comprendre différentes perspectives et d'apprendre de diverses approches pour aborder des défis de programmation. La communication claire et la capacité à expliquer des concepts complexes sont devenues des compétences indispensables, et j'ai rapidement réalisé que l'art de programmer s'étendait bien au-delà du code lui-même. L'école 42, réputée pour son approche pédagogique novatrice, a façonné ma manière de penser et d'aborder des problèmes. L'accent sur l'apprentissage autonome, la résolution de problèmes et l'adaptabilité m'a préparé à relever des défis techniques divers et à m'adapter rapidement à de nouvelles technologies. En somme, ma première année à 42 a été une expérience exigeante mais extrêmement gratifiante. Elle a renforcé ma passion pour la programmation, tout en me dotant des compétences essentielles et d'une mentalité qui continuent de me guider dans mon parcours professionnel.";
// 2022
const localisation2022 = "Localisation : Lyon";
const ecole2022 = "École : 42";
const diplome2022 = "Diplôme : ...";
const formation2022 = "Ma deuxième année à l'école 42 a été une période de consolidation et d'approfondissement de mes compétences en programmation. Guidé par la philosophie de l'école, j'ai continué à élargir mes horizons et à relever des défis techniques encore plus complexes. Au cours de cette année, j'ai été confronté à des projets plus ambitieux qui m'ont permis d'explorer de nouvelles facettes de la programmation. Les travaux en groupe m'ont enseigné la valeur de la collaboration et de l'échange d'idées, tout en m'offrant l'occasion d'apporter ma contribution à des projets d'envergure. La coordination, la communication et le partage des responsabilités étaient essentiels pour garantir le succès de nos réalisations collectives. Un aspect marquant de cette année a été mon introduction au langage C++. Cette extension naturelle de mes compétences en langage C m'a ouvert les portes vers la programmation orientée objet et les concepts avancés de ce langage. J'ai pu constater comment la transition vers le C++ m'a permis d'aborder les projets sous un angle différent, en utilisant des structures de données plus élaborées et en créant des programmes plus modulaires et flexibles. Ma deuxième année à 42 a été une période de croissance personnelle et professionnelle, où j'ai consolidé mes acquis tout en continuant à explorer de nouveaux domaines. L'école a su maintenir son engagement envers l'apprentissage autonome et l'adaptabilité, ce qui m'a permis de m'adapter à des contextes de plus en plus variés. "
// 2023
const localisation2023 = "Localisation : Montpellier"
const ecole2023 = "École : IPSSI";
const diplome2023 = "Diplôme : ...";
const formation2023 = "En cette nouvelle étape de mon parcours, l'année 2023 a marqué un tournant décisif. Ayant acquis une solide base de compétences et d'expériences dans le domaine de la programmation, j'ai pris la décision de revenir à Montpellier pour poursuivre mon cheminement professionnel. Mon objectif était clair : approfondir mes connaissances et me spécialiser dans un domaine qui me passionne tout particulièrement, la cybersécurité.";
// 2024
const localisation2024 = "Localisation : ...";
const ecole2024 = "École : ...";
const diplome2024 = "Diplôme : ...";
const formation2024 = "...";

a2019.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.remove("checked");
	a2021.classList.remove("checked");
	a2022.classList.remove("checked");
	a2023.classList.remove("checked");
	a2024.classList.remove("checked");

	annee.innerHTML = "2019";
	localisation.innerHTML = localisation2019;
	ecole.innerHTML = ecole2019;
	diplome.innerHTML = diplome2019;
	formation.innerHTML = formation2019;
});

a2020.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.add("checked");
	a2021.classList.remove("checked");
	a2022.classList.remove("checked");
	a2023.classList.remove("checked");
	a2024.classList.remove("checked");

	annee.innerHTML = "2020";
	localisation.innerHTML = localisation2020;
	ecole.innerHTML = ecole2020;
	diplome.innerHTML = diplome2020;
	formation.innerHTML = formation2020;
});

a2021.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.add("checked");
	a2021.classList.add("checked");
	a2022.classList.remove("checked");
	a2023.classList.remove("checked");
	a2024.classList.remove("checked");

	annee.innerHTML = "2021";
	localisation.innerHTML = localisation2021;
	ecole.innerHTML = ecole2021;
	diplome.innerHTML = diplome2021;
	formation.innerHTML = formation2021;
});

a2022.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.add("checked");
	a2021.classList.add("checked");
	a2022.classList.add("checked");
	a2023.classList.remove("checked");
	a2024.classList.remove("checked");

	annee.innerHTML = "2022";
	localisation.innerHTML = localisation2022;
	ecole.innerHTML = ecole2022;
	diplome.innerHTML = diplome2022;
	formation.innerHTML = formation2022;
});

a2023.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.add("checked");
	a2021.classList.add("checked");
	a2022.classList.add("checked");
	a2023.classList.add("checked");
	a2024.classList.remove("checked");

	annee.innerHTML = "2023";
	localisation.innerHTML = localisation2023;
	ecole.innerHTML = ecole2023;
	diplome.innerHTML = diplome2023;
	formation.innerHTML = formation2023;
});

a2024.addEventListener("click", () => {
	a2019.classList.add("checked");
	a2020.classList.add("checked");
	a2021.classList.add("checked");
	a2022.classList.add("checked");
	a2023.classList.add("checked");
	a2024.classList.add("checked");

	annee.innerHTML = "2024";
	localisation.innerHTML = localisation2024;
	ecole.innerHTML = ecole2024;
	diplome.innerHTML = diplome2024;
	formation.innerHTML = formation2024;
});




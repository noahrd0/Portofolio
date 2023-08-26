let box = document.getElementById("box");

const section_message = `
<section class="formulaire">
<img src="images/3dicons/plane.png" alt="Icone papper plane">
	<div>
		<form action="">
			<div class="both">
				<input type="text" name="name" id="name" placeholder="Nom" required>
				<input type="email" name="email" id="email" placeholder="Email" required>
			</div>
			<textarea name="message" id="message" cols="50" rows="10" placeholder="Message" required></textarea>
			<input type="submit" value="Envoyer">
		</form>
	</div>
</section>
`;

const section_email = `
<section class="others">
	<img src="images/3dicons/email.png" alt="Icone lettre">
	<div>
		<h2>Contactez-moi par email</h2>
		<p id="copy-btn">no.radal1203@gmail.com</p>
	</div>
</section>
`;

const section_linkedin = `
<section class="others">
	<img src="images/3dicons/linkedin.png" alt="Icone LinkedIn">
	<div>
		<h2>Visitez mon profil LinkedIn</h2>
		<p>Cliquez-ici</p>
	</div>
</section>
`;

const section_github = `
<section class="others">
	<img src="images/3dicons/github.png" alt="Icone Github">
	<div>
		<h2>Visitez mon profil Github</h2>
		<p>Cliquez-ici</p>
	</div>
</section>
`;

const section_twitter = `
<section class="others">
	<img src="images/3dicons/twitter.png" alt="Icone Twitter">
	<div>
		<h2>Venez me suivre sur Twitter</h2>
		<p>Cliquez-ici</p>
	</div>
</section>
`;

let section_btn = document.querySelectorAll(".links-container > div");
let message_btn = document.getElementById("message-btn");
let email_btn = document.getElementById("email-btn");
let linkedin_btn = document.getElementById("linkedin-btn");
let github_btn = document.getElementById("github-btn");
let twitter_btn = document.getElementById("twitter-btn");

message_btn.addEventListener("click", () => {
	box.innerHTML = section_message;
	section_btn.forEach(btn => {
		btn.classList.remove("active");
	});
	message_btn.classList.add("active");
});

email_btn.addEventListener("click", () => {
	box.innerHTML = section_email;
	section_btn.forEach(btn => {
		btn.classList.remove("active");
	});
	email_btn.classList.add("active");
});

linkedin_btn.addEventListener("click", () => {
	box.innerHTML = section_linkedin;
	section_btn.forEach(btn => {
		btn.classList.remove("active");
	});
	linkedin_btn.classList.add("active");
});

github_btn.addEventListener("click", () => {
	box.innerHTML = section_github;
	section_btn.forEach(btn => {
		btn.classList.remove("active");
	});
	github_btn.classList.add("active");
});

twitter_btn.addEventListener("click", () => {
	box.innerHTML = section_twitter;
	section_btn.forEach(btn => {
		btn.classList.remove("active");
	});
	twitter_btn.classList.add("active");
});

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("https://media.licdn.com/dms/image/C4D03AQFr6jviGXIouw/profile-displayphoto-shrink_400_400/0/1663487239394?e=1708560000&v=beta&t=Tt1u8qO2Q2GefhvkiOjtR2P6hcszalf4Y9n2o5BkvAg")',
		name: "Anurag Mishra",
		profession: "Principal Software Engineer, Connectwise",
		description:
			"Karthik is productive person and is a multi-skilled person with vast knowledge. He always took the task with utmost sincerity and maintained high quality deliverables . He has an exceptional Programming , troubleshooting and analytical skill. He makes sure all the deadlines are met, and makes sure that whatever project he is working on meets the highest standards"
	},

	{
		photo:
			"url('https://media.licdn.com/dms/image/D4D03AQHW9oTuAtEtQg/profile-displayphoto-shrink_800_800/0/1668781522313?e=1708560000&v=beta&t=yj_j6ws6QCP718XW4hGJnGpVetcqgk__kRoXAMTY1gQ')",
		name: "Ameya Mahajani",
		profession: "Senior Software Engineer II, Connectwise",
		description:
			"Karthik is an all-rounder with vast practical knowledge about Python and Airflow. His analytical and programming skills are commendable. He ensures quality while giving deliveries of projects on time. He is a very approachable person."
	},

	{
		photo:
			"url('https://media.licdn.com/dms/image/D4D03AQHUT0r39pHsQQ/profile-displayphoto-shrink_800_800/0/1686860793234?e=1708560000&v=beta&t=-n39O1VnFFDnAbTrrzhNLGH6_SlS_y7HCcaxomHjS34')",
		name: "Jane Dsouza",
		profession: "Software Engineer at Payrails",
		description:
			"I had the opportunity to interact with Karthikraj when he interned with us at ConnectWise in the first quarter of 2021 as I guided him on his project. His enthusiasm for experimenting with new technologies and sharing his learnings with others set him apart from the rest. He was a team player all through the internship, constantly focussed on the goal of delivering quality in his project. Having joined us full time here at CW, he has been quick to shoulder greater responsibilities and has proved to be a valuable asset to the organisation. He's been an amazing colleague to work with and I wish him the best!"
	},

	{
		photo:
			"url('https://media.licdn.com/dms/image/C4D03AQGerEIA1BGXlA/profile-displayphoto-shrink_800_800/0/1652532361236?e=1708560000&v=beta&t=8n09pBMITtibNeYuKawF1wl9_BDGvB6gK-d4LIH-vwU')",
		name: "Nirbhey Singh Pahwa",
		profession: "Manager of Customer Success Managers at Cloud Counselage",
		description:
			"For the one-year Karthikraj had been with us at Cloud Counselage, he had shown uttermost professionalism and commitment towards his work as an intern. In addition to his primary project of Android Mobility, he had shown his leadership skills by guiding a group of our interns for a few months. I would like to recommend him to organisations looking for dependable developers."
	},
	{
		photo:
			'url("https://media.licdn.com/dms/image/C4E03AQGuBU_Nua9Ojg/profile-displayphoto-shrink_800_800/0/1622492593751?e=1708560000&v=beta&t=OCJfrkXOrBv0zYG45Q3vRH_DRFwfjzFLi_k6e6TTjRA")',
		name: "Indranil Chandra",
		profession: "Principal ML & Data Engineer at Upstox",
		description:
			"Karthikraj attended one of the training programs I conducted on Deep Learning. He was extremely diligent and focused on deep diving into DL techniques. Even post the program, Karthikraj has continued his learning journey and constantly reaches out for help whenever he is stuck proving his self drive and zeal towards learning DL techniques."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 4) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 4;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);



window.addEventListener("resize", () => {
	description.style.height = "100%";
});


let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(setNextCardRight, 2000); // Change the interval as per your requirement
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Start the automatic sliding when the page loads
startAutoSlide();

// Add mouseover and mouseout event listeners to pause and resume the auto sliding
imgDiv.addEventListener('mouseover', stopAutoSlide);
imgDiv.addEventListener('mouseout', startAutoSlide);
personName.addEventListener('mouseover', stopAutoSlide);
profession.addEventListener('mouseover', stopAutoSlide);
description.addEventListener('mouseover', stopAutoSlide);
personName.addEventListener('mouseout', startAutoSlide);
profession.addEventListener('mouseout', startAutoSlide);
description.addEventListener('mouseout', startAutoSlide);
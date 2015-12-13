/*debounce function*/

var debounceNav = {};
debounceNav.debounce = function(func, wait, immediate){
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if(!immediate){
        func.apply(context,args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 200);
    if(callNow){
      func.apply(context,args);
      }
  };
};
var updateNav = debounceNav.debounce(function(){
  $(document).scroll(function(){
    if ($(window).scrollTop() > 40) {
      $('.nav-bar').addClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '1vw').css('font-size','1.5vw');
      $('.contact-button').css('top','1.5vw');
    }
  else if ($(window).scrollTop() === 0) {
      $('.nav-bar').removeClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '5vw').css('font-size','3vw');
      $('.contact-button').css('top','7.5vw');
    }
  });
}, 200, true);
window.addEventListener("scroll", updateNav);

var app = angular.module("MintzApp", ['ngMaterial','ngRoute','ngAnimate']);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: "introduction.html",
      controller: "ModuleController as module",
      title: "Introduction to Module 3"
    })
    .when('/activity1',{
      templateUrl:"activity1.html",
      controller: "Activity1Controller as activity",
      title: "Activity 1"
    });
});
//to keep whitespace use \n\n, break quotes w \
app.controller("ModuleController", function() {
  "use strict";
  this.introduction = "The collision of cultures that took place in 1492 has consequences that are still unfolding today. New foods reshaped the diets of the Eastern and Western Hemispheres.  Sugar, coffee, cattle, pigs, and sheep reached the Americas, while corn, tobacco, tomatoes, and potatoes came to Africa, Asia, and Europe. The New World environment was transformed as Europeans cleared vast tracts of forested land and introduced cattle, goats, horses, sheep, and swine as well as Old World grasses and weeds. The European discovery of the New World also resulted in the sharpest population decline in human history, as millions of Indians died from smallpox, measles, and other epidemic diseases. With the New World population decimated by disease, Europeans gradually introduced a new labor force: enslaved Africans. By the late eighteenth century, Europeans were debating whether Columbus's discovery of the New World had added to or subtracted from human happiness.";
  this.worlds_collide = "Many of Hollywood’s most popular films deal with encounters with aliens. Think Avatar, Star Wars, E.T., and Independence Day.  In this module, we will examine a real life encounter between among aliens who never imagined the other’s existence. \n\nThis is a story far more interesting than anything Hollywood could imagine.  It is also a story of death and destruction on a scale beyond even Hollywood’s imaginings.";
  this.significance = "The four hundredth anniversary of Christopher Columbus's \"discovery\" of the New World was commemorated with a massive \"Columbian Exhibition\" in Chicago in 1893. The exhibition celebrated Columbus as a man of mythic stature, an explorer and discoverer who carried Christian civilization across the Atlantic Ocean and initiated the modern age. \n\nThe five hundredth anniversary of Columbus's first voyage of discovery was treated quite differently. Many peoples of indigenous and African descent identified Columbus with imperialism, colonialism, and conquest. The National Council of Churches adopted a resolution calling October 12th a day of mourning for millions of indigenous people who died as a result of European colonization. \n\nMore than five hundred years after the first Spaniards arrived in the Caribbean, historians and the general public still debate Columbus's legacy. Should he be remembered as a great discoverer who brought European culture to a previously unknown world? Or should he be condemned as a man responsible for an \"American Holocaust,\" a man who brought devastating European and Asian diseases to unprotected native peoples, disrupted the American ecosystem, and initiated the Atlantic slave trade? What is Columbus's legacy--discovery and progress, or slavery, disease, and racial antagonism? \n\nTo confront such questions, one must first recognize that the encounter that began in 1492 among the peoples of the Eastern and Western Hemispheres was one of the truly epochal events in world history. This cultural collision not only produced an extraordinary transformation of the natural environment and human cultures in the New World, it also initiated far-reaching changes in the Old World as well. \n\nNew foods reshaped the diets of people in both hemispheres. Tomatoes, chocolate, potatoes, corn, green beans, peanuts, vanilla, pineapple, and turkey transformed the European diet, while Europeans introduced sugar, cattle, pigs, cloves, ginger, cardamon, and almonds to the Americas. Global patterns of trade were overturned, as crops grown in the New World---including tobacco, rice, and vastly expanded production of sugar--fed growing consumer markets in Europe. \n\nEven the natural environment was transformed. Europeans cleared vast tracks of forested land and inadvertently introduced Old World weeds. The introduction of cattle, goats, horses, sheep, and swine also transformed the ecology as grazing animals ate up many native plants and disrupted indigenous systems of agriculture. The horse, extinct in the New World for 10,000 years, transformed the daily existence of many indigenous peoples. The introduction of the horse encouraged many farming peoples to become hunters and herders. Hunters mounted on horses were also much more adept at killing game. \n\nDeath and disease--these too were consequences of contact. Diseases against which Indian peoples had no natural immunities caused the greatest mass deaths in human history. Within a century of contact, smallpox, measles, mumps, and whooping cough had reduced indigenous populations by 50 to 90 percent. From Peru to Canada, disease reduced the resistance that Native Americans were able to offer to European intruders. \n\nWith the Indian population decimated by disease, Europeans gradually introduces a new labor force into the New World: enslaved Africans. Between 1502 and 1870, when the Atlantic slave trade was finally suppressed, from ten to fifteen million Africans were shipped to the Americas. \n\nColumbus's voyage of discovery also had another important result: it contributed to the development of the modern concept of progress. To many Europeans, the New World seemed to be a place of innocence, freedom, and eternal youth. The perception of the New World as an environment free from the corruptions and injustices of European life would provide a vantage point for criticizing all social evils. So while the collision of three worlds resulted in death and enslavement in unprecedented numbers, it also encouraged visions of a more perfect future. \n\nColumbus's voyages represent one of the major discontinuities in human history. His voyages truly represented a historical watershed, with vast repercussions for all aspects of life in both the Old World and the New. The year 1492 - perhaps more than any other year in modern world history - was a truly landmark moment, carrying enormous implications for the natural environment, for intellectual thought, and for the international economy.";
  this.when_worlds_collide = "Many of Hollywood's most popular science fiction films--from The Day the Earth Stood Still to E.T.: The Extra-Terrestrial and Independence Day--examine encounters with aliens. In 1492, a \"close encounter of the 'third kind'\" (physical contact) actually took place, as groups of people who had never known of each others existence collided. \n\nLet’s take a look at how Hollywood and Europeans prior to 1492 imagined aliens.";
  this.cinematic_encounters = "Do Earthlings and aliens meet in peace, or do the aliens seek to enslave or exterminate the human race?\n\nSupposed sightings of flying saucers in 1947 ignited a frenzy of interest in Unidentified Flying Objects and aliens.\n\nSince the sci-fi heyday of the 1950s – a decade which saw both the dawn of the real-world space age, and a continually escalating threat of global nuclear war – mainstream cinema has been somewhat obsessed with the subject of alien invasion, offering as it does the opportunity for audiences to reflect on real-world crises while reveling in escapist spectacle.";
  this.earth_still = "An alien named Klaatu arrives in Washington, D.C. in a flying saucer. Even though he and his companions announce that they have come in peace, their arrival triggers panic. A nervous soldier shoots Klaatu, but he comes back to life and delivers a message from the Galactic Federation: Either Earth must live in peace under the rule of Klaatu’s robot servant Gort, or it will be destroyed.";
  this.war_worlds = "Earth is under attack in this updating of H.G. Wells’s science fiction tale to the Cold War era as invaders from another world target a small California town with autonomous probes and laser disintegration rays.";
  this.earth_flying_saucers = "Scientist Russell Marvin is on-hand when an alien spacecraft lands on earth. The aliens at first insist that they've come in peace, but Marvin suspects otherwise. Sure enough, the visitors eventually declare their intention to take over the earth within the next 60 days, adding that the military's weapons are useless against them. The two-month window gives Marvin and his cohorts plenty of time to build-up superweapon, and thus stave off the seven-saucer invasion force.";
  this.invasion_body_snatchers = "Emotionless aliens from outer space are using large seed pods to duplicate human bodies and take them over.";
  this.et = "An alien spacecraft on a scientific mission mistakenly left behind an aging botanist who isn't sure how to get home. Eventually Elliott puts his fears aside and makes contact with the \"little squashy guy,\" perhaps the least threatening alien invader ever to hit a movie screen. As Elliott tries to keep the alien under wraps and help him figure out a way to get home, he discovers that the creature can communicate with him telepathically. Soon they begin to learn from each other, and Elliott becomes braver and less threatened by life. E.T. rigs up a communication device from junk he finds around the house, but no one knows if he'll be rescued before a group of government scientists gets hold of him.";
  this.independence_day = "A series of massive spaceships approach Earth, which many greet with open arms, looking forward to the first contact with alien life. Unfortunately, these extraterrestrials have not come in peace, and they unleash powerful weapons that destroy most of the world's major cities. Thrown into chaos, the survivors struggle to band together and put up a last-ditch resistance in order to save the human race.";
  this.european_conceptions = "During the decade before 1492, as Columbus nursed a growing urge to sail west to the Indies, he studied the old writers to find out what the world and its people were like. He read the Ymago Mundi of Pierre d'Ailly, a French cardinal who wrote in the early 15th century, the travels of Marco Polo and of Sir John Mandeville, Pliny's Natural History and the Historia Rerum Ubique Gestarum of Aeneas Sylvius Piccolomini. Columbus was not a scholarly man. Yet he studied these books, made hundreds of marginal notations in them and came out with ideas about the world that were characteristically simple and strong and sometimes wrong, the kind of ideas that the self-educated person gains from independent reading and clings to in defiance of what anyone else tries to tell him.\n\nAmong the most influential books was The Travels of Sir John Mandeville (1371).  It purports to recount the author's travels through Jerusalem, Egypt, Turkistan, India, China, and other places. Actually it is a skillful compilation from the recorded travels of other people—e.g., Marco Polo, Ordoric of Pordenone, and William of Boldensele—into which Mandeville interpolated extravagant details of medieval lore.\n\nMandeville tells of islands whose inhabitants had the bodies of humans but the heads of dogs, of a tribe whose only source of nourishment was the smell of apples, of a people the size of pygmies whose mouths were so small that they had to suck all their food through reeds, and of a race of one-eyed giants who ate only raw fish and raw meat. All of this fantasy was interwoven with other geographical descriptions that were perfectly accurate.";
  this.atlantic_crossing = "The Atlantic Ocean was the last large body of water on Earth to be mastered.  Ancient navigators voyaged across the Mediterranean even before historical records marked their journeys. The Pacific was crossed by Polynesians from the time of Christ and the Indian Ocean was crisscrossed with trading boats long before the common era began.\n\nBut it was not until the 15th century that the Atlantic became a regular channel of navigation. There were crossings before, but they did not make the Atlantic the highway that other large bodies of water had become centuries earlier.\n\nTo understand why it took so long to master the Atlantic, one must understand the difficulties of sailing wind powered ships on such a body of water. The Atlantic has strong currents and winds.\n\nThe key to crossing the Atlantic in a sailing craft lies in identifying the outbound and inbound currents.  Columbus discovered these, and this discovery allowed him to sail straight into the Atlantic.";
  this.christopher_columbus = "A newspaper cartoon showed a sign in the front window of Jack’s Department Store: “Columbus Day Sale. All merchandise marked up 200 percent. Because, let’s face it, Columbus was a greedy opportunist, just like Jack.”\n\nTo a generation of school children, Columbus was a man of mythic stature, an explorer and discoverer who initiated the modern age and carried European civilization across the Atlantic Ocean.  Lately, Columbus has been depicted as an imperialist, a racist, and a genocidal despoiler of the natural environment.  Indian peoples called Columbus the father of colonial greed, slavery, and genocide.  In 1992, the National Council of Churches voted to condemn Columbus’s arrival as a genocide.\n\nAt 2 a.m., October 12, 1492, a sailor on board the Spanish ship the Pinta sighted a distant cliff in the moonlight.  For 88 weary men who had been sailing for nine weeks in search of Asia, the sight was a godsend.  Members of the crew had been talking of mutiny for several days, but now they asked for forgiveness.  At dawn, Columbus put ashore in full regalia and claimed the land in the name of the King and Queen of Spain.\n\nWhen Columbus and his men came ashore, the native Indians, known as the Arawak, greeted them with food, water, and gifts.  This is the way Columbus described the encounter:\n\n“They brought us parrots and balls of cotton and many other things, which they exchanged for glass beads.  They willingly traded everything they owned. They do not bear arms and do not know them, for I showed them a sword, they took it by the edge, and cut themselves out of ignorance.  With 50 men we could subjugate them all and make them  do whatever we want.”\n\nOn the basis of Columbus’s report, a second expedition was given 17 ships and more than 1,200 sailors.  Their aim was clear: gold and slaves.  In Haiti, Columbus and his men rounded up 1,500 Arawak and put them in pens guarded by dogs.  Five hundred were loaded on ships and taken to Spain.  Some 200 died en route.  Columbus also ordered all Indians 14 or older to collect a certain quantity of gold every three months.  When they handed over that amount, the Indians were given copper tokens to hang around their necks. Indians without a copper token had their hands cut off and bled to death.";
  this.activity_intro = "1492 is the most significant year in modern world history. Not only did it bring the Old and New Worlds together, it also initiated a set of changes that would have vast implications for the future.\n\nIt contributed to the rise of the transatlantic slave trade and a vast movement of people, animals, food, plants, and diseases that would transform the world.\n\nAlfred Crosby, a Professor Emeritus, University of Texas at Austin, stated:\n\n\"Millions of years ago, continental drift carried the Old World and New Worlds apart, splitting North and South America from Eurasia and Africa. That separation lasted so long that it fostered divergent evolution; for instance, the development of rattlesnakes on one side of the Atlantic and vipers on the other. After 1492, human voyagers in part reversed this tendency. Their artificial re-establishment of connections through the commingling of Old and New World plants, animals, and bacteria, commonly known as the Columbian Exchange, is one of the more spectacular and significant ecological events of the past millennium.\"";
  this.title = "The Significance of 1492";
});
app.controller('ContactController', function($scope, $mdSidenav) {
  "use strict";
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };  
});
app.controller('EntryController', function($scope, $mdToast){
  $scope.submit = function($event) {
    $mdToast.showSimple('Your response has been submitted.');
  };
});
app.controller('FABController', function(){
  this.direction = "down";
  this.isOpen = "false";
  this.mode = "md-fling";
})
app.controller('Activity1Controller', function(){
  this.title = "What did Columbus look like?";
  this.intro = "Christopher Columbus, arguably, had a greater impact on the course of world history than anyone else in the past thousand years.  Yet we know remarkably little about him.  Encyclopedias and textbooks generally state that he was born in 1451 in Genoa, but serious scholars still dispute when and where he was born, his ethnicity, how he was educated, where he landed in 1492, and even where he is buried.\n\nThe 1893 commemoration of Columbus’s voyages of discovery, the World’s Columbian Exposition in Chicago, displayed 71 portraits reputedly of Columbus. None was painted from life.\n\nBut we do have two surviving written descriptions.  Read these, and then briefly explain why you think one of the following portraits is most accurate.\n\nThe earliest published description of Columbus appeared in 1504, and described him as \“Genoese, a man of tall and imposing stature, ruddy, of great intelligence, and with a long face.\” This description is attributed to Angelo Trivigiano, who was secretary to the Venetian ambassador at the court of Ferdinand and Isabella.\n\nThree decades later, Conzalo Fernandez de Oviedo described him as a man \“of good stature and appearance, taller than middling and with strong limbs, the eyes lively and other parts of the countenance of good proportion, the hair very red, and the face somewhat flushed and freckled.\“\n\nFernando Colon described his father as follows:\n\n\"The Admiral was a well-built man of more than average stature, the face long, the cheeks somewhat high, his body neither fat nor lean. He had an aquiline nose and light-colored eyes; his complexion was light and tending to bright red. In youth his hair was fair, but when he reached the age of thirty, it all turned white. In eating and drinking, and in the adornment of his person, he was very moderate and modest. He was affable in conversation with strangers and very pleasant to the members of his household, though with a certain gravity. He was so strict in matters of religion that for fasting and saying prayers he might have been taken for a member of a religious order. He was so great an enemy of swearing and blasphemy that I give my word I never heard him utter any other oath than ‘by St. Ferdinand!’ and when he grew very angry with someone his rebuke was to say ‘God take you’ for doing or saying that. If he had to write anything, he always began by writing these words: IESUS cum MARIA sit nobis in via. And so fine was his hand that he might have earned his bread by that skill alone.\"\n\nBased on these descriptions, explain which of the following portraits is probably most accurate.";
});
//carousel http://www.sitepoint.com/creating-slide-show-plugin-angularjs/
app.directive('carousel', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs){
      scope.currentIndex = 0;
      scope.next = function(){
        scope.currentIndex < scope.images.length -1 ? scope.currentIndex++ : scope.currentIndex = 0;
      };
      scope.prev = function(){
        scope.currentIndex > 0? scope.currentIndex -- : scope.currentIndex = scope.images.length -1;
      };
      scope.$watch('currentIndex', function(){
        scope.images.forEach(function(image){
          image.visible = false;
        });
        scope.images[scope.currentIndex].visible = true;
      });
    },
    templateUrl: 'templates/carousel.html'
  };
});
app.controller('CarouselController', function($scope){
  $scope.images = [{
    src: '1.jpg',
    title: 'Columbus 1',
    number: '1'
  },{
    src: '2.jpg',
    title: 'Columbus 2',
    number: '2'
  },{
    src: '3.jpg',
    title: 'Columbus 3',
    number: '3'
  },{
    src: '4.jpg',
    title: 'Columbus 4',
    number: '4'
  },{
    src: '5.jpg',
    title: 'Columbus 5',
    number: '5'
  },{
    src: '6.jpg',
    title: 'Columbus 6',
    number: '6'
  },{
    src: '7.jpg',
    title: 'Columbus 7',
    number: '7'
  }];
});

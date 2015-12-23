//debounce
function debounce(n,t,u){var e;return function(){var a=this,i=arguments,o=function(){e=null,u||n.apply(a,i)},r=u&&!e;clearTimeout(e),e=setTimeout(o,t),r&&n.apply(a,i)}};
//navbar
var updateNav = debounce(function(){
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
//input validation
var lenCheck = debounce(function(){
  if($('md-input-container').hasClass('md-input-has-value') && $('.input').hasClass('ng-valid')){
    $('.activity-btn').removeAttr('disabled');
    } 
  else if($('md-input-container').hasClass('md-input-invalid') || $('.input').hasClass('ng-invalid')) {
    $('.activity-btn').attr('disabled', 'disabled');
    }
}, 100, true);
window.addEventListener("keyup", lenCheck);
//jQuery
$(document).ready(function() {
  $(this).scrollTop(0);
});
//angularJS
var app = angular.module("MintzApp", [
    'ngMaterial',
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngTouch'
    ]);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: "introduction.html",
      controller: "ModuleController as module",
      title: "Module 3 Introduction"
    })
    .when('/activity1',{
      templateUrl:"activity1.html",
      controller: "Activity1Controller as activity",
      title: "Activity 1"
    })
    .when('/activity2', {
      templateUrl: "activity2.html",
      controller: 'Activity2Controller as activity',
      title: "Activity 2"
    })
    .when('/activity3', {
      templateUrl: "activity3.html",
      controller: 'Activity3Controller as activity',
      title: "Activity 3"
    })
    .when('/activity4', {
      templateUrl: "activity4.html",
      controller: 'Activity4Controller as activity',
      title: "Activity 4"
    })
    .when('/columbus_movies', {
      templateUrl: 'columbus_movies.html',
      controller: 'ColumbusMovieController as movie',
      title: 'Columbus at the Movies'
    })
    .when('/primarysrc', {
      templateUrl: "primarysrc.html",
      controller: 'PrimarySrcController as primary',
      title: "Primary Sources"
    })
});
app.run(['$location','$rootScope', function($location,$rootScope){
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
    $rootScope.title = current.$$route.title;
  });
}]);
app.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
//to keep whitespace use \n\n, break quotes w \
app.controller("ModuleController", function() {
  this.introduction = "The collision of cultures that took place in 1492 has consequences that are still unfolding today. New foods reshaped the diets of the Eastern and Western Hemispheres. Sugar, coffee, cattle, pigs, and sheep reached the Americas, while corn, tobacco, tomatoes, and potatoes came to Africa, Asia, and Europe. The New World environment was transformed as Europeans cleared vast tracts of forested land and introduced cattle, goats, horses, sheep, and swine as well as Old World grasses and weeds. The European discovery of the New World also resulted in the sharpest population decline in human history, as millions of Indians died from smallpox, measles, and other epidemic diseases. With the New World population decimated by disease, Europeans gradually introduced a new labor force: enslaved Africans. By the late eighteenth century, Europeans were debating whether Columbus's discovery of the New World had added to or subtracted from human happiness.";
  this.worlds_collide = "Many of Hollywood’s most popular films deal with encounters with aliens. Think Avatar, Star Wars, E.T., and Independence Day. In this module, we will examine a real life encounter between among aliens who never imagined the other’s existence. \n\nThis is a story far more interesting than anything Hollywood could imagine. It is also a story of death and destruction on a scale beyond even Hollywood’s imaginings.";
  this.significance = "The four hundredth anniversary of Christopher Columbus's \"discovery\" of the New World was commemorated with a massive \"Columbian Exhibition\" in Chicago in 1893. The exhibition celebrated Columbus as a man of mythic stature, an explorer and discoverer who carried Christian civilization across the Atlantic Ocean and initiated the modern age. \n\nThe five hundredth anniversary of Columbus's first voyage of discovery was treated quite differently. Many peoples of indigenous and African descent identified Columbus with imperialism, colonialism, and conquest. The National Council of Churches adopted a resolution calling October 12th a day of mourning for millions of indigenous people who died as a result of European colonization. \n\nMore than five hundred years after the first Spaniards arrived in the Caribbean, historians and the general public still debate Columbus's legacy. Should he be remembered as a great discoverer who brought European culture to a previously unknown world? Or should he be condemned as a man responsible for an \"American Holocaust,\" a man who brought devastating European and Asian diseases to unprotected native peoples, disrupted the American ecosystem, and initiated the Atlantic slave trade? What is Columbus's legacy--discovery and progress, or slavery, disease, and racial antagonism? \n\nTo confront such questions, one must first recognize that the encounter that began in 1492 among the peoples of the Eastern and Western Hemispheres was one of the truly epochal events in world history. This cultural collision not only produced an extraordinary transformation of the natural environment and human cultures in the New World, it also initiated far-reaching changes in the Old World as well. \n\nNew foods reshaped the diets of people in both hemispheres. Tomatoes, chocolate, potatoes, corn, green beans, peanuts, vanilla, pineapple, and turkey transformed the European diet, while Europeans introduced sugar, cattle, pigs, cloves, ginger, cardamon, and almonds to the Americas. Global patterns of trade were overturned, as crops grown in the New World---including tobacco, rice, and vastly expanded production of sugar--fed growing consumer markets in Europe. \n\nEven the natural environment was transformed. Europeans cleared vast tracks of forested land and inadvertently introduced Old World weeds. The introduction of cattle, goats, horses, sheep, and swine also transformed the ecology as grazing animals ate up many native plants and disrupted indigenous systems of agriculture. The horse, extinct in the New World for 10,000 years, transformed the daily existence of many indigenous peoples. The introduction of the horse encouraged many farming peoples to become hunters and herders. Hunters mounted on horses were also much more adept at killing game. \n\nDeath and disease--these too were consequences of contact. Diseases against which Indian peoples had no natural immunities caused the greatest mass deaths in human history. Within a century of contact, smallpox, measles, mumps, and whooping cough had reduced indigenous populations by 50 to 90 percent. From Peru to Canada, disease reduced the resistance that Native Americans were able to offer to European intruders. \n\nWith the Indian population decimated by disease, Europeans gradually introduces a new labor force into the New World: enslaved Africans. Between 1502 and 1870, when the Atlantic slave trade was finally suppressed, from ten to fifteen million Africans were shipped to the Americas. \n\nColumbus's voyage of discovery also had another important result: it contributed to the development of the modern concept of progress. To many Europeans, the New World seemed to be a place of innocence, freedom, and eternal youth. The perception of the New World as an environment free from the corruptions and injustices of European life would provide a vantage point for criticizing all social evils. So while the collision of three worlds resulted in death and enslavement in unprecedented numbers, it also encouraged visions of a more perfect future. \n\nColumbus's voyages represent one of the major discontinuities in human history. His voyages truly represented a historical watershed, with vast repercussions for all aspects of life in both the Old World and the New. The year 1492 - perhaps more than any other year in modern world history - was a truly landmark moment, carrying enormous implications for the natural environment, for intellectual thought, and for the international economy.";
  this.when_worlds_collide = "Many of Hollywood's most popular science fiction films--from The Day the Earth Stood Still to E.T.: The Extra-Terrestrial and Independence Day--examine encounters with aliens. In 1492, a \"close encounter of the 'third kind'\" (physical contact) actually took place, as groups of people who had never known of each others existence collided. \n\nLet’s take a look at how Hollywood and Europeans prior to 1492 imagined aliens.";
  this.cinematic_encounters = "Do Earthlings and aliens meet in peace, or do the aliens seek to enslave or exterminate the human race?\n\nSupposed sightings of flying saucers in 1947 ignited a frenzy of interest in Unidentified Flying Objects and aliens.\n\nSince the sci-fi heyday of the 1950s – a decade which saw both the dawn of the real-world space age, and a continually escalating threat of global nuclear war – mainstream cinema has been somewhat obsessed with the subject of alien invasion, offering as it does the opportunity for audiences to reflect on real-world crises while reveling in escapist spectacle.";
  this.earth_still = "An alien named Klaatu arrives in Washington, D.C. in a flying saucer. Even though he and his companions announce that they have come in peace, their arrival triggers panic. A nervous soldier shoots Klaatu, but he comes back to life and delivers a message from the Galactic Federation: Either Earth must live in peace under the rule of Klaatu’s robot servant Gort, or it will be destroyed.";
  this.war_worlds = "Earth is under attack in this updating of H.G. Wells’s science fiction tale to the Cold War era as invaders from another world target a small California town with autonomous probes and laser disintegration rays.";
  this.earth_flying_saucers = "Scientist Russell Marvin is on-hand when an alien spacecraft lands on earth. The aliens at first insist that they've come in peace, but Marvin suspects otherwise. Sure enough, the visitors eventually declare their intention to take over the earth within the next 60 days, adding that the military's weapons are useless against them. The two-month window gives Marvin and his cohorts plenty of time to build-up superweapon, and thus stave off the seven-saucer invasion force.";
  this.invasion_body_snatchers = "Emotionless aliens from outer space are using large seed pods to duplicate human bodies and take them over.";
  this.et = "An alien spacecraft on a scientific mission mistakenly left behind an aging botanist who isn't sure how to get home. Eventually Elliott puts his fears aside and makes contact with the \"little squashy guy,\" perhaps the least threatening alien invader ever to hit a movie screen. As Elliott tries to keep the alien under wraps and help him figure out a way to get home, he discovers that the creature can communicate with him telepathically. Soon they begin to learn from each other, and Elliott becomes braver and less threatened by life. E.T. rigs up a communication device from junk he finds around the house, but no one knows if he'll be rescued before a group of government scientists gets hold of him.";
  this.independence_day = "A series of massive spaceships approach Earth, which many greet with open arms, looking forward to the first contact with alien life. Unfortunately, these extraterrestrials have not come in peace, and they unleash powerful weapons that destroy most of the world's major cities. Thrown into chaos, the survivors struggle to band together and put up a last-ditch resistance in order to save the human race.";
  this.european_conceptions = "During the decade before 1492, as Columbus nursed a growing urge to sail west to the Indies, he studied the old writers to find out what the world and its people were like. He read the Ymago Mundi of Pierre d'Ailly, a French cardinal who wrote in the early 15th century, the travels of Marco Polo and of Sir John Mandeville, Pliny's Natural History and the Historia Rerum Ubique Gestarum of Aeneas Sylvius Piccolomini. Columbus was not a scholarly man. Yet he studied these books, made hundreds of marginal notations in them and came out with ideas about the world that were characteristically simple and strong and sometimes wrong, the kind of ideas that the self-educated person gains from independent reading and clings to in defiance of what anyone else tries to tell him.\n\nAmong the most influential books was The Travels of Sir John Mandeville (1371). It purports to recount the author's travels through Jerusalem, Egypt, Turkistan, India, China, and other places. Actually it is a skillful compilation from the recorded travels of other people—e.g., Marco Polo, Ordoric of Pordenone, and William of Boldensele—into which Mandeville interpolated extravagant details of medieval lore.\n\nMandeville tells of islands whose inhabitants had the bodies of humans but the heads of dogs, of a tribe whose only source of nourishment was the smell of apples, of a people the size of pygmies whose mouths were so small that they had to suck all their food through reeds, and of a race of one-eyed giants who ate only raw fish and raw meat. All of this fantasy was interwoven with other geographical descriptions that were perfectly accurate.";
  this.atlantic_crossing = "The Atlantic Ocean was the last large body of water on Earth to be mastered. Ancient navigators voyaged across the Mediterranean even before historical records marked their journeys. The Pacific was crossed by Polynesians from the time of Christ and the Indian Ocean was crisscrossed with trading boats long before the common era began.\n\nBut it was not until the 15th century that the Atlantic became a regular channel of navigation. There were crossings before, but they did not make the Atlantic the highway that other large bodies of water had become centuries earlier.\n\nTo understand why it took so long to master the Atlantic, one must understand the difficulties of sailing wind powered ships on such a body of water. The Atlantic has strong currents and winds.\n\nThe key to crossing the Atlantic in a sailing craft lies in identifying the outbound and inbound currents. Columbus discovered these, and this discovery allowed him to sail straight into the Atlantic.";
  this.christopher_columbus = "A newspaper cartoon showed a sign in the front window of Jack’s Department Store: “Columbus Day Sale. All merchandise marked up 200 percent. Because, let’s face it, Columbus was a greedy opportunist, just like Jack.”\n\nTo a generation of school children, Columbus was a man of mythic stature, an explorer and discoverer who initiated the modern age and carried European civilization across the Atlantic Ocean. Lately, Columbus has been depicted as an imperialist, a racist, and a genocidal despoiler of the natural environment. Indian peoples called Columbus the father of colonial greed, slavery, and genocide. In 1992, the National Council of Churches voted to condemn Columbus’s arrival as a genocide.\n\nAt 2 a.m., October 12, 1492, a sailor on board the Spanish ship the Pinta sighted a distant cliff in the moonlight. For 88 weary men who had been sailing for nine weeks in search of Asia, the sight was a godsend. Members of the crew had been talking of mutiny for several days, but now they asked for forgiveness. At dawn, Columbus put ashore in full regalia and claimed the land in the name of the King and Queen of Spain.\n\nWhen Columbus and his men came ashore, the native Indians, known as the Arawak, greeted them with food, water, and gifts. This is the way Columbus described the encounter:\n\n“They brought us parrots and balls of cotton and many other things, which they exchanged for glass beads. They willingly traded everything they owned. They do not bear arms and do not know them, for I showed them a sword, they took it by the edge, and cut themselves out of ignorance. With 50 men we could subjugate them all and make them do whatever we want.”\n\nOn the basis of Columbus’s report, a second expedition was given 17 ships and more than 1,200 sailors. Their aim was clear: gold and slaves. In Haiti, Columbus and his men rounded up 1,500 Arawak and put them in pens guarded by dogs. Five hundred were loaded on ships and taken to Spain. Some 200 died en route. Columbus also ordered all Indians 14 or older to collect a certain quantity of gold every three months. When they handed over that amount, the Indians were given copper tokens to hang around their necks. Indians without a copper token had their hands cut off and bled to death.";
  this.activity_intro = "1492 is the most significant year in modern world history. Not only did it bring the Old and New Worlds together, it also initiated a set of changes that would have vast implications for the future.\n\nIt contributed to the rise of the transatlantic slave trade and a vast movement of people, animals, food, plants, and diseases that would transform the world.\n\nAlfred Crosby, a Professor Emeritus, University of Texas at Austin, stated:\n\n\"Millions of years ago, continental drift carried the Old World and New Worlds apart, splitting North and South America from Eurasia and Africa. That separation lasted so long that it fostered divergent evolution; for instance, the development of rattlesnakes on one side of the Atlantic and vipers on the other. After 1492, human voyagers in part reversed this tendency. Their artificial re-establishment of connections through the commingling of Old and New World plants, animals, and bacteria, commonly known as the Columbian Exchange, is one of the more spectacular and significant ecological events of the past millennium.\"";
  this.title = "The Significance of 1492";
});
app.controller('ContactController', function($scope, $mdSidenav) {
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
  (function(){
     $('#main-head').text('What did Columbus Look Like?');
  }());
  this.intro = "Christopher Columbus, arguably, had a greater impact on the course of world history than anyone else in the past thousand years. Yet we know remarkably little about him. Encyclopedias and textbooks generally state that he was born in 1451 in Genoa, but serious scholars still dispute when and where he was born, his ethnicity, how he was educated, where he landed in 1492, and even where he is buried.\n\nThe 1893 commemoration of Columbus’s voyages of discovery, the World’s Columbian Exposition in Chicago, displayed 71 portraits reputedly of Columbus. None was painted from life.\n\nBut we do have two surviving written descriptions. Read these, and then briefly explain why you think one of the following portraits is most accurate.\n\nThe earliest published description of Columbus appeared in 1504, and described him as \“Genoese, a man of tall and imposing stature, ruddy, of great intelligence, and with a long face.\” This description is attributed to Angelo Trivigiano, who was secretary to the Venetian ambassador at the court of Ferdinand and Isabella.\n\nThree decades later, Conzalo Fernandez de Oviedo described him as a man \“of good stature and appearance, taller than middling and with strong limbs, the eyes lively and other parts of the countenance of good proportion, the hair very red, and the face somewhat flushed and freckled.\“\n\nFernando Colon described his father as follows:\n\n\"The Admiral was a well-built man of more than average stature, the face long, the cheeks somewhat high, his body neither fat nor lean. He had an aquiline nose and light-colored eyes; his complexion was light and tending to bright red. In youth his hair was fair, but when he reached the age of thirty, it all turned white. In eating and drinking, and in the adornment of his person, he was very moderate and modest. He was affable in conversation with strangers and very pleasant to the members of his household, though with a certain gravity. He was so strict in matters of religion that for fasting and saying prayers he might have been taken for a member of a religious order. He was so great an enemy of swearing and blasphemy that I give my word I never heard him utter any other oath than ‘by St. Ferdinand!’ and when he grew very angry with someone his rebuke was to say ‘God take you’ for doing or saying that. If he had to write anything, he always began by writing these words: IESUS cum MARIA sit nobis in via. And so fine was his hand that he might have earned his bread by that skill alone.\"\n\nBased on these descriptions, explain which of the following portraits is probably most accurate.";
});
app.controller('Activity2Controller', function(){
  (function(){
     $('#main-head').text('Columbus v. Vespucci');
  }());
  this.intro = "When the German cartographer Martin Waldseemüller published the first map to depict the New World in 1507, he called the Western hemisphere America in honor of the Italian navigator Amerigo Vespucci. Why Vespucci and not Columbus?\n\nAn Italian merchant, born in 1454 in Florence, Vespucci made two voyages between 1499 and 1502 and possibly a third one in 1503. On his first voyage in 1499, he explored South America’s northern coast and gave it names like \“the Gulf of the Ganges.\”\n\nOn his second voyage, he followed the coast of South America nearly to its southern tip, and realized that he had encountered an entirely new continent. It was this that led Waldseemüller to name the New World after Vespucci:\n\n\"I see no reason why anyone should justly object to calling this part ... America, after Amerigo [Vespucci], its discoverer, a man of great ability.\"\n\nSo who should the New World have been named after? Columbus, who was the first fifteenth century European to reach the New World, or Vespucci, the first person to recognize that he had reached a new continent?";
});
app.controller('Activity3Controller', function(){
  (function(){
     $('#main-head').text('Columbus and Mythmaking');
  }());
  this.intro = "A host of myths surround Christopher Columbus and his epic voyage. One such myth is that he was the first person to recognize that the earth was round. In fact, all educated people knew that the world was spherical, though there was disagreement about its diameter. In the end, Columbus grossly underestimated the earth’s circumference.\n\nOne such myth is that Queen Isabella sold her crown jewels to pay for his voyage. Not true. The city of Palos owed the Queen a debt, which it repaid by providing two of Columbus’s ships.\n\nThen there is the myth that Columbus was the first European to set foot in what is now the United States. In fact, Columbus never set foot on North America.\n\nBut the most powerful myth is that Columbus was the first person to recognize that the earth is round. In fact, all educated people of his time knew that the earth was spherical, though there was sharp disagreement about its circumference, which Columbus radically underestimated.\n\nSo how then did this myth arise? It was popularized in an 1828 multi-volume biography by Washington Irving, best remembered today as the author of “Rip Van Winkle” and The Legend of Sleepy Hollow. Entitled A History of the Life and Voyages of Christopher Columbus, the book asserted that Columbus alone advocated that the earth was round in the face of a religious establishment that insisted that the world was flat.\n\nWashington Irving was influential in creating many popular myths and legends. In addition to the Headless Horseman, he was among the first to popularize St. Nicholas (who later generations would call “Santa Claus”) as a pipe-smoking figure who brings gifts down chimneys at Christmas time.\n\nWhy do you think that Irving, himself a devout Episcopalian who played a crucial role in creating a native American literature, may have created the Columbus myth?";
});
app.controller('Activity4Controller', function(){
  (function(){
     $('#main-head').text('Judging Columbus');
  }());
  this.intro = "Historical reputations rise and fall, and Columbus’s is no exception. Over time, he has been revered, reviled, and even ignored.\n\nDuring his own lifetime, his reputation had ups and downs. Indeed, in 1500, he and his brothers were sent to Spain in chains, accused of brutality toward the native peoples and to the Spanish colonists.\n\nIt was not until the end of the eighteenth century that Columbus, soon after the American revolution, that began to be celebrated as a brave, skillful, and visionary explorer. The first Columbus Day celebration recorded in the United States took place in New York on October 12th, 1792.\n\nThe 400th anniversary of his epic voyage was marked by the World’s Columbian Exposition in Chicago, which attracted over a quarter of the U.S. population. But it was not until 1937 that President Franklin Delano Roosevelt proclaimed October 12th to be Columbus Day, a national holiday.\n\nThe 500th anniversary of the voyage of discovery generated intense controversy, with Columbus condemned by some as a genocidal exploiter of New World peoples, an initiator of the Atlantic slave trade, and a despoiler of the natural environment. \n\nSo how might we best evaluate Columbus’s legacy, weighing his strengths, achievements, and flaws? One window is offered by art.\n\nCompare and contrast these two depictions of Spanish colonialism, one by the American painter John Vanderlyn (1775-1852) and the other by the great Mexican muralist Diego Rivera.  Both, notably, appear in key national buildings: The U.S. Capitol and Mexico’s National Palace.  What do these paintings say about popular attitudes toward Columbus in their respective countries?";
});
app.controller('ColumbusMovieController', function(){
  (function(){
     $('#main-head').text('Columbus at the Movies');
  }());
  this.intro = "Where do Americans learn their history these days?\n\nAt the movies, of course.\n\nIn our increasingly visual culture, much of what the public knows about the past comes from the movies.\n\nMany historians are highly critical of historical movies. They are travesties, some say, playing fast and loose with the facts.\n\nIt is true: Popular films often distort history.  Historical films movies are filled with inaccuracies, simplifications, invented dialogue and imagined characters, imagined dialogue, anachronisms, and improbabilities.  Frequently such movies inject romance into the plot.  Worse yet, films often populate the screen with clearly identified heroes and villains, and promote a “Great Man” view of history, overemphasizing the role of certain powerful individuals.\n\nBut historical films can also be a valuable source of information.  Such movies can help us visualize another time and place and introduce the audience to important episodes from the past.\n\nHistorical movies always contain a mixture of truth, illusion, history, and fantasy and it can be helpful to tease out these elements.\n\nWe've all heard the phrase: \"It's just a movie.\" Movies, we often hear, are just entertainment. In fact, movies are educators. Films provide information and misinformation. Some of the best historical films challenge deeply engrained mythologies and force the audience to confront the complex realities of the past.\n\nThe year 1992 brought two big budget films about Columbus to the screen: 1492: The Conquest of Paradise and Christopher Columbus: The Discovery. View the trailers to these films and briefly decode the messages that the trailers convey. Describe how they depict Columbus and how they seek to generate audience interest in a figure they first met in grade school.";
});
app.controller('PrimarySrcController', function(){
  (function(){
     $('#main-head').text('Primary Sources for Module 3');
  }());
  this.meaning_of_america = "\<i>\"They have no iron or steel or weapons, nor are they capable of using them\"</i>\n\nAt the time of the first discoveries, Europeans tended to view the New World from one of two contrasting perspectives. Many saw America as an earthly paradise, a land of riches and abundance, where the native peoples led lives of simplicity and freedom similar to those enjoyed by Adam and Eve in the biblical Garden of Eden.\n\nOther Europeans described America in a much more negative light: as a dangerous and forbidding wilderness, a place of cannibalism and human misery, where the population lacked Christian religion and the trappings of civilization. This latter view of America as a place of savagery, cannibalism, and death would grow more pronounced as the Indian population declined precipitously in numbers as a result of harsh labor and the ravages of disease and as the slave trade began transporting millions of Africans to the New World.\n\nBut it was the positive view of America as a land of liberty, liberation, and material wealth that remained dominant. America served as a screen on which Europeans projected their deepest fantasies of a land where people could escape inherited privilege, corruption, and tradition. The discovery of America seemed to mark a new beginning for humanity, a place where all Old World laws, customs, and doctrines were removed, and where scarcity gave way to abundance.\n\nIn a letter reporting his discoveries to King Ferdinand and Queen Isabella of Spain, Christopher Columbus (1451-1506) paints a portrait of the indigenous Taino Indians as living lives of freedom and innocence near the Garden of Eden.\n\nChristopher Columbus, Letter to the Sovereigns on His First Voyage, February 15 - March 4 1493:\n\n....The people of this island [Hispaniola] and of all the other islands which I have found and seen, or have not seen, all go naked, men and women, as their mothers bore them, except that some women cover one place with the leaf of a plant or with a net of cotton which they make for that purpose. They have no iron or steel or weapons, nor are they capable of using them, although they are well-built people of handsome stature, because they are wondrous timid. They have no other arms than the arms of canes, [cut] when they are in seed time, to the end of which they fix a sharp little stick; and they dare not make use of these, for oftentimes it has happened that I have sent ashore two or three men to some town to have speech, and people without number have come out to them, as soon as they saw them coming, they fled; even a father would not stay for his son; and this was not because wrong had been done to anyone; on the contrary, at every point where I have been and have been able to have speech, I have given them of all that I had, such as cloth and many other things, without receiving anything for it; but they are like that, timid beyond cure. It is true that after they have been reassured and have lost this fear, they are so artless and so free with all they possess, that no one would believe it without having seen it. Of anything they have, if you ask them for it, they never say no; rather they invite the person to share it, and show as much love as if they were giving their hearts; and whether the thing be of value or of small price, at once they are content with whatever little thing of whatever kind may be given to them. I forbade that they should be given things so worthless as pieces of broken crockery and broken glass, and lace points, although when they were able to get them, they thought they had the best jewel in the world.... And they know neither sect nor idolatry, with the exception that all believe that the source of all power and goodness is in the sky, and in this belief they everywhere received me, after they had overcome their fear. And this does not result from their being ignorant (for they are of a very keen intelligence and men who navigate all those seas, so that it is wondrous the good account they give of everything), but because they have never seen people clothed or ships like ours.";
  this.labor_force = "\<i>\"With fifty men they can all be subjugated and made to do what is required of them\"</i>\n\nChristopher Columbus's voyages of discovery were part of a much broader pattern of European commercial and financial expansion during the fifteenth century. In the span of less than four decades, European countries revolutionized sea travel. Led by tiny Portugal, fifteenth-century European mariners adapted from the Arabs a small sturdy ship known as the caravel capable of sailing against the wind. They also refined such navigational aids as the astrolabe and quadrants, allowing sailors to accurately chart their latitude, while mapmakers and geographers greatly improved the quality of maps. In just a decade, from 1488 to 1498, European sailors mastered the winds and currents of the south Atlantic, making it possible for the first time to sail from Western Europe to West Africa and into the Indian Ocean.\n\nWith financial support from German and Italian bankers and merchants, Portugal was able to exploit these discoveries and create a system of long-distance trade and commerce based on sugar and slavery. As early as 1420, the Portuguese began to settle islands off the West African coast. In Madeira, the Azores, the Canary Islands, and other islands, the Portuguese introduced sugar cane. Beginning in 1443, Portugal established a string of trading posts along the West African coast, which soon became major sources of slave labor for the Iberian Peninsula and especially for the Atlantic island sugar plantations.\n\nChristopher Columbus was very familiar with this network of Atlantic trade. Born in Genoa in 1451, the son of an Italian wool weaver, Columbus was pushed by his father into trade. In 1476 he settled in a Genoese trading community in Portugal. There, he met his wife, whose father was the Portuguese governor of an island off Africa's Atlantic coast. For ten years Columbus lived in Madeira and made voyages to the Azores, the Canary Islands, and western Africa. Forty-one years old at the time he made his first voyage of discovery, Columbus was obsessed with the idea of finding a new route to the Far East, which would provide him with enough wealth to pay for the liberation of the Holy Land from Islamic rule. Personally familiar with slavery and sugar production when he arrived in the Caribbean, he quickly saw the opportunity to extract riches from this new land.\n\nAs the following extracts from his journal reveal, within days of his arrival in the New World Columbus regarded the Indian population as a potential labor source. As he and other Europeans would soon discover, the Indians, especially the Caribs, were not as timid or as easily dominated as Columbus originally thought.\n\nChristopher Columbus, Journal\n\nSunday, 14th of October\n\n...these people are very simple as regards the use of arms, as your Highnesses will see from the seven that I caused to be taken, to bring home and learn our language and return; unless your Highnesses should order them all to be brought to Castile, or to be kept as captives on the same island; for with fifty men they can all be subjugated and made to do what is required of them....\n\nSunday, 16th of December\n\n...your Highnesses may believe that this island (Hispaniola), and all the others, are as much yours as Castile. Here there is only wanting a settlement and the order to the people to do what is required. For I, with the force I have under me, which is not large, could march over all these islands without opposition. I have seen only three sailors land, without wishing to do harm, and a multitude of Indians fled before them. They have no arms, and are without warlike instincts; they all go naked, and are so timid that a thousand would not stand before three of our men. So that they are good to be ordered about, to work and sow, and do all that may be necessary, and to build towns, and they should be taught to go about clothed and to adopt our customs.\n\n\"\Journal of the First Voyage of Christopher Columbus, 1492-1493,\" in E.G. Bourne, The Northmen, Columbus and Cabot, 985-1503 (New York, 1906), 114, 145-146, 182";
  this.new_world_fantasies = "\<i>\"All slavery, and drudgery...is done by bondsmen\"</i>\n\nThe European voyages of discovery of the late fifteenth century played a critical role in the development of modern conceptions of progress. From the ancient Greeks onward, western culture tended to emphasize certain unchanging and universal ideas about human society. But the discovery of the New World threw many supposedly universal ideals into doubt. The Indians, who seemingly lived free from all the traditional constraints of civilized life--such as private property or family bonds--offered a vehicle for criticizing the corruptions, abuses, and restrictions of European society\n\nIn 1516 the English humanist Sir Thomas More (1478-1535) published Utopia, his description of an ideal society where crime, injustice, and poverty did not exist. Writing just twenty-four years after Columbus's first voyage to the Caribbean, More located his perfect society in the Western Hemisphere. More's book, written in the form of a dialogue, contrasts the simplicity of life in Utopia with contemporary Europe's class divisions. In Utopia, property is held in common, gold is scorned, and all inhabitants eat the same food and wear the same clothes. And yet several features of More's Utopia strike a jarring note. For one thing, his book justifies taking land from the indigenous people because, in European eyes, they did not cultivate it. And further, the prosperity and well-being of More's ideal society ultimately rest on slave labor\n\nSir Thomas More, Utopia, London 1516\n\n....When I consider with myself and weigh in my mind the wise and godly ordinances of the Utopians, among whom with very few laws all things be so well and wealthily ordered, that virtue is had in price and estimation, and yet, all things being there common, every man hath abundance of everything\n\n....No household or farm in the country hath fewer than forty persons, men and women, besides two bondmen, which be all under the rule and order of the good man, and the good wife of the house, being both very sage and discreet persons.... For they dividing the day and the night into twenty-four hours, appoint and assign only six of those hours to work...In this hall all vile service, all slavery, and drudgery, with all laboursome toil and business, is done by bondmen....";
  this.labor_needs = "\<i>\"This is the best land in the world for Negroes\"</i>\n\nChristopher Columbus believed that Indians would serve as a slave labor force for Europeans, especially on the sugar cane plantations off the western coast of north Africa. Convinced that the Taino Indians of the Caribbean would make ideal slaves, he transported 500 to Spain in 1495. Some 200 died during the overseas voyage. Thus Columbus initiated the African slave trade, which originally moved from the New World to the Old, rather than the reverse.\n\nBy the beginning of the sixteenth century, Spain's experiments in enslaving Indians were failing. To meet the mounting demand for labor in mining and agriculture, the Spanish began to exploit a new labor force: slaves from western Africa. \n\nSlavery was a familiar institution to many sixteenth-century Europeans. Although slavery had gradually died out in northwestern Europe, it continued to flourish around the Mediterranean Sea. Ongoing warfare between Christianity and Islam produced thousands of slave laborers, who were put to work in heavy agriculture in Italy, southern France, eastern Spain, Sicily, and eastern Europe near the Black Sea. Most slaves in this area were \"white\"--either Arabs or natives of Russia and eastern Europe. But by the mid-fifteenth century, the expansion of the Ottoman empire cut off the supply of white slaves. It was during the mid-fifteenth century that Portugal established trading relations along the West African coast, and discovered that it was able to purchase huge numbers of black slaves at a low cost.\n\nSeveral factors made African slaves the cheapest and most expedient labor source. The prevailing ocean currents made it relatively easy to transport Africans to the Caribbean. Further, because Africans came from developed agricultural societies, they were already familiar with highly organized tropical agriculture. The first African slaves were brought to the New World as early as 1502, where they would mine precious metals and raise sugar, coffee, and tobacco--the first goods sold to a mass consumer market.\n\nThe African slave trade would be an indispensable part of European settlement and development of the New World. By the mid-eighteenth century, slaves could be found everywhere in the Americas from French Canada to Chile. Indeed, the number of Africans forcibly imported into the New World actually exceeded the number of whites who would come to the Americas before the 1830s. Between 1492 and 1820, approximately ten to fifteen million Africans were forcibly brought to the New World, while only about two million Europeans had migrated. In this excerpt, Alonzo de Zuazo (1466-1527), the Spanish Judge of Hispaniola, argues that slavery is essential for Caribbean development.\n\nAlonso de Zuazo, to Cardinal Ximenes, Regent of Spain, January 22, 1518\n\nIndeed, there is urgent need for Negro slaves, as I have written to inform His Highness, and in as much as Your Lordship will see that part of my letter to His Highness, I shall not repeat it here, except to say that it is urgent to have them brought. Ships sail from these islands for Seville to purchase essential goods such as cloth of various colours as well as other merchandise, which is used as ransom of Cape Verde whither the goods are carried with the permission of the King of Portugal. By virtue of the said ransom, let ships go there and bring away as many male and female Negroes as possible, newly imported and between the ages of fifteen to eighteen or twenty years. They will be made to adopt our customs in this island and they will be settled in villages and married to their women folk. The burden of work of the Indians will be eased and unlimited amounts of gold will be mined. This is the best land in the world for Negroes, women and old men, and it is very rarely that one of these people die.\n\nJ.A. Saco, Historia de la Esclavitud de las Raza Africana, Tomo I, 143-144";
});
//carousel
app.directive('carousel', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs){
      scope.currentIndex = 0;
      scope.paintingCredits = ['John Vanderlyn, Landing of Christopher Columbus, U.S. Capitol, 1846', 'Diego Rivera, Disembarkation of the Spanish at Vera Cruz (Colonial Domination), National Palace, Mexico City, 1951'];
      scope.next = function(){
        scope.currentIndex < scope.images.length -1 ? scope.currentIndex++ : scope.currentIndex = 0;
        scope.cleanIndex = scope.currentIndex + 1;
        $('.number-display').text(scope.cleanIndex);
      };
      scope.prev = function(){
        scope.currentIndex > 0? scope.currentIndex -- : scope.currentIndex = scope.images.length -1;
        scope.cleanIndex = scope.currentIndex + 1;
        $('.number-display').text(scope.cleanIndex);

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
  $scope.a1_images = [{
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
  $scope.a4_images = [{
    src: 'vanderlyn.jpg',
    title: 'John Vanderlyn, Landing of Christopher Columbus, U.S. Capitol, 1846'
  },{
    src: 'rivera.jpg',
    title: 'Diego Rivera, Disembarkation of the Spanish at Vera Cruz (Colonial Domination), National Palace, Mexico City, 1951'
  }];
});
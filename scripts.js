$(document).ready(function()
  {

  alert("You are warm and comfortable in your covers, dreaming peacefully");

  var firstsnooze = prompt("BEEP BEEP BEEP BEEP. Your alarm jolts you awake. You groan, exhausted and roll over.\
   \n You consider hitting snooze but also know you should get up. What do you do?", "snooze, get up").toLowerCase();

//
if (firstsnooze == "snooze") var snooze1 = prompt("you got a few more minutes of sleep. Are you ready to get up now?","snooze again, get up").toLowerCase();
  if (snooze1 == "snooze again") var getoutofbed = prompt("Get out of bed now or you'll be late","ok").toLowerCase();

  if (snooze1 == "get up") var slightlylate = prompt("good idea. Now you're only slightly late", "ok").toLowerCase();
  $("body").css("background-color", "#acafd5");
//
// if (firstsnooze == "get up")

var situpinbed = prompt("You sit up in your bed and sigh. \nYou unfortunately have to get ready for the day.\n \
So many things to do, but somehow you're running late.. \n \
Pick one thing to do to get ready for the day, otherwise you'll be late.\
What do you want to do?","breakfast, makeup, hair, clothes, teeth").toLowerCase();

if (slightlylate = "ok") var situpinbed;

if (getoutofbed == "ok") var situpinbed;

if (slightlylate == "ok") var situpinbed;

  if (situpinbed == "hair") var hair = prompt("Don't even try. Too much hair, too little time", "ok").toLowerCase();
    if (hair == "ok") var situpinbed;

  if (situpinbed == "makeup") var makeup = prompt("I guess get started","ok").toLowerCase();
    if (makeup == "ok") var makeupcompliment = prompt("Your makeup looks wonderful","thanks").toLowerCase();
      if (makeupcompliment == "thanks");

  if (situpinbed == "teeth") var teeth = alert("go brush your teeth");

  if (situpinbed == "clothes") var clothes = alert("go pick out an outfit");

  if (situpinbed == "breakfast") var breakfastoptions = prompt("you go into the kitchen and look at your cupboards. Cereal or toast?","cereal,toast").toLowerCase();
      if (breakfastoptions == "cereal") var cereal = alert("pour the milk and start eating or you'll be late");
      if (breakfastoptions == "toast") var toast = alert("slap some jam on your toast and start eating or you'll be late");

alert("You're all ready to go but you're still running late! Of course! Are you ever not running late?\
\n Whatever, you don't have time to stress any more. Get walking!");

var walking = prompt("You're walking behind some asshole on the phone who is taking up the whole damn sidewalk and going so slow!\
\n What do you do?","fight him, walk around him").toLowerCase();
  if (walking == "fight him") alert("You don't have time to fight this guy, shake it off and go to class")
  if (walking == "walk around him") alert("Good idea, get to class ASAP")

  alert("You arrive at class stressed out, out of breath, and exhausted. \n\nYou check the time.\
  \n\nYou're 15 minutes early. How did that even happen? You were running late all morning but now you're...early? \
  \n\nYou stressed out for nothing...");
  $("body").html("<h1> Your anxiety messed with you, but now you're safely on time to class. Take a breather.\n Hit Refresh to play again </h1>");




});

// });

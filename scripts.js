

//this person is ____ who is _____
var arrSocialCues = [
  ['a design expert', 'in the target audience'],
  ['not a design expert', 'in the target audience'],
  ['a design expert', 'not in the target audience'],
  ['not a design expert', 'not in the target audience']
]

var arrFeedbacks1 = [
  'The color scheme and imagery used is good. In particular, the sharp purple cut-out is eye-catching. I would suggest finding a better font or re-arranging the information on the left in a more visually-appealing way, it\'s currently underwhelming. Perhaps take out "TIME/PLACE" and instead just list the dates/location and space it out a little bit better (left-justified, maybe). Also the tag-line should be reformatted so it\'s not in one block on the left. Try to make better use of the space!',
  'The two people dancing are not filled in all the way. There are white patches by the edges that could be easily fixed and it would look much nicer.',
  'I think you should state what kind of dancing will be in this event. And perhaps what to wear. I would also change the design of the purple character, it looks a bit off against the black background. I would probably put a real live dancing event photo on the background of this poster and change the font of the words on this poster.',
  'I think the purple really pops and makes you look at the poster. I found myself looking for a price. Maybe the cost, if there is one, could be listed in small print on the bottom left corner. I liked the font but wondered if there is a font that \“flows\” kind of like dance? This font is bold, which stands out well, but I am wondering if there would be a bold font that represented dance more.',
  'The text does not seem to be well aligned, therefore make them well aligned. Also, the picture of the dancers seems too abstract. You might want to make it a silhouette of real dancers or even use a real picture of dancers.'
]

var arrFeedbacks2 = [
  'I actually find it really hard to read all the dates written on the woman. It is especially hard to read the first course right under \"Open Study\". Perhaps the woman could be made smaller, not filling the whole page with the writing next to it so you could actually read all the dates. Or else make the font bigger or bold. It is much easier to read where her shirt is darker blue. Also I would like to see a cost listed, or a website. I need to see more information.',
  'Rosie the Riveter is a very famous poster.  Using her sends a message that your product matches the icon which she represents.  Looking at the rest of the text, I do not feel it is a good match.  Also, you need to get rid of the \"War Production Co-ordinating Committee\" and the other text which is part of the original design.  Finally, I hope that your target audience understands the \"jargon\" that is on the poster... e.g. \"MSE 401\" and MSE 201\" -- are those course numbers?  I would suggest you have a slogan up top like \"Rosie says it\'s time to \'Get to work on MSE!\"',
  'The white lettering on the blue shirt needs to be changed. The font should be either thicker, or larger and that will make it easier to read.',
  'The top is awesome and lady is a good touch, but it’s really hard to read the words on her shirt. Maybe bolden the letters and make the small ones bigger. You could also maybe change the shirt color a little, or a combination of both.',
  'I would provide more information on what the committee is about or what the meeting is for. Is this an anti protest rally or study session? The picture doesn’t really give information. Also, if there is a phone number or email to which questions could be directed you may want to list that.'
]

var generateSocialCueText = function(condition) {

  var cues = arrSocialCues[condition];
  return "The person who provided this feedback is <b>" + cues[0] + "</b> who is <b>" + cues[1] + "</b>.";
}

var getRandomInt = function(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);
}

var populateFeedbacks = function() {

  var divFeedbacks = $('#divFeedbacks');

  var generateFeedbackForm = function(feedbackId) {

    var html = "<tr><td><p class='textFeedback'>" + arrFeedbacks1[feedbackId] + "</p></td><td width=300>";

    // usefulness
    html += "<fieldset><span class='prompt'>How useful is this feedback?</span><br><br>";
    html += "<span class='info'>1 - Not very useful, 5 - Very useful</span><br><br>"
    for(var i = 0; i < 5; i++) {
      html += "<label>" + (i + 1) + "&nbsp;<input type='radio' name='rating" + feedbackId + "' value='" + (i + 1) + "'/></label>";
    }
    html += "</fieldset>";

    //confidence
    html += "<fieldset><span class='prompt'>How confident are you in your rating?</span><br><br>";
    html += "<span class='info'>1 - Not very confident, 5 - Very confident</span><br><br>"
    for(var i = 0; i < 5; i++) {
      html += "<label>" + (i + 1) + "&nbsp;<input type='radio' name='confidence" + feedbackId + "' value='" + (i + 1) + "'/></label>";
    }
    html += "</fieldset>";

    //rationale
    html += "<fieldset><span class='prompt'>What is your rationale behind your rating for feedback usefulness and rating confidence?</span><br><br>";
    html += "<textarea rows=10 cols=25 name='rationale" + feedbackId + "'></textarea>"
    html += "</fieldset>";   

    html += "</td></tr>";
    return html;
  }

  for(var i = 0; i < arrFeedbacks1.length; i++) {
    var cur = divFeedbacks.html();
    divFeedbacks.html(cur + generateFeedbackForm(i)); 
    console.log(cur + ", " + generateFeedbackForm(i));
  }
}


$(document).ready(function(){

  var condition = getRandomInt(0, 3);
  
  console.log(condition);
  $('#textSocialCue').html(generateSocialCueText(condition));
  $('#hiddenCondition').val(condition);
  populateFeedbacks();
});
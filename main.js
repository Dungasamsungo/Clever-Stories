
document.getElementById("btn").addEventListener("click", generateStory)

function generateStory() {
    let adjective = document.getElementById('Adjective').value;
    let noun = document.getElementById('noun').value;
    let verb = document.getElementById('verb').value;
    let Exclamation = document.getElementById('Exclamation').value;
    let verb1 = document.getElementById('verb1').value;
    let verb2 = document.getElementById('verb2').value;

    let story = `The other day, I was really in trouble. It all started when I saw a very
    ${adjective} ${noun} ${verb} "down the hallway." ${Exclamation}!
    "I yelled. But all I could think to do was to" ${verb1} "over and over.
    Miraculously, that caused it to stop, but not before it tried to"
    ${verb2} "right in front of my family.`;

    document.getElementById("story").innerHTML = story;

}




 
 



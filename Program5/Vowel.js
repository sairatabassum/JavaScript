

var char=prompt("Enter character: ");
char=char.toLowerCase();

switch(char){

    case 'a':
    case 'i':
    case 'o':
    case 'e':
    case 'u':
        
        document.write("<br> Vowel");
        break;

    default:
        document.write("<br> Consonant");

}
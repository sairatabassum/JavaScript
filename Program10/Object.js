// Person details

var name,age,lang;

name="Saira Tabassum";
age=12;
lang=["Bangla","English"];

// Create an Object, Print the value of an object
var person1={
    name:"Asri Tabassum",
    age:23,
    lang:["English","Hindi"]
}

document.write(person1.name);

// Constructor

function Student(name,age,lang){

    this.name=name;
    this.age=age;
    this.lang=lang;

    this.print=function(){

        document.write('<br>'+this.name);
        document.write('<br>'+this.age);
        document.write('<br>'+this.lang);
    }

}

var student1=new Student("Saseri",23,["bangla","english","hindi"]);
var student2=new Student("sga",34,["bangla","english","hindi"]);
var student3=new Student("asdk",21,["bangla","english","hindi"]);

document.write('<br>'+student1.name);

student2.print();
student3.print();


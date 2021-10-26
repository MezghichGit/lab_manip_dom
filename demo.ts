//alert("Hello Typescript");
console.log("Hello Typescript");

class Etudiant{
    public info(){
        //for(var i=0; i<10;i++)
        for(let i=0; i<10;i++)
        {
            console.log("Un etudiant");
        }
        console.log(i);
        
    }
}

var e : Etudiant = new Etudiant();
e.info();
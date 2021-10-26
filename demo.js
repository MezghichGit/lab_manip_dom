//alert("Hello Typescript");
console.log("Hello Typescript");
var Etudiant = /** @class */ (function () {
    function Etudiant() {
    }
    Etudiant.prototype.info = function () {
        //for(var i=0; i<10;i++)
        for (var i = 0; i < 10; i++) {
            console.log("Un etudiant");
        }
        console.log(i);
    };
    return Etudiant;
}());
var e = new Etudiant();
e.info();

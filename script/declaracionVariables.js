let menstruantesJSON = [];

//Inicio constantes
const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

//Instanciación de objeto clase Menstruante
let menstruante1 = new Menstruante("", Date, 0, 0, [], true, 0);
if (!(localStorage.getItem("menstruantes"))) {
    localStorage.setItem("menstruantes", JSON.stringify(menstruante1));
}
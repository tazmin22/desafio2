const fs = require("fs");


async function CosasAsincronicas (){

    if (fs.existsSync ("test.txt")) {
        console.log ("increible, existe!");
        let contenidoInicial = await fs.promises.readFile ("test.txt" , "utf-8");
        contenidoInicial = JSON.parse(contenidoInicial)

        contenidoInicial.push({nombre: "facu"});
        contenidoInicial.push ({nombre: "laura"});
        contenidoInicial.push ({ nombre: pepa});

    const pasarAString = JSON.stringify(contenidoInicial);
        await fs.promises.writeFile ("test.txt" , pasarAString);
    }else{
        console.log("no existia, se creo");
        await fs.promises.writeFile("test.txt", "creado");
    }

}
CosasAsincronicas();




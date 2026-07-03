

const fs = require(`fs`);

const colors = require('colors');

const crearAchivo = async (base = 5, Listar = false, hasta = 10) => {

    try {



        let salida = ``;

        for (let i = 0; i < hasta +1; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
        }

        if (Listar) {
            console.log(`=======================`.underline.red);
            console.log(`=====tabla del`.green , colors.bgBlue(base));
            console.log(`=======================`.blue);
            console.log(salida.rainbow);
        }



        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla- ${base}.txt creada`;

    } catch (error) {
        throw error;
    }


};

module.exports = {
    crearAchivo,
}

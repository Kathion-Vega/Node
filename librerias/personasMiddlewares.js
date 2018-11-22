module.exports = (() => {
    const datosLLenos = (req, res, next ) => {
        const { nombre, apellidos, edad, peso, ojos } = req.body;

        if(!nombre) return res.send('Falta el nombre.');
        if(!edad) return res.send('Falta la edad.');
        if(!apellidos) return res.send('Faltan los apellidos.');

        const { paterno, materno } = apellidos;

        if(!paterno) return res.send('Faltan el apellido paterno.')
        if(!materno) return res.send('Faltan  el apellido materno.')

        next();
    };

const tipoDato = (req, res, next) => {
    const { nombre, apellidos, edad, peso, ojos } = req.body;
    const { paterno, materno } = apellidos;

        if (typeof(nombre) !== 'string') return res.send('Nombre debe ser texto.');
        if (typeof(edad) !== 'number') return  res.send('Edad debe ser numero.');
        if (typeof(apellidos) !== 'object') return res.send('Apellidos debe ser objeto.');
        if (typeof(paterno) !== 'string') return res.send('Paterno debe ser texto.');
        if (typeof(materno) !== 'string') return res.send('Materno debe ser texto.');
        next();    
    };
    
    return {
        datosLLenos,
        tipoDato
    }
})();

// self-invoking fuctions
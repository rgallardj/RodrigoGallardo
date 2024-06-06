// Usando JavaSScript, implementar un metodo que permita acceder de forma segura
// a propiedades de un objeto, incluso cuando dichas propiedades no existan.

//La función debe admitir tres parametros: el objeto al que se desea acceder,
//el valor por defecto que se retornará en caso de que la propiedad no exista dentro del objeto; y por ultimo un 
//string que representa la propiedad a consultar.

//El path delimitará el camino a seguir para acceder a la propiedad deseada.
// Los distintos niveles de profundidad se separarán por un punto.
// Además, este último parametro debe ser opcional. En caso de no proveerse, 
// la función devolverá otra función que esperará ser invocada con el paht de la propiedad como argumento.



function get(obj, defaultValue, path) {
    if (typeof path === 'undefined') {
        return (p) => safeGet(obj, defaultValue, p);
    }

    const keys = path.split('.');
    let currnet = obj;

    for(const key of keys) {
        if (current && current == "object" && key in current) {
            current = current[key];
        }else {
            return defaultValue;
        }
    }
    return current;
}


function testGet() {
    const obj = {
        a: {
            b: {
                c: 1
            }
        }
    };

    assert(get(obj, 1, 'a.b.c') === 1);
    assert(get(obj, 2, 'a.b.d') === 2);
    assert(get(obj, 3, 'a.b') === 3);
    assert(get(obj, 4, 'a') === 4);
    assert(get(obj, 5, 'b') === 5);
    assert(get(obj, 6, 'c') === 6);
    assert(get(obj, 7, 'd') === 7);
    assert(get(obj, 8)('a.b.c') === 8);
    assert(get(obj, 9)('a.b.d') === 9);
    assert(get(obj, 10)('a.b') === 10);
    assert(get(obj, 11)('a') === 11);
    assert(get(obj, 12)('b') === 12);
    assert(get(obj, 13)('c') === 13);
    assert(get(obj, 14)('d') === 14);
    console.log('All test passed');
}
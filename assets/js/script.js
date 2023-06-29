const propiedadesJSON = [
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500
    }
];

let cuartos1 = document.getElementById("cuartos");
let metrosDesde1 = document.getElementById("metrosDesde");
let metrosHasta1 = document.getElementById("metrosHasta");
let buscarBtn = document.getElementById("buscarBtn");
let reinicioBtn = document.getElementById("reinicioBtn");
let totalPropiedades = document.getElementById("totalPropiedades");
let propiedades = document.querySelector("#propiedades");

//--genera la plantilla de las propiedades
function infoPropiedad(propiedad) {
    return `
    <div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
            <h5>${propiedad.nombre}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad.cuartos}</p>
                <p>Metros: ${propiedad.metros}</p>
            </div>
            <p class="my-3">${propiedad.descripcion}</p>
            <button class="btn btn-info">Ver más</button>
        </section>
    </div>`
};

//------mostrara propiedades que cumplan con la busqueda
function propiedadesBuscadas() {
    const cuartos = parseInt(cuartos1.value);
    const metrosDesde = parseInt(metrosDesde1.value);
    const metrosHasta = parseInt(metrosHasta1.value);

    // alertara si falta algun campo por llenar
    if (!metrosDesde || !metrosHasta) {
        alert("Por favor, complete todos los campos");
        return;
    }
    // Alertar si los metros cuadrados superan las propiedades disponibles
    else if (metrosDesde < 0 || metrosHasta > 500) {
        alert('No se encuentran disponibles propiedades superiores a 500 metros cuadrados');
        return;
    }

    // Filtrar propiedades dependiendo de los criterios asignados
    const propiedadesFiltradas = propiedadesJSON.filter(propiedad => {
        return (
            propiedad.cuartos === cuartos &&
            propiedad.metros >= metrosDesde &&
            propiedad.metros <= metrosHasta
        );
    });

    // Contador de propiedades totales
    totalPropiedades.textContent = propiedadesFiltradas.length;

    // Limpia el contenedor de propiedades
    propiedades.innerHTML = "";

    // Añade propiedades filtradas al contenedor usando interpolación en el innerHTML
    for (const propiedad of propiedadesFiltradas) {
        const propiedad1 = infoPropiedad(propiedad);
        propiedades.innerHTML += propiedad1;
    }
};

// Evento click al boton de busqueda
buscarBtn.addEventListener("click", propiedadesBuscadas)

// Recargar pagina 
reinicioBtn.addEventListener("click", () => {
    location.reload();
});
// Este archivo contiene un arreglo de propiedades en venta

// Arreglo de propiedades en venta
const propiedades_venta = [
    {
      // Primer objeto de propiedad en venta
    nombre: 'Casa moderna con piscina',
    src: '../img/WebPage.png',
    descripcion: 'Hermosa casa moderna con piscina y jardín amplio',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 4,
    costo: 350000,
    smoke: false,
    pets: true
    },
    {
      // Segundo objeto de propiedad en venta
    nombre: 'Departamento en zona céntrica',
    src: '../img/DepartamentoZonaCentrica.jpg',
    descripcion: 'Departamento con excelente ubicación en el centro de la ciudad',
    ubicacion: '456 Downtown Avenue, Metro City, CA 56789',
    habitaciones: 2,
    costo: 200000,
    smoke: true,
    pets: false
    },
    {
      // Tercer objeto de propiedad en venta
    nombre: 'Casa de campo con vistas panorámicas',
    src: '../img/CasaCampoVistaPanoramica.jpg',
    descripcion: 'Acogedora casa de campo con vistas impresionantes',
    ubicacion: '789 Countryside Road, Rural Village, CA 34567',
    habitaciones: 3,
    costo: 280000,
    smoke: false,
    pets: true
    },
    {
      // Cuarto objeto de propiedad en venta
    nombre: 'Apartamento en la playa',
    src: '../img/ApartamentoPlaya.jpg',
    descripcion: 'Apartamento frente al mar con acceso directo a la playa',
    ubicacion: '101 Oceanfront Drive, Seaside Town, CA 67890',
    habitaciones: 1,
    costo: 150000,
    smoke: true,
    pets: true
    }
];

// Función para generar el HTML de las propiedades en venta
function generarHTMLPropiedades() {
    let html = '';

    // Recorrer el arreglo de propiedades
    propiedades_venta.forEach(propiedad => {
        // Construir el HTML para cada propiedad utilizando template literals
        html += `
            <div class="card mb-3">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p class="card-text"><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                    <p class="card-text"><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                    <p class="card-text"><strong>Costo:</strong> $${propiedad.costo}</p>
                    <p class="card-text"><strong>Permitido fumar:</strong> ${propiedad.smoke ? 'Sí' : 'No'}</p>
                    <p class="card-text"><strong>Permitido mascotas:</strong> ${propiedad.pets ? 'Sí' : 'No'}</p>
                </div>
            </div>
        `;
    });

    return html;
}

// Exportar la función generarHTMLPropiedades
module.exports = generarHTMLPropiedades;
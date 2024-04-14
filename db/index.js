const datos = {
    usuario: {
        nUsuario: 'Pepita',
        contrasenia: 'pepitalomas123',
        email: 'pepitadepepito@gmail.com',
        fechaNacimiento:'24/04/2000',
        dni: 42585930,
        fotoPerfil: 
        },
    
    productos: [{
        nombreProducto: "iPhone 13 Pro Max",
        imagenProducto: "url_imagen_iphone_13_pro_max.jpg",
        descripcion: "El iPhone 13 Pro Max es el modelo más avanzado de Apple hasta la fecha, con su potente chip A15 Bionic, una impresionante pantalla Super Retina XDR y cámaras profesionales.",
        comentarios: [
            {
                comentador: "Usuario1",
                comentario: "¡Increíble rendimiento y calidad de cámara!",
                imagenPerfil: "url_imagen_usuario1.jpg"
            },
            {
                comentador: "Usuario2",
                comentario: "El diseño es simplemente hermoso.",
                imagenPerfil: "url_imagen_usuario2.jpg"
            }]
    },
    {
        nombreProducto: "iPhone 12 Mini",
        imagenProducto: "url_imagen_iphone_12_mini.jpg",
        descripcion: "El iPhone 12 Mini es la opción perfecta para quienes prefieren un tamaño compacto sin sacrificar potencia ni funciones. Con su chip A14 Bionic y pantalla OLED, es un dispositivo potente en un formato reducido.",
        comentarios: [
            {
                comentador: "Usuario3",
                comentario: "¡Es tan lindo y fácil de manejar!",
                imagenPerfil: "url_imagen_usuario3.jpg"
            },
            {
                comentador: "Usuario4",
                comentario: "La duración de la batería es sorprendentemente buena para su tamaño.",
                imagenPerfil: "url_imagen_usuario4.jpg"
            }]
    },
    {
        nombreProducto: "iPhone 13",
        imagenProducto: "url_imagen_iphone_13.jpg",
        descripcion: "El iPhone 13 presenta un diseño refinado con un potente rendimiento gracias a su chip A15 Bionic. Además, su sistema de cámara dual permite capturar fotos y videos impresionantes en cualquier situación.",
        comentarios: [
            {
                comentador: "Usuario5",
                comentario: "La velocidad de procesamiento es increíble.",
                imagenPerfil: "url_imagen_usuario5.jpg"
            },
            {
                comentador: "Usuario6",
                comentario: "¡La calidad de las fotos es asombrosa!",
                imagenPerfil: "url_imagen_usuario6.jpg"
            }
        ]
    },
    {
        nombreProducto: "iPhone SE (2020)",
        imagenProducto: "url_imagen_iphone_se_2020.jpg",
        descripcion: "El iPhone SE (2020) ofrece el rendimiento del chip A13 Bionic en un diseño compacto y asequible. Con su pantalla Retina HD y Touch ID, es una excelente opción para aquellos que buscan un iPhone económico.",
        comentarios: [
            {
                comentador: "Usuario7",
                comentario: "¡Excelente relación calidad-precio!",
                imagenPerfil: "url_imagen_usuario7.jpg"
            },
            {
                comentador: "Usuario8",
                comentario: "Me encanta su tamaño, perfecto para usar con una mano.",
                imagenPerfil: "url_imagen_usuario8.jpg"
            }
        ]
    },
    {
        nombreProducto: "iPhone 11 Pro",
        imagenProducto: "url_imagen_iphone_11_pro.jpg",
        descripcion: "El iPhone 11 Pro es una potente herramienta de productividad y entretenimiento con su pantalla Super Retina XDR y sistema de cámara triple. Su chip A13 Bionic garantiza un rendimiento excepcional en todas las tareas.",
        comentarios: [
            {
                comentador: "Usuario9",
                comentario: "¡La calidad de construcción es impresionante!",
                imagenPerfil: "url_imagen_usuario9.jpg"
            },
            {
                comentador: "Usuario10",
                comentario: "Las fotos nocturnas son asombrosas.",
                imagenPerfil: "url_imagen_usuario10.jpg"
            }
        ]
    },
    {
        nombreProducto: "iPhone XR",
        imagenProducto: "url_imagen_iphone_xr.jpg",
        descripcion: "El iPhone XR ofrece un rendimiento sólido con el chip A12 Bionic y una pantalla Liquid Retina de borde a borde. Con su diseño colorido y su cámara avanzada, es una excelente opción para aquellos que buscan un iPhone asequible.",
        comentarios: [
            {
                comentador: "Usuario11",
                comentario: "La duración de la batería es decepcionante.",
                imagenPerfil: "url_imagen_usuario11.jpg"
            },
            {
                comentador: "Usuario12",
                comentario: "No estoy impresionado con la calidad de la pantalla.",
                imagenPerfil: "url_imagen_usuario12.jpg"
            }
        ]
    },
    {
        nombreProducto: "iPhone XS",
        imagenProducto: "url_imagen_iphone_xs.jpg",
        descripcion: "El iPhone XS ofrece un diseño elegante con una pantalla Super Retina OLED y un rendimiento excepcional gracias al chip A12 Bionic. Con su sistema de cámara dual, es capaz de capturar fotos y videos impresionantes.",
        comentarios: [
            {
                comentador: "Usuario13",
                comentario: "El precio es excesivamente alto para las características que ofrece.",
                imagenPerfil: "url_imagen_usuario13.jpg"
            },
            {
                comentador: "Usuario14",
                comentario: "He experimentado problemas de conectividad intermitente.",
                imagenPerfil: "url_imagen_usuario14.jpg"
            }
        ]
    },
    {
        nombreProducto: "iPhone 8 Plus",
        imagenProducto: "url_imagen_iphone_8_plus.jpg",
        descripcion: "El iPhone 8 Plus combina un diseño clásico con un rendimiento confiable gracias a su chip A11 Bionic y su cámara dual. Con su pantalla Retina HD y Touch ID, sigue siendo una opción popular para muchos usuarios.",
        comentarios: [
            {
                comentador: "Usuario15",
                comentario: "La falta de Face ID es una desventaja importante.",
                imagenPerfil: "url_imagen_usuario15.jpg"
            },
            {
                comentador: "Usuario16",
                comentario: "Me decepciona que no tenga carga inalámbrica.",
                imagenPerfil: "url_imagen_usuario16.jpg"
            }
        ]
    },
    {
        nombreProducto: "Samsung Galaxy S21 Ultra",
        imagenProducto: "url_imagen_samsung_s21_ultra.jpg",
        descripcion: "El Samsung Galaxy S21 Ultra es un teléfono insignia con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas y un potente conjunto de cámaras que incluye un zoom óptico de 100x. Con su rendimiento excepcional y características premium, es ideal para aquellos que buscan lo mejor en tecnología móvil.",
        comentarios: [
            {
                comentador: "Usuario17",
                comentario: "La calidad de la pantalla es impresionante, especialmente para ver contenido multimedia.",
                imagenPerfil: "url_imagen_usuario17.jpg"
            },
            {
                comentador: "Usuario18",
                comentario: "La duración de la batería no cumple con mis expectativas, se descarga rápidamente.",
                imagenPerfil: "url_imagen_usuario18.jpg"
            }
        ]
    },
    {
        nombreProducto: "Samsung Galaxy A52",
        imagenProducto: "url_imagen_samsung_a52.jpg",
        descripcion: "El Samsung Galaxy A52 es un teléfono de gama media con una pantalla Super AMOLED de 6.5 pulgadas y una versátil configuración de cámara cuádruple. Con un diseño elegante y un rendimiento sólido, ofrece una excelente relación calidad-precio.",
        comentarios: [
            {
                comentador: "Usuario19",
                comentario: "Estoy impresionado con el rendimiento fluido y la capacidad de la batería.",
                imagenPerfil: "url_imagen_usuario19.jpg"
            },
            {
                comentador: "Usuario20",
                comentario: "La calidad de construcción no es tan sólida como esperaba, se siente un poco frágil.",
                imagenPerfil: "url_imagen_usuario20.jpg"
            }
        ]
    }]
    

}
// Revisar los nombres de usuario e imagen en el apartado comentarios de producto //
module.exports = datos
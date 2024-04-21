CREATE SCHEMA dbTi;

USE dbTi;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(100)  NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
contrasenia VARCHAR(15) NOT NULL, 
fecha DATE NOT NULL,
dni INT UNSIGNED UNIQUE NOT NULL,
foto_perfil VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
vendedor_id INT UNSIGNED,
url_imagen VARCHAR(100) NOT NULL,
nombre VARCHAR(100) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (vendedor_id) REFERENCES usuarios(id)
);


CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
producto_id INT UNSIGNED,
comentador_id INT UNSIGNED,
comentario VARCHAR(500) NOT NULL,
url_foto_perfil VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP null,
FOREIGN KEY (producto_id) REFERENCES productos(id),
FOREIGN KEY (comentador_id) REFERENCES usuarios(id)
);

INSERT INTO usuarios
VALUES (default, "herbert", "herbert.garza@example.com", "star69", "1974-03-11", 44305308, "comentador.jpg", null, null, null);
INSERT INTO usuarios
VALUES (default,"dMiller", "danny.miller@example.com", "madrid", "1974-03-12", 41305308, "comentador.jpg", null, null, null);
INSERT INTO usuarios
VALUES (default, "fVargas","francis.vargas@example.com", "star68", "1974-04-11", 43305308, "comentador.jpg", null, null, null);
INSERT INTO usuarios
VALUES (default, "gMitchelle", "gladys.mitchelle@example.com", "star67", "1974-02-11", 40305308, "comentadora.jpg",  null, null, null);
INSERT INTO usuarios
VALUES (default, "jMitchelle", "jladys.mitchelle@example.com", "star67", "1974-02-12", 40205308, "comentadora.jpg",  null, null, null);

INSERT INTO productos
VALUES (default, null, "iphone_13_pro_max.jpg", "Iphone 13 Pro Max", "El iPhone 13 Pro Max es el modelo más avanzado de Apple hasta la fecha, con su potente chip A15 Bionic, una impresionante pantalla Super Retina XDR y cámaras profesionales.", null, null, null),
(default, null, "iphone_12_mini.jpg", "iPhone 12 Mini", "El iPhone 12 Mini es la opción perfecta para quienes prefieren un tamaño compacto sin sacrificar potencia ni funciones. Con su chip A14 Bionic y pantalla OLED, es un dispositivo potente en un formato reducido.", null, null, null),
(default, null, "iphone_13.jpg", "iPhone 13", "El iPhone 13 presenta un diseño refinado con un potente rendimiento gracias a su chip A15 Bionic. Además, su sistema de cámara dual permite capturar fotos y videos impresionantes en cualquier situación.", null, null, null),
(default, null, "iphone_se_2020.jpg", "iPhone SE (2020)", "El iPhone SE (2020) ofrece el rendimiento del chip A13 Bionic en un diseño compacto y asequible. Con su pantalla Retina HD y Touch ID, es una excelente opción para aquellos que buscan un iPhone económico.", null, null, null),
(default, null, "iphone_11_pro.jpg", "Iphone 11 Pro", "El iPhone 11 Pro es una potente herramienta de productividad y entretenimiento con su pantalla Super Retina XDR y sistema de cámara triple. Su chip A13 Bionic garantiza un rendimiento excepcional en todas las tareas.", null, null, null),
(default, null, "iphone_xr.jpg", "iPhone XR", "El iPhone XR ofrece un rendimiento sólido con el chip A12 Bionic y una pantalla Liquid Retina de borde a borde. Con su diseño colorido y su cámara avanzada, es una excelente opción para aquellos que buscan un iPhone asequible.", null, null, null),
(default, null, "iphone_xs.jpg", "iPhone XS", "El iPhone XS ofrece un diseño elegante con una pantalla Super Retina OLED y un rendimiento excepcional gracias al chip A12 Bionic. Con su sistema de cámara dual, es capaz de capturar fotos y videos impresionantes.", null, null, null),
(default, null, "iphone_8_plus.jpg", "iPhone 8 Plus","El iPhone 8 Plus combina un diseño clásico con un rendimiento confiable gracias a su chip A11 Bionic y su cámara dual. Con su pantalla Retina HD y Touch ID, sigue siendo una opción popular para muchos usuarios.", null, null, null),
(default, null, "samsung_s21_ultra.jpg", "Samsung Galaxy S21 Ultra", "El Samsung Galaxy S21 Ultra es un teléfono insignia con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas y un potente conjunto de cámaras que incluye un zoom óptico de 100x. Con su rendimiento excepcional y características premium, es ideal para aquellos que buscan lo mejor en tecnología móvil.", null, null, null),
(default, null, "samsung_a52.jpg", "Samsung Galaxy A52", "El Samsung Galaxy A52 es un teléfono de gama media con una pantalla Super AMOLED de 6.5 pulgadas y una versátil configuración de cámara cuádruple. Con un diseño elegante y un rendimiento sólido, ofrece una excelente relación calidad-precio.", null, null, null);

INSERT INTO comentarios
VALUES
(default, 1, 1, "¡Increíble rendimiento y calidad de cámara!", "comentadora.jpg", null, null, null),
(default, 1, 2, "El diseño es simplemente hermoso.", "comentadora.jpg", null, null, null),
(default, 1, 3, "La pantalla es simplemente deslumbrante, cada detalle se ve increíblemente nítido y los colores son vibrantes.", null, null, null),
(default, 2, 3, "¡Es tan lindo y fácil de manejar!", "comentador.jpeg", null, null, null),
(default, 2, 4, "La duración de la batería es sorprendentemente buena para su tamaño.", "comentadora.jpg", null, null, null),
(default, 2, 5, "¡Definitivamente recomiendo este dispositivo para quienes prefieren un teléfono más pequeño sin comprometer la experiencia!", "comentadora.jpg", null, null, null),
(default, 3, 5, "La velocidad de procesamiento es increíble.", "comentador.jpeg", null, null, null),
(default, 3, 1, "¡La calidad de las fotos es asombrosa!", "comentadora.jpg", null, null, null),
(default, 3, 2, "La mejora en la duración de la batería es notable y la calidad de la cámara es excepcional", "comentadora.jpg", null, null, null),
(default, 4, 2, "¡Excelente relación calidad-precio!", "comentador.jpeg", null, null, null),
(default, 4, 3, "Me encanta su tamaño, perfecto para usar con una mano.", "comentadora.jpg", null, null, null),
(default, 4, 3, "¡Una excelente opción para aquellos que buscan un iPhone potente y compacto!", "comentadora.jpg", null, null, null),
(default, 5, 4, "¡La calidad de construcción es impresionante!", "comentador.jpeg", null, null, null),
(default, 5, 5, "Las fotos nocturnas son asombrosas.", "comentadora.jpg", null, null, null),
(default, 5, 1, "A pesar de tener un excelente rendimiento general, su pantalla LCD puede no estar a la altura de las expectativas de aquellos que buscan la calidad de visualización de las pantallas OLED", "comentadora.jpg", null, null, null),
(default, 6, 1, "La duración de la batería es decepcionante.", "comentador.jpeg", null, null, null),
(default, 6, 2, "No estoy impresionado con la calidad de la pantalla.", "comentadora.jpg", null, null, null),
(default, 6, 5, "La calidad de la cámara es decente, pero podría quedarse un poco atrás en condiciones de poca luz.", "comentadora.jpg", null, null, null),
(default, 7, 3, "El precio es excesivamente alto para las características que ofrece.", "comentador.jpeg", null, null, null),
(default, 7, 4, "He experimentado problemas de conectividad intermitente.", "comentadora.jpg", null, null, null),
(default, 7, 2, "Todo funciona de manera suave y rápida.", "comentadora.jpg", null, null, null),
(default, 8, 1, "La falta de Face ID es una desventaja importante.", "comentadora.jpg", null, null, null),
(default, 8, 2, "Me decepciona que no tenga carga inalámbrica.", "comentadora.jpg", null, null, null),
(default, 8, 3, "Su diseño elegante y su construcción robusta lo hacen sentir premium en la mano.", "comentadora.jpg", null, null, null),
(default, 9, 4,"La calidad de la pantalla es impresionante, especialmente para ver contenido multimedia.", "comentador.jpeg" , null, null, null),
(default, 9, 3,"La duración de la batería no cumple con mis expectativas, se descarga rápidamente.", "comentadora.jpg" , null, null, null),
(default, 9, 1,"La capacidad de la cámara es impresionante.", "comentadora.jpg" , null, null, null),
(default, 10, 1, "Estoy impresionado con el rendimiento fluido y la capacidad de la batería.", "comentador.jpeg", null, null, null),
(default, 10, 4, "La calidad de construcción no es tan sólida como esperaba, se siente un poco frágil.", "comentadora.jpg", null, null, null),
(default, 10, 3, "Una verdadera joya en su rango de precios.", "comentadora.jpg", null, null, null);
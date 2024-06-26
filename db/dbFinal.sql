CREATE SCHEMA dbTi;

USE dbTi;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(100)  NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
contrasenia VARCHAR(100) NOT NULL, 
fecha DATE,
dni INT UNSIGNED,
foto_perfil VARCHAR(100),
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
VALUES (default, "herbert", "herbert.garza@example.com", "$2a$10$i5xiNLfVGcBJkeXuHN0sQOxLayrea9fUoJ7xKB0ft/4VjjEXV0lky", "1974-03-11", 44305308, "/images/users/comentador.jpeg", null, null, null);
INSERT INTO usuarios
VALUES (default,"dMiller", "danny.miller@example.com", "$2a$10$lIGTx71zRuHSxPNhrW22a.w0tCrVqaEnoa4gsSk5GSzgHJdgndKDW", "1974-03-12", 41305308, "/images/users/comentador.jpeg", null, null, null);
INSERT INTO usuarios
VALUES (default, "fVargas","francis.vargas@example.com", "$2a$10$UFwkjAO4sSfWnCJLxqV5D.bSDgHQUy.7V4JWs4i/LNCTHAHmyeU8q", "1974-04-11", 43305308, "/images/users/comentador.jpeg", null, null, null);
INSERT INTO usuarios
VALUES (default, "gMitchelle", "gladys.mitchelle@example.com", "$2a$10$.m.LpKUrJo9kDe2wDY5Q9uqL5g0oLvDUvDH8v9xue4hArvBZo9SbG", "1974-02-11", 40305308, "/images/users/comentadora.jpg",  null, null, null);
INSERT INTO usuarios
VALUES (default, "jMitchelle", "jladys.mitchelle@example.com", "$2a$10$Xr8ZfTUonScBLFAq27DGcuu9OeC2UZhtzJI9lDwyvcJFXODYW44cO", "1974-02-12", 40205308, "/images/users/comentadora.jpg",  null, null, null);

INSERT INTO productos
VALUES (default, 1, "/images/products/iphone_13_pro_max.jpg", "Iphone 13 Pro Max", "El iPhone 13 Pro Max es el modelo más avanzado de Apple hasta la fecha, con su potente chip A15 Bionic, una impresionante pantalla Super Retina XDR y cámaras profesionales.", null, null, null),
(default, 2, "/images/products/iphone_12_mini.jpg", "iPhone 12 Mini", "El iPhone 12 Mini es la opción perfecta para quienes prefieren un tamaño compacto sin sacrificar potencia ni funciones. Con su chip A14 Bionic y pantalla OLED, es un dispositivo potente en un formato reducido.", null, null, null),
(default, 3, "/images/products/iphone_13.jpg", "iPhone 13", "El iPhone 13 presenta un diseño refinado con un potente rendimiento gracias a su chip A15 Bionic. Además, su sistema de cámara dual permite capturar fotos y videos impresionantes en cualquier situación.", null, null, null),
(default, 4, "/images/products/iphone_se_2020.jpg", "iPhone SE (2020)", "El iPhone SE (2020) ofrece el rendimiento del chip A13 Bionic en un diseño compacto y asequible. Con su pantalla Retina HD y Touch ID, es una excelente opción para aquellos que buscan un iPhone económico.", null, null, null),
(default, 5, "/images/products/iphone_11_pro.jpg", "Iphone 11 Pro", "El iPhone 11 Pro es una potente herramienta de productividad y entretenimiento con su pantalla Super Retina XDR y sistema de cámara triple. Su chip A13 Bionic garantiza un rendimiento excepcional en todas las tareas.", null, null, null),
(default, 5, "/images/products/iphone_xr.jpg", "iPhone XR", "El iPhone XR ofrece un rendimiento sólido con el chip A12 Bionic y una pantalla Liquid Retina de borde a borde. Con su diseño colorido y su cámara avanzada, es una excelente opción para aquellos que buscan un iPhone asequible.", null, null, null),
(default, 4, "/images/products/iphone_xs.jpg", "iPhone XS", "El iPhone XS ofrece un diseño elegante con una pantalla Super Retina OLED y un rendimiento excepcional gracias al chip A12 Bionic. Con su sistema de cámara dual, es capaz de capturar fotos y videos impresionantes.", null, null, null),
(default, 2, "/images/products/iphone_8_plus.jpg", "iPhone 8 Plus","El iPhone 8 Plus combina un diseño clásico con un rendimiento confiable gracias a su chip A11 Bionic y su cámara dual. Con su pantalla Retina HD y Touch ID, sigue siendo una opción popular para muchos usuarios.", null, null, null),
(default, 3, "/images/products/samsung_s21_ultra.jpg", "Samsung Galaxy S21 Ultra", "El Samsung Galaxy S21 Ultra es un teléfono insignia con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas y un potente conjunto de cámaras que incluye un zoom óptico de 100x. Con su rendimiento excepcional y características premium, es ideal para aquellos que buscan lo mejor en tecnología móvil.", null, null, null),
(default, 1, "/images/products/samsung_a52.jpg", "Samsung Galaxy A52", "El Samsung Galaxy A52 es un teléfono de gama media con una pantalla Super AMOLED de 6.5 pulgadas y una versátil configuración de cámara cuádruple. Con un diseño elegante y un rendimiento sólido, ofrece una excelente relación calidad-precio.", null, null, null),
(default, 5, "/images/products/iphone_13_pro_max.jpg", "Iphone 13 Pro Max", "El iPhone 13 Pro Max es el modelo más avanzado de Apple hasta la fecha, con su potente chip A15 Bionic, una impresionante pantalla Super Retina XDR y cámaras profesionales.", null, null, null),
(default, 4, "/images/products/iphone_12_mini.jpg", "iPhone 12 Mini", "El iPhone 12 Mini es la opción perfecta para quienes prefieren un tamaño compacto sin sacrificar potencia ni funciones. Con su chip A14 Bionic y pantalla OLED, es un dispositivo potente en un formato reducido.", null, null, null),
(default, 2, "/images/products/iphone_13.jpg", "iPhone 13", "El iPhone 13 presenta un diseño refinado con un potente rendimiento gracias a su chip A15 Bionic. Además, su sistema de cámara dual permite capturar fotos y videos impresionantes en cualquier situación.", null, null, null),
(default, 3, "/images/products/iphone_se_2020.jpg", "iPhone SE (2020)", "El iPhone SE (2020) ofrece el rendimiento del chip A13 Bionic en un diseño compacto y asequible. Con su pantalla Retina HD y Touch ID, es una excelente opción para aquellos que buscan un iPhone económico.", null, null, null),
(default, 1, "/images/products/iphone_11_pro.jpg", "Iphone 11 Pro", "El iPhone 11 Pro es una potente herramienta de productividad y entretenimiento con su pantalla Super Retina XDR y sistema de cámara triple. Su chip A13 Bionic garantiza un rendimiento excepcional en todas las tareas.", null, null, null),
(default, 1, "/images/products/iphone_xr.jpg", "iPhone XR", "El iPhone XR ofrece un rendimiento sólido con el chip A12 Bionic y una pantalla Liquid Retina de borde a borde. Con su diseño colorido y su cámara avanzada, es una excelente opción para aquellos que buscan un iPhone asequible.", null, null, null),
(default, 2, "/images/products/iphone_xs.jpg", "iPhone XS", "El iPhone XS ofrece un diseño elegante con una pantalla Super Retina OLED y un rendimiento excepcional gracias al chip A12 Bionic. Con su sistema de cámara dual, es capaz de capturar fotos y videos impresionantes.", null, null, null),
(default, 3, "/images/products/iphone_8_plus.jpg", "iPhone 8 Plus","El iPhone 8 Plus combina un diseño clásico con un rendimiento confiable gracias a su chip A11 Bionic y su cámara dual. Con su pantalla Retina HD y Touch ID, sigue siendo una opción popular para muchos usuarios.", null, null, null),
(default, 4, "/images/products/samsung_s21_ultra.jpg", "Samsung Galaxy S21 Ultra", "El Samsung Galaxy S21 Ultra es un teléfono insignia con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas y un potente conjunto de cámaras que incluye un zoom óptico de 100x. Con su rendimiento excepcional y características premium, es ideal para aquellos que buscan lo mejor en tecnología móvil.", null, null, null),
(default, 5, "/images/products/samsung_a52.jpg", "Samsung Galaxy A52", "El Samsung Galaxy A52 es un teléfono de gama media con una pantalla Super AMOLED de 6.5 pulgadas y una versátil configuración de cámara cuádruple. Con un diseño elegante y un rendimiento sólido, ofrece una excelente relación calidad-precio.", null, null, null);

INSERT INTO comentarios
VALUES
(default, 1, 1, "¡Increíble rendimiento y calidad de cámara!", "/images/users/comentadora.jpg", null, null, null),
(default, 1, 2, "El diseño es simplemente hermoso.", "/images/users/comentadora.jpg", null, null, null),
(default, 1, 3, "La pantalla es simplemente deslumbrante, cada detalle se ve increíblemente nítido y los colores son vibrantes.","/images/users/comentadora.jpg", null, null, null),
(default, 2, 4, "¡Es tan lindo y fácil de manejar!", "/images/users/comentador.jpeg", null, null, null),
(default, 2, 5, "La duración de la batería es sorprendentemente buena para su tamaño.", "/images/users/comentadora.jpg", null, null, null),
(default, 2, 1, "¡Definitivamente recomiendo este dispositivo para quienes prefieren un teléfono más pequeño sin comprometer la experiencia!", "/images/users/comentadora.jpg", null, null, null),
(default, 3, 2, "La velocidad de procesamiento es increíble.", "/images/users/comentador.jpeg", null, null, null),
(default, 3, 3, "¡La calidad de las fotos es asombrosa!", "/images/users/comentadora.jpg", null, null, null),
(default, 3, 4, "La mejora en la duración de la batería es notable y la calidad de la cámara es excepcional", "/images/users/comentadora.jpg", null, null, null),
(default, 4, 5, "¡Excelente relación calidad-precio!", "/images/users/comentador.jpeg", null, null, null),
(default, 4, 1, "Me encanta su tamaño, perfecto para usar con una mano.", "comentadora.jpg", null, null, null),
(default, 4, 2, "¡Una excelente opción para aquellos que buscan un iPhone potente y compacto!", "/images/users/comentadora.jpg", null, null, null),
(default, 5, 3, "¡La calidad de construcción es impresionante!", "/images/users/comentador.jpeg", null, null, null),
(default, 5, 4, "Las fotos nocturnas son asombrosas.", "/images/users/comentadora.jpg", null, null, null),
(default, 5, 5, "A pesar de tener un excelente rendimiento general, su pantalla LCD puede no estar a la altura de las expectativas de aquellos que buscan la calidad de visualización de las pantallas OLED", "/images/users/comentadora.jpg", null, null, null),
(default, 6, 1, "La duración de la batería es decepcionante.", "/images/users/comentador.jpeg", null, null, null),
(default, 6, 2, "No estoy impresionado con la calidad de la pantalla.", "/images/users/comentadora.jpg", null, null, null),
(default, 6, 3, "La calidad de la cámara es decente, pero podría quedarse un poco atrás en condiciones de poca luz.", "/images/users/comentadora.jpg", null, null, null),
(default, 7, 4, "El precio es excesivamente alto para las características que ofrece.", "/images/users/comentador.jpeg", null, null, null),
(default, 7, 5, "He experimentado problemas de conectividad intermitente.", "/images/users/comentadora.jpg", null, null, null),
(default, 7, 1, "Todo funciona de manera suave y rápida.", "/images/users/comentadora.jpg", null, null, null),
(default, 8, 2, "La falta de Face ID es una desventaja importante.", "/images/users/comentadora.jpg", null, null, null),
(default, 8, 3, "Me decepciona que no tenga carga inalámbrica.", "/images/users/comentadora.jpg", null, null, null),
(default, 8, 4, "Su diseño elegante y su construcción robusta lo hacen sentir premium en la mano.", "/images/users/comentadora.jpg", null, null, null),
(default, 9, 5,"La calidad de la pantalla es impresionante, especialmente para ver contenido multimedia.", "/images/users/comentador.jpeg" , null, null, null),
(default, 9, 1,"La duración de la batería no cumple con mis expectativas, se descarga rápidamente.", "/images/users/comentadora.jpg" , null, null, null),
(default, 9, 2,"La capacidad de la cámara es impresionante.", "/images/users/comentadora.jpg" , null, null, null),
(default, 10, 3, "Estoy impresionado con el rendimiento fluido y la capacidad de la batería.", "/images/users/comentador.jpeg", null, null, null),
(default, 10, 4, "La calidad de construcción no es tan sólida como esperaba, se siente un poco frágil.", "/images/users/comentadora.jpg", null, null, null),
(default, 10, 5, "Una verdadera joya en su rango de precios.", "/images/users/comentadora.jpg", null, null, null);

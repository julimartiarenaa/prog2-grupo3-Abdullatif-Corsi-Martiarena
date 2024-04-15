
CREATE SCHEMA dbTi;

USE dbTi;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
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
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt  TIMESTAMP null,

FOREIGN KEY (producto_id) REFERENCES productos(id),
FOREIGN KEY (comentador_id) REFERENCES usuarios(id)
);
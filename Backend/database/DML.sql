INSERT INTO usuarios (nombre, apellido, telefono, email, direccion, password, is_admin)
VALUES
('Juan', 'Pérez', '123456789', 'juan.perez@example.com', 'Calle Falsa 123', 'password123', false),
('Ana', 'Gómez', '987654321', 'ana.gomez@example.com', 'Avenida Siempre Viva 456', 'password456', true);

INSERT INTO productos (nombre, precio, stock, descripcion, img, creado_por)
VALUES
('Bicitleta Andes', 200000, 100, 'de montaña', 'https://static.netshoes.com.br/produtos/bicicleta-aro-29-ksw-xlt-21v-cambios-shimano-freio-a-disco-mecanico-com-suspensao/08/CGY-0004-108/CGY-0004-108_zoom1.jpg', 1),
('Bicicleta norte', 400000, 50, 'Modelo hibrido', 'https://images.tcdn.com.br/img/img_prod/1153014/bicicleta_hibrida_urbana_anfinity_new_yorker_aro_700_em_aluminio_cambio_shimano_23_1_47be5fefa89841303a2832be8016f191.jpg', 2);

INSERT INTO compras (id_usuario, id_producto, cantidad)
VALUES
(1, 1, 2),
(2, 2, 1);
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2024 a las 20:46:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `haciendola_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `pk_product_id` int(11) NOT NULL,
  `product_handle` varchar(50) NOT NULL,
  `product_title` varchar(50) NOT NULL,
  `product_description` text NOT NULL,
  `product_sku` int(11) NOT NULL,
  `product_grams` decimal(10,2) NOT NULL,
  `product_stock` int(11) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_compare_price` decimal(10,2) NOT NULL,
  `product_bar_code` varchar(13) NOT NULL,
  `fk_user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`pk_product_id`, `product_handle`, `product_title`, `product_description`, `product_sku`, `product_grams`, `product_stock`, `product_price`, `product_compare_price`, `product_bar_code`, `fk_user_id`, `created_at`, `updated_at`) VALUES
(1, 'test', 'mi test', 'hello hehe', 10, 10.00, 0, 9.99, 12.99, '1234567890123', 2, '2024-05-12 06:29:04', '2024-05-12 06:29:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `pk_user_id` int(11) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_pin` varchar(100) NOT NULL,
  `fk_user_state` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`pk_user_id`, `user_name`, `user_password`, `user_pin`, `fk_user_state`, `created_at`, `updated_at`) VALUES
(1, '', '', '', 1, '2024-05-11 08:58:44', '2024-05-11 08:58:44'),
(2, 'vladi', '$2b$08$jqJpBAnBCjUtUr.t/9CsbOtYCk/XkGt07v2e9wfqH.wl385Nm.zrq', '$2b$08$Efb3d27Z6EimTgJ3E3aTBuGXzB.X/J83t5lv6XUGO1xiGCSFlVf.2', 1, '2024-05-13 23:41:14', '2024-05-13 23:41:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userstates`
--

CREATE TABLE `userstates` (
  `pk_user_state_id` int(11) NOT NULL,
  `user_state_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `userstates`
--

INSERT INTO `userstates` (`pk_user_state_id`, `user_state_name`) VALUES
(1, 'Activado'),
(2, 'No activad'),
(3, 'Restaurar ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pk_product_id`),
  ADD UNIQUE KEY `product_bar_code` (`product_bar_code`),
  ADD KEY `fk_user_id` (`fk_user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`pk_user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD KEY `fk_user_state` (`fk_user_state`);

--
-- Indices de la tabla `userstates`
--
ALTER TABLE `userstates`
  ADD PRIMARY KEY (`pk_user_state_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `pk_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `pk_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `userstates`
--
ALTER TABLE `userstates`
  MODIFY `pk_user_state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`pk_user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fk_user_state`) REFERENCES `userstates` (`pk_user_state_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

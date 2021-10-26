-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 26, 2021 at 09:33 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodetest`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `group_id`, `user_id`) VALUES
(1, 1, 1),
(3, 1, 1),
(5, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `amount` decimal(4,0) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `group_id`, `amount`, `description`) VALUES
(2, 8, '100', 'Tree'),
(3, 7, '350', 'Loan'),
(4, 5, '90', 'Gas'),
(6, 5, '400', 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'Travel Palanga'),
(3, 'Travel Europe'),
(5, 'Monthly Payments'),
(7, 'Home Loan'),
(8, 'Christmas Gifts');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `reg_timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `reg_timestamp`) VALUES
(1, 'Hanes Johnson', 'Hanes@johnson.com', '$2a$10$9uHTo6ScSpXc/iSiG/X9WeEqyD72SlOj3k95g5JnT6i1q634.EzTe', '2021-10-25 14:39:06'),
(2, 'Will Smith', 'will@smith.com', '$2a$10$GQQNbC/2z.3cK/0L0merw.TX.ujBsafojzTLuvutQTM67Yf67dzvi', '2021-10-25 14:40:20'),
(3, 'Jonathan Piterson', 'jonathan@p.com', '$2a$10$941cD0ZJCC8r5AAvgZQ6JOfveIGUP13ArnEAuKSCg2kqxiRF0qkfG', '2021-10-25 14:47:25'),
(5, 'Jonas Jonaitis', 'jonas@gmail.com', '123456', '2021-10-25 16:57:23'),
(6, 'Bill Clinton', 'bill@clinton.com', '$2a$10$yO/17esosFpU1Tsyrl1xoOb/WHFoHSFzUqO.vflYWt17oT7nqAUKe', '2021-10-25 17:09:38'),
(7, 'Wiliam Bow', 'wilaim@ggmail.com', '$2a$10$Kf/0j.k8Ot5sirZA.MDrZuuXyquyGYD3EdslyaFwSOD1gNW3cuMvK', '2021-10-25 22:43:11'),
(12, 'James Bond', 'james@bond.uk', '$2a$10$oKtuxAdzaA1R3TCeRuOKRuZHMoikvIcih3Vxu/QAmYWg9gdNuc5im', '2021-10-26 16:00:47'),
(16, 'Stephen King', 'stephen@king.com', '$2a$10$7FeJuZVP9ofrqT2Dzo1VPujqKtFWG5oRvM/DbWSLsMXadGlgnTXGG', '2021-10-26 22:20:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`id`) REFERENCES `groups` (`id`);

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

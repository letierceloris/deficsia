-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 09 fév. 2020 à 21:04
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `deficsia`
--

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

DROP TABLE IF EXISTS `cours`;
CREATE TABLE IF NOT EXISTS `cours` (
  `IdCours` bigint(20) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Descpt` varchar(500) NOT NULL,
  `IdDifficulte` bigint(20) NOT NULL,
  `Duree` bigint(20) NOT NULL,
  `LastModif` datetime DEFAULT NULL,
  PRIMARY KEY (`IdCours`),
  KEY `IdDifficulte` (`IdDifficulte`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`IdCours`, `Nom`, `Descpt`, `IdDifficulte`, `Duree`, `LastModif`) VALUES
(1, 'Apprendre à faire une API de genie', 'Ceci est une incroyable description', 1, 20, '2020-02-06 10:44:44'),
(2, 'Cours2', 'Ceci est mon cours 2', 2, 0, '2020-02-07 23:51:44');

-- --------------------------------------------------------

--
-- Structure de la table `cours_module`
--

DROP TABLE IF EXISTS `cours_module`;
CREATE TABLE IF NOT EXISTS `cours_module` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdCours` int(11) DEFAULT NULL,
  `IdModule` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours_module`
--

INSERT INTO `cours_module` (`Id`, `IdCours`, `IdModule`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 4),
(6, 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `difficulte`
--

DROP TABLE IF EXISTS `difficulte`;
CREATE TABLE IF NOT EXISTS `difficulte` (
  `IdDifficulte` bigint(20) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(30) NOT NULL,
  `LastModif` datetime DEFAULT NULL,
  PRIMARY KEY (`IdDifficulte`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `difficulte`
--

INSERT INTO `difficulte` (`IdDifficulte`, `Nom`, `LastModif`) VALUES
(1, 'Facile', NULL),
(2, 'Moyenne', NULL),
(3, 'Difficile', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `inscription`
--

DROP TABLE IF EXISTS `inscription`;
CREATE TABLE IF NOT EXISTS `inscription` (
  `IdUtilisateur` bigint(20) NOT NULL,
  `IdCours` bigint(20) NOT NULL,
  `DateInscription` datetime NOT NULL,
  `LastModif` datetime DEFAULT NULL,
  PRIMARY KEY (`IdCours`,`IdUtilisateur`),
  KEY `IdUtilisateur` (`IdUtilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `inscription`
--

INSERT INTO `inscription` (`IdUtilisateur`, `IdCours`, `DateInscription`, `LastModif`) VALUES
(1, 1, '2020-02-06 12:22:55', '2020-02-06 12:22:55'),
(1, 2, '2020-02-08 00:00:00', '2020-02-08 00:00:00'),
(2, 1, '2020-02-08 00:00:00', '2020-02-08 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

DROP TABLE IF EXISTS `module`;
CREATE TABLE IF NOT EXISTS `module` (
  `IdModule` bigint(20) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(30) NOT NULL,
  `Descpt` varchar(500) NOT NULL,
  `Duree` bigint(20) NOT NULL,
  `LastModif` datetime DEFAULT NULL,
  PRIMARY KEY (`IdModule`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`IdModule`, `Nom`, `Descpt`, `Duree`, `LastModif`) VALUES
(1, 'Mon Incroyable Module', 'Mon Incroyable description', 6, '2020-02-06 11:44:44'),
(2, 'Module_2', 'Description Module 2', 5, '2020-02-14 10:44:44'),
(3, 'Module_3', 'Description Module 3', 6, '2020-02-14 10:44:44'),
(4, 'Module_4', 'Description Module 4', 7, '2020-02-14 10:44:44'),
(5, 'Module_5', 'Description Module 5', 8, '2020-02-14 10:44:44'),
(6, 'Module_6', 'Description Module 6', 8, '2020-02-14 10:44:44'),
(7, 'ModuleNul', 'Ce module est naze', 1, '2020-02-12 10:44:44');

-- --------------------------------------------------------

--
-- Structure de la table `progres`
--

DROP TABLE IF EXISTS `progres`;
CREATE TABLE IF NOT EXISTS `progres` (
  `IdUtilisateur` bigint(20) NOT NULL,
  `IdModule` bigint(20) NOT NULL,
  `Status` smallint(6) DEFAULT NULL,
  `LastModif` datetime DEFAULT NULL,
  PRIMARY KEY (`IdUtilisateur`,`IdModule`),
  KEY `IdModule` (`IdModule`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `progres`
--

INSERT INTO `progres` (`IdUtilisateur`, `IdModule`, `Status`, `LastModif`) VALUES
(1, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `IdUtilisateur` bigint(20) NOT NULL AUTO_INCREMENT,
  `Pseudo` varchar(30) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `AuthCode` varchar(13) NOT NULL,
  `LastModif` datetime DEFAULT NULL,
  `DateCrea` datetime NOT NULL,
  PRIMARY KEY (`IdUtilisateur`),
  UNIQUE KEY `Pseudo` (`Pseudo`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `AuthCode` (`AuthCode`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`IdUtilisateur`, `Pseudo`, `Email`, `AuthCode`, `LastModif`, `DateCrea`) VALUES
(1, 'LLETIERCE', 'lletierce@gmail.com', 'azertyuiopqsd', '2020-02-06 09:30:24', '2020-02-06 09:30:24'),
(2, 'Killjumper', 'killjumper59@hotmail.com', 'azertyuiopqsw', '2020-02-06 09:30:24', '2020-02-06 09:30:24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

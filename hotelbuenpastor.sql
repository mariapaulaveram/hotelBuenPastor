CREATE DATABASE  IF NOT EXISTS `hotelbuenpastor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hotelbuenpastor`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: hotelbuenpastor
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lugares`
--

DROP TABLE IF EXISTS `lugares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugares` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `subtitulo` varchar(250) DEFAULT NULL,
  `cuerpo` text,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugares`
--

LOCK TABLES `lugares` WRITE;
/*!40000 ALTER TABLE `lugares` DISABLE KEYS */;
INSERT INTO `lugares` VALUES (1,'Manzana Jesuítica de Córdoba','Patrimonio de la Humanidad',' La Manzana Jesuítica de Córdoba, es una manzana urbana ubicada en pleno centro de la ciudad, declarada Patrimonio de la Humanidad por la Unesco en 2000 Comprende: la Capilla Doméstica, el Colegio Nacional de Monserrat, la Iglesia de la Compañía de Jesús, la antigua sede de la Universidad Nacional de Córdoba y la Residencia.','fqpq0w2mfqlcxzkboh6u'),(2,'El Paseo del Buen Pastor','Centro cultural, recreativo y comercial','  El Paseo Del Buen Pastor cuenta con una galería comercial, en la cual se desarrollan eventos y exposiciones, también se encuentran dos restaurantes, bares, tiendas, y una fuente de aguas danzantes que gracias a su sistema de música e iluminación se convierte en un lugar atractivo muy frecuentado por los visitantes','bjoeayvcblkdaldyg2gk'),(3,'Compañia de Jesus - Capilla Domestica','Es la iglesia más antigua de la República Argentina, consagrada en el año 1671.','  Es un exquisito santuario construido entre 1650 y 1668 perteneciente a la orden de los jesuitas.\r\n\r\nOriginalmente, fue parte del hall principal de la iglesia que funcionaba allí. Fue declarada Patrimonio Mundial de la Unesco en el año 2000, junto con la totalidad del conjunto arquitectónico conocido como Manzana Jesuítica y las Estancias Jesuíticas de Córdoba.\r\n\r\nTiene un techo increíble, joya de la arquitectura jesuítica: el mismo es de “bajo presupuesto” y está armado con gruesas cañas tacuaras y recubierto con cueros de vaca posteriormente pintados, inspirados en los techos livianos de las misiones jesuíticas guaraníes en Misiones y Paraguay.\r\n','r5lhogdaeipfxx3jqvnz'),(4,'Paseo de las Artes - Güemes','Durante los fines de semana y feriados, el visitante puede comenzar su recorrido por la calle Belgrano; en Pasaje Revol encontrará la Feria de Antigüedades, Reciclados y Curiosidades.',' Está rodeado de anticuarios, galerías, callejones históricos, bodegones inolvidables y un sofisticado polo gastronómico con restaurantes étnicos o de comidas regionales con platos típicos de Córdoba, pizzerías, rústicas cervecerías artesanales, casas de té, mega bares o decenas de propuestas “Roof Top”, que ha convertido a Güemes y su paseo en uno de los lugares más visitados de la ciudad con una febril actividad nocturna.','pqb85fkluprvmpaucoy1');
/*!40000 ALTER TABLE `lugares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','1234'),(2,'admi','7bccfde7714a1ebadf06c5f4cea752c1');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-01  8:00:15

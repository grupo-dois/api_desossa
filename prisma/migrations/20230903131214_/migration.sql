/*
  Warnings:

  - You are about to drop the `dianteiro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `traseiro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `dianteiro`;

-- DropTable
DROP TABLE `traseiro`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

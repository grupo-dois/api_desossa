-- CreateTable
CREATE TABLE `bovinos` (
    `id` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data_abate` INTEGER NOT NULL,
    `data_desossa` INTEGER NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `peso_carcaca` DOUBLE NOT NULL,
    `responsavel_desossa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

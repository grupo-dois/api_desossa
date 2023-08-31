-- AlterTable
ALTER TABLE `bovinos` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateTable
CREATE TABLE `dianteiro` (
    `nome_produto` VARCHAR(191) NOT NULL,
    `peso` INTEGER NOT NULL,
    `preco_custo` DOUBLE NOT NULL,
    `percent_preco_custo` INTEGER NOT NULL,
    `preco_venda` DOUBLE NOT NULL,
    `margem` INTEGER NOT NULL,
    `dianteiro_id` INTEGER NOT NULL,

    UNIQUE INDEX `dianteiro_dianteiro_id_key`(`dianteiro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

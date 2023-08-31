-- CreateTable
CREATE TABLE `traseiro` (
    `nome_produto` VARCHAR(191) NOT NULL,
    `peso` INTEGER NOT NULL,
    `preco_custo` DOUBLE NOT NULL,
    `percent_preco_custo` INTEGER NOT NULL,
    `preco_venda` DOUBLE NOT NULL,
    `margem` INTEGER NOT NULL,
    `traseiro_id` INTEGER NOT NULL,

    UNIQUE INDEX `traseiro_traseiro_id_key`(`traseiro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

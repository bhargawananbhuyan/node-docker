CREATE TABLE IF NOT EXISTS `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);

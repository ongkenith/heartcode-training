import { boolean, uuid, pgTable, varchar } from "drizzle-orm/pg-core";

//export const createTable = pgTableCreator((name) => `heartcodeTraining_${name}`);

export const users = pgTable("user", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: varchar("name", {length: 32}).notNull(),
    isDrugDealer: boolean().notNull(),
})

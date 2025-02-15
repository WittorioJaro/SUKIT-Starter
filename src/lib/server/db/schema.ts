import { pgTable, serial, text, integer, uuid, timestamp, boolean } from 'drizzle-orm/pg-core';

export const profileTable = pgTable('profile', {
  id: uuid('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  role: text('role').notNull().default('user'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  lastLogin: timestamp('last_login'),
  status: text('status').notNull().default('active'), // e.g., active, suspended
  profilePictureUrl: text('profile_picture_url').default(''),
});


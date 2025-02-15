import { pgTable, serial, text, integer, uuid, timestamp, boolean, bigint } from 'drizzle-orm/pg-core';

export const profileTable = pgTable('profile', {
  id: uuid('id').primaryKey(),
  displayName: text('display_name').notNull().default(''),
  firstName: text('first_name').notNull().default(''),
  lastName: text('last_name').notNull().default(''),
  customerId: text('customer_id').notNull().default(''),
  planType: text('plan_type').notNull().default('free'),
  planActive: boolean('plan_active').notNull().default(false),
  planExpires: bigint('plan_expires', { mode: 'number' }).default(0),
  subscriptionId: text('subscription_id').default(''),
  email: text('email').notNull().unique(),
  role: text('role').notNull().default('user'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  lastLogin: timestamp('last_login'),
  status: text('status').notNull().default('active'), // e.g., active, suspended
  profilePictureUrl: text('profile_picture_url').default(''),
});


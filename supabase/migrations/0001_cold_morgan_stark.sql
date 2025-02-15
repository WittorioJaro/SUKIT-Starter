ALTER TABLE "profile" ALTER COLUMN "first_name" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "last_name" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "display_name" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "customer_id" text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "plan_type" text DEFAULT 'free' NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "plan_active" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "plan_expires" bigint DEFAULT 0;--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "subscription_id" text DEFAULT '';
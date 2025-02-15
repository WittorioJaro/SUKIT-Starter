CREATE TABLE "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"role" text DEFAULT 'user' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"last_login" timestamp,
	"status" text DEFAULT 'active' NOT NULL,
	"profile_picture_url" text DEFAULT '',
	CONSTRAINT "profile_email_unique" UNIQUE("email")
);

ALTER TABLE "profile" ENABLE ROW LEVEL SECURITY;

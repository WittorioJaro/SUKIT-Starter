import { db } from "@/server/db";
import { profileTable } from "@/server/db/schema";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const getOrCreateUserProfile = async (locals: App.Locals) => {
  const { user } = await locals.safeGetSession();

  if (!user) {
    return null;
  }
  const curUser = await db.query.profileTable.findFirst({
    where: eq(profileTable.id, user.id)
  })

  if (curUser) {
    return curUser;
  }

  const newProfile = await db.insert(profileTable).values({
    id: user.id,
    email: user.email ?? "",
    firstName: user.user_metadata.first_name ?? "",
    lastName: user.user_metadata.last_name ?? "",
  }).returning();

  if (!newProfile) {
    error(500, "Failed to create user profile");
  }

  return newProfile[0];
    
}
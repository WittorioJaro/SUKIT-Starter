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

  // Get avatar URL from user metadata
  const avatarUrl = user.user_metadata.avatar_url ?? user.user_metadata.picture ?? null;
  const displayName = user.user_metadata.display_name ?? user.user_metadata.name ?? null;
  const firstName = displayName?.split(' ')[0] ?? null;
  const lastName = displayName?.split(' ').slice(1).join(' ') ?? null;

  const newProfile = await db.insert(profileTable).values({
    id: user.id,
    email: user.email ?? "",
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    displayName: displayName ?? "",
    profilePictureUrl: avatarUrl,
  }).returning();

  if (!newProfile) {
    error(500, "Failed to create user profile");
  }

  return newProfile[0];
}
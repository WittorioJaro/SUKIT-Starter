import { getOrCreateUserProfile } from "@/auth"
import { db } from "@/server/db/index.js";
import { profileTable } from "@/server/db/schema";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";

export const load = async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals);

  return {
    userProfile
  };
}

export const actions = {
  default: async ({ locals, request }) => {
    const userProfile = await getOrCreateUserProfile(locals);
    if (!userProfile) {
      error(401, "You need to be logged in to update your profile");
    }
    const schema = zfd.formData({
      firstName: zfd.text(),
      lastName: zfd.text(),
      email: zfd.text(),
    });
    const { data } = schema.safeParse(await request.formData());
    if (!data) {
      return error(400, "Invalid form data");
    }
    
    await db.update(profileTable).set({
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.firstName + ' ' + data.lastName,
      email: data.email,
    }).where(eq(profileTable.id, userProfile.id));

    return { success: true };
  }
}
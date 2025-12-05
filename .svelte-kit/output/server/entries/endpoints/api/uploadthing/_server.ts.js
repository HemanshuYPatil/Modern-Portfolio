import { d as private_env } from "../../../../chunks/shared-server.js";
import { createUploadthing, createRouteHandler } from "uploadthing/server";
const f = createUploadthing();
const auth = (req) => ({ id: "fakeId" });
const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } }).middleware(async ({ req }) => {
    const user = await auth();
    if (!user)
      throw new Error("Unauthorized");
    return { userId: user.id };
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("Upload complete for userId:", metadata.userId);
    console.log("file url", file.url);
  })
};
const handlers = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: private_env.UPLOADTHING_TOKEN
  }
});
export {
  handlers as GET,
  handlers as POST
};

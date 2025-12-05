import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
var define_import_meta_env_default = {};
const client = createClient({
  projectId: define_import_meta_env_default.VITE_SANITY_PROJECT_ID || "5f2zuccw",
  dataset: define_import_meta_env_default.VITE_SANITY_DATASET || "production",
  useCdn: true,
  // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03"
  // use current date (YYYY-MM-DD) to target the latest API version
});
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
export {
  client as c,
  urlFor as u
};

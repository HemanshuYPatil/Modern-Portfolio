import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import { defineType, defineField, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        defineField({ name: "description", type: "text" }),
        defineField({ name: "summary", type: "string" })
      ]
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string"
    }),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "type", type: "string" }),
            defineField({ name: "text", type: "string" }),
            defineField({ name: "link", type: "url" })
          ]
        }
      ]
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "appScreenshot",
      title: "App Screenshot",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ]
});
const developer = defineType({
  name: "developer",
  title: "Developer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "last",
      title: "Last Name",
      type: "string"
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string"
    }),
    defineField({
      name: "place",
      title: "Place",
      type: "string"
    }),
    defineField({
      name: "availability_date",
      title: "Availability Date",
      type: "string"
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text"
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ]
});
const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "icon",
      title: "Icon (SVG String or Image)",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ]
});
const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role",
      type: "string"
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string"
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
});
const schemaTypes = [project, developer, service, experience];
defineConfig({
  name: "default",
  title: "Hemanshu.dev",
  projectId: "5f2zuccw",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes
  },
  basePath: "/studio"
});
const css = {
  code: "#sanity.svelte-lhytwa{height:100vh;max-height:100dvh;overscroll-behavior:none;-webkit-font-smoothing:antialiased;overflow:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="sanity" class="svelte-lhytwa"></div>`;
});
export {
  Page as default
};

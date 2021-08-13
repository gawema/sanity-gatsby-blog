export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6116910312136b08d7543e44",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4rtccd3k",
                  apiId: "edc58966-f47b-4430-939c-3ac85d205dfd",
                },
                {
                  buildHookId: "611691034c67c207c0dbb3a5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-aiiyeta7",
                  apiId: "d1582f7b-31f8-4aab-aa0e-3b246a7c1049",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gawema/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-aiiyeta7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

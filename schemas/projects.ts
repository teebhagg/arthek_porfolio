
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
        name: 'client',
        title: 'Client',
        type: 'string',
    },
    {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: { type: "category" } }],
    },
    {
        name: 'date',
        title: 'Date',
        type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
};

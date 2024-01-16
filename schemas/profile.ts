

export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo1',
      title: 'Logo 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "logo2",
      title: "Logo 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
};


export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'header',
            title: 'Header',
            type: 'string',
        },
        {
            name: 'heroSection',
            title: 'Hero Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'body',
                    title: 'Body',
                    type: 'text',
                },
            ],
        },
        {
            name: 'projectsHighlight',
            title: 'Projects Highlight',
            type: 'array',
            of: [{type: 'reference', to: {type: 'project'}}],
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{type: 'reference', to: {type: 'testimonial'}}],
        },
    ],
};
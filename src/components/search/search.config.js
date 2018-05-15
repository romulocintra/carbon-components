'use stirct';

module.exports = {
  default: 'large',
  variants: [
    {
      name: 'large',
      label: 'Normal',
      notes: `
        Search enables users to specify a word or a phrase to find particular relevant pieces of content
        without the use of navigation. Search can be used as the primary means of discovering content,
        or as a filter to aid the user in finding content.
      `,
      context: {
        suffix: 'lg',
      },
    },
    {
      name: 'small',
      label: 'Small',
      notes: `
        Search enables users to specify a word or a phrase to find particular relevant pieces of content
        without the use of navigation. Search can be used as the primary means of discovering content,
        or as a filter to aid the user in finding content. With the small version, the search field will be
        more compact.
      `,
      context: {
        suffix: 'sm',
      },
    },
    {
      name: 'large-light',
      label: 'Normal Light',
      notes: `
        Search enables users to specify a word or a phrase to find particular relevant pieces of content
        without the use of navigation. Search can be used as the primary means of discovering content,
        or as a filter to aid the user in finding content.
      `,
      context: {
        suffix: 'lg',
        light: true,
      },
    },
    {
      name: 'small-light',
      label: 'Small Light',
      notes: `
        Search enables users to specify a word or a phrase to find particular relevant pieces of content
        without the use of navigation. Search can be used as the primary means of discovering content,
        or as a filter to aid the user in finding content. With the small version, the search field will be
        more compact.
      `,
      context: {
        suffix: 'sm',
        light: true,
      },
    },
  ],
};

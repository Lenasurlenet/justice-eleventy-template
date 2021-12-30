module.exports = {
  collections: {
    coaching: {
      path: 'content/coaching',
      output: false,
      _sort_key: 'title',
      _subtext_key: 'description',
      _image_key: 'coaching_image',
      _image_size: 'cover',
      _singular_name: 'coaching',
      _singular_key: 'coaching',
      _disable_add: 'false',
      _add_options: [
        {
          name: 'Add coaching',
          href: 'cloudcannon::editor/:collections_dir/_coaching/.:extension🆕'
        }
      ]
    }
  }
};
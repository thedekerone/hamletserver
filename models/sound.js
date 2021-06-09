const { Text, File, Relationship,Url, MongoId } = require('@keystonejs/fields');
const { S3Adapter } = require('@keystonejs/file-adapters');
const CF_DISTRIBUTION_ID = 'E1RH6OTTRDMMBP';
const S3_PATH = 'sounds';

const s3Url = 'https://hamul-clone.s3.us-east-1.amazonaws.com/sounds/'

const fileAdapter = new S3Adapter({
  bucket: 'hamul-clone',
  folder: S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `https://hamul-clone.s3.us-east-1.amazonaws.com/${S3_PATH}/${filename}`,
  s3Options: {
    // Optional paramaters to be supplied directly to AWS.S3 constructor
    apiVersion: '2006-03-01',
    accessKeyId: 'AKIAXI2CMC4BFOK66C3H',
    secretAccessKey: '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',
    region: 'us-east-2',
  },
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    Metadata: {
      keystone_id: `${id}`,
    },

  }),
});


module.exports = {
  fields: {

    description: {
      type: Text,
    },
    title: {
      type: Text,
      isRequired: true,
    },
    file: {
      type: File,
      isRequired: true,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.file) {
            await fileAdapter.delete(existingItem.file, deleteParams);
          }
        },
      },
      adapter:fileAdapter,
    },
    author:{
      type:Relationship,
      ref:'User.sounds'
    },
 
    
  },
  hooks: {
    afterDelete: async ({ existingItem }) => {
      if (existingItem.file) {
        await fileAdapter.delete(existingItem.file, deleteParams);
      }
    },
  },
};

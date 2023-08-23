// Imports
const { QueueServiceClient } = require('@azure/storage-queue');

// Variables
const wpJSONAPI = "https://dev-tw-me-wpblog-json.azurewebsites.net/wp-json/wp/v2/posts?_fields=description,content,title,featured_media,author,tags,_embedded&_embed=wp:term,wp:featuredmedia";
var timeStamp = new Date().toISOString();
const connectionString = "DefaultEndpointsProtocol=https;AccountName=prdwpjsonentriesqueuejob;AccountKey=ZbjxDyu3XtV0Nvo/q2gNT4aapjkPSpIk4huq8G3O27ZyHQtHeBvvlcma48YAyzR/g6mMrOxdUNhc+ASttUwiNw==;EndpointSuffix=core.windows.net";
const queueName = 'prd-wpjson-queuestorage';
const queueServiceClient = QueueServiceClient.fromConnectionString(connectionString);
const queueClient = queueServiceClient.getQueueClient(queueName);

// Export Variables
module.exports = {
  wpJSONAPI,
  timeStamp,
  queueClient,
  queueName,
  queueServiceClient
};
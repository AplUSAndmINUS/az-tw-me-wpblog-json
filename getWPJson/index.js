module.exports = async function (context, myQueueItem) {
    const { 
        wpJSONAPI,
        timeStamp,
        queueClient,
        queueName,
        queueServiceClient
    } = require('./constants');
    const azure = require('azure-storage-queue');
    const axios = require('axios');
    const queueService = azure.createQueueService();

    context.log('Begin Azure function runtime');
    await queueClient.createIfNotExists(queueName);

    queueService.getQueueMetaData

    // WPJSON API call setup (await option)
    // const data = async () => await Promise.resolve(wpJSONAPI);
    axios.get(wpJSONAPI)
        .then(response => {
            const data = response.data;
            const messageBuffer = Buffer.from(JSON.stringify(data)).toString('base64');
            try {
                queueClient.sendMessage(messageBuffer);
                context.log('Success!');
            } catch {
                context.log('There was an error writing to the queue.');
            }
        })
        .catch(error => {
            context.log('Error getting the ', error);
        });

    context.log('End trigger function');
}

// module.exports = async function (context, myTimer) {
//     var timeStamp = new Date().toISOString();
    
//     if (myTimer.isPastDue)
//     {
//         context.log('JavaScript is running late!');
//     }
//     context.log('JavaScript timer trigger function ran!', timeStamp);   
// };
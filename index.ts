import * as cloud from '@pulumi/cloud';

const httpServer = new cloud.HttpServer('nest', () => {

});

exports.endpoint = httpServer.url;
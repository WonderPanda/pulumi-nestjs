import * as cloud from '@pulumi/cloud';
import express from 'express';

const httpServer = new cloud.HttpServer('nest', () => {
    const server = express();

    server.get('*', (req, res) => {
        res.json({message: 'hello world'});
    });

    return server;
});

exports.endpoint = httpServer.url;
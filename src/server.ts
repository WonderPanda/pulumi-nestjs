import { NestFactory } from '@nestjs/core';
import express from 'express';
import { AppModule } from './app.module';

export async function buildServer() {
    const server = express();
    const nestApp = await NestFactory.create(AppModule, server);

    return server;
}
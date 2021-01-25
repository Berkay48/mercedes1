const express = require('express');
const app = express();

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');

client.on('ready', ()=>{
client.channels.get('796777840334864424').join()
})

client.login(ayarlar.token);
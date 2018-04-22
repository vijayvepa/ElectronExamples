import {app,BrowserWindow} from 'electron';
import path from 'path';
import url from 'url';

function createWindow(){
    let win = new BrowserWindow({width:800, height:600});

    let urlObject: url.UrlObject = {
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    };
    win.loadURL(url.format(urlObject));
    
}

app.on('ready', createWindow);
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();
const port = 5000;

// 启用 CORS
app.use(cors());

// 使用 bodyParser 来解析请求体
app.use(bodyParser.json());

// 提供 Vue 构建后的静态文件
app.use(express.static(path.join(__dirname, '../dist'))); // 假设 Vue 的 dist 文件夹在上一级目录

// 示例 API 路由
app.get('/api/lol/searchlolbycode/*', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});
const key = "RGAPI-6204a2e4-e4b5-422e-b1d3-dfd410dc9a23";
const regin = ['JP', 'KR', 'EUROPE', 'AMERICA', 'SEA'];
app.get('/api/lol/getppuid/*', async (req, res) => {
    const lolcode = req.params[0];
    const [firstPart, secondPart, thridPart] = lolcode.split('/');
    const path = secondPart + '/' + thridPart
    if (regin.includes(firstPart)) {
        if (firstPart == 'JP') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + path + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'KR') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + path + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'EU') {
            try {
                const response = await axios.get('https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + path + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else {
            res.status(500);
            res.json({ message: 'wrong spell!' });
        }
    }
    else {
        res.status(500);
        res.json({ message: 'wrong spell!' });
    }
    /*
    res.json({
        "ee": lolcode,
        message: 'Hello'
    });*/
});
app.get('/api/lol/getsummerid/*', async (req, res) => {
    const lolcode = req.params[0];
    const [firstPart, secondPart] = lolcode.split('/');
    if (regin.includes(firstPart)) {
        if (firstPart == 'JP') {
            try {
                const response = await axios.get('https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'KR') {
            try {
                const response = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'EU') {
            try {
                const response = await axios.get('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else {
            res.status(500);
            res.json({ message: 'wrong regin!' });
        }
    }
    else {
        res.status(500);
        res.json({ message: 'wrong spell!' });
    }
});
app.get('/api/lol/getrankbysummerid/*', async (req, res) => {
    const lolcode = req.params[0];
    const [firstPart, secondPart] = lolcode.split('/');
    if (regin.includes(firstPart)) {
        if (firstPart == 'JP') {
            try {
                const response = await axios.get('https://jp1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                // 处理错误
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'KR') {
            try {
                const response = await axios.get('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                // 处理错误
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'EU') {
            try {
                const response = await axios.get('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                // 处理错误
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else {
            res.status(500);
            res.json({ message: 'wrong regin!' });
        }
    }
    else {
        res.status(500);
        res.json({ message: 'wrong spell!' });
    }
});
app.get('/api/lol/getmatchlist/*', async (req, res) => {
    const lolcode = req.params[0];
    const parts = lolcode.split("/");
    const firstPart = parts[0];
    var mess = parts[1] + '/ids?';
    if (parts.length >= 3) {
        mess += parts[2] + '&';
    }
    if (regin.includes(firstPart)) {
        if (firstPart == 'JP') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' + mess + 'api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'KR') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/' + mess + 'api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'EU') {
            try {
                const response = await axios.get('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' + mess + 'api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else {
            res.status(500);
            res.json({ message: 'wrong regin!' });
        }
    }
    else {
        res.status(500);
        res.json({ message: 'wrong spell!' });
    }
});
app.get('/api/lol/getmatchinfo/*', async (req, res) => {
    const lolcode = req.params[0];
    const [firstPart, secondPart] = lolcode.split('/');
    if (regin.includes(firstPart)) {
        if (firstPart == 'JP') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'KR') {
            try {
                const response = await axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else if (firstPart == 'EU') {
            try {
                const response = await axios.get('https://europe.api.riotgames.com/lol/match/v5/matches/' + secondPart + '?api_key=' + key, {
                    timeout: 5000  // 设置请求超时为 5 秒
                });
                res.json(response.data);
            } catch (error) {
                res.status(500).send('Something went wrong with the API request');
            }
        }
        else {
            res.status(500);
            res.json({ message: 'wrong regin!' });
        }
    }
    else {
        res.status(500);
        res.json({ message: 'wrong spell!' });
    }
});
// 在生产模式下，所有请求都返回 index.html（Vue 前端）
app.get('*', (req, res) => {
    console.log('Received a request to the root route');
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});

app.use((err, req, res) => {
    console.error(err.stack);  // 打印错误堆栈
    res.status(500).send('Something went wrong!');
});

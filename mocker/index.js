const delay = require('mocker-api/utils/delay');

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/tasks': (req, res) => {
        return res.json({
    "count": 12,
    "next": "http://localhost:8000/api/todos/?page=2",
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "test task",
            "description": "test",
            "created": "2019-11-24T06:58:12.230377Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 2,
            "title": "create a compoent",
            "description": "create react-hooks-useAPI",
            "created": "2019-12-24T06:58:44.025123Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 4,
            "title": "Instruments",
            "description": "French Horn\r\nViolin\r\nUkulele\r\nTrombone\r\nVibraphone",
            "created": "2019-12-24T07:06:03.281529Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 6,
            "title": "Adverbs",
            "description": "defiantly\r\nhopefully\r\nshyly\r\ncoolly\r\nfervently\r\nagain\r\ntoo\r\nmostly\r\ndirectly\r\nenergetically\r\ndevotedly\r\njoyously",
            "created": "2019-12-24T07:07:23.750377Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 7,
            "title": "Zip Codes",
            "description": "39564\r\nOcean Springs, MS\r\n11050\r\nPort Washington, NY\r\n07202\r\nElizabeth, NJ\r\n30144\r\nKennesaw, GA\r\n17522\r\nEphrata, PA",
            "created": "2019-12-24T07:08:04.807497Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 9,
            "title": "Spanish words",
            "description": "hace sol\r\nit's sunny\r\nla cocina\r\nkitchen\r\nlos zapatos\r\nshoes\r\nla llama\r\nllama\r\nel vestido\r\ndress",
            "created": "2019-12-24T07:09:26.532764Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 11,
            "title": "Hockey Teams",
            "description": "Colorado Avalanche\r\nPittsburgh Penguins\r\nNew York Rangers\r\nFlorida Panthers\r\nCalgary Flames\r\nAnaheim Ducks\r\nDetroit Red Wings\r\nEdmonton Oilers\r\nPhiladelphia Flyers",
            "created": "2019-12-24T07:11:19.040735Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 12,
            "title": "Charades Words",
            "description": "business trip",
            "created": "2019-12-24T07:11:54.644847Z",
            "is_active": true,
            "owner": "admin"
        },
        {
            "id": 3,
            "title": "Fingers",
            "description": "Thumb\r\nIndex Finger\r\nRing Finger\r\nPinkie Finger\r\nMiddle Finger",
            "created": "2019-12-24T07:05:28.766120Z",
            "is_active": false,
            "owner": "admin"
        },
        {
            "id": 5,
            "title": "Things",
            "description": "hair tie\r\n\r\ndrill press\r\n\r\nvideo games\r\n\r\nsandal\r\n\r\nballoon\r\n\r\ntissue box",
            "created": "2019-12-24T07:06:36.171352Z",
            "is_active": false,
            "owner": "admin"
        }
    ]
});
    },
    'GET /api/tasks/:id': (req, res) => {
        return res.json({
                            "id": 1,
                            "title": "test task",
                            "description": "test",
                            "created": "2019-11-24T06:58:12.230377Z",
                            "is_active": true,
                            "owner": "admin"
                        });
    },
    'POST /api/tasks': (req, res) => {
        res.send({ status: 'ok', message: 'Added successfully'});
    },
    'PUT /api/tasks/:id': (req, res) => {
        res.send({ status: 'ok', message: 'Updated successfully'});
    },
    'DELETE /api/tasks/:id': (req, res) => {
        res.send({ status: 'ok', message: 'Deleted successfully'});
    }
}
module.exports = (noProxy ? {} : delay(proxy, 1000));
// module.exports = proxy;

const Nexmo = require('nexmo');


module.exports = {
    sendUserConfirm: async (req,res) => {
        const nexmo = new Nexmo({
            apiKey: 'fefd29c7',
            apiSecret: 'l45DS0d33Gp89T20',
        });
    
        const from = '14793800458';
        const to = '13852506288';
        const text = 'Hello from Vonage SMS API';
    
        nexmo.message.sendSms(from, to, text);
        return res.sendStatus(200);
    }
}
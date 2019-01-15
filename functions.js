module.exports = {

    hook: function(channel, title, message, color, avatar) {

        if (!channel) return console.log('Channel not specified.');
        if (!title) return console.log('Title not specified.');
        if (!message) return console.log('Message not specified.');
        if (!color) color = '0078D7';
        if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'

        color = color.replace(/\s/g, '');
        avatar = avatar.replace(/\s/g, '');

        channel.fetchWebhooks()
            .then(webhook => {

                let foundHook = webhook.find('name', 'THS Interfare');

                if (!foundHook) {
                    channel.createWebhook('THS Interfare', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                        .then(webhook => {

                            webhook.send('', {
                                "username": title,
                                "avatarURL": avatar,
                                "embeds": [{
                                    "color": parseInt(`0x${color}`),
                                    "description":message
                                }]
                            })
                                .catch(error => {
                                    console.log(error);
                                    return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                                })
                        })
                } else {
                    foundHook.send('', {
                        "username": title,
                        "avatarURL": avatar,
                        "embeds": [{
                            "color": parseInt(`0x${color}`),
                            "description":message
                        }]
                    })
                        .catch(error => {
                            console.log(error);
                            return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                        })
                    }

            })

    },

embed: function (channel, message, deleteTimer) {

    channel.send({
        embed:{
            description: message,
            color: 0x0078D7
        }
    }).then(msg => {

        if (!isNaN(deleteTimer)) {
            msg.delete(deleteTimer)
        }
    })
  }
}

# Stackchat Mini-Program Messenger

The official Stackchat mini-program messenger.

# Description
The MP Messenger allows developers to easily add the stackchat messenger client to a miniprogram and supports the same features that are available on the web messenger version.

# Installation
In order to install the messenger client into your project you will need to clone or download the source code from this repository and copy across the messenger and npm directory into your project. The directories need to be added at a top level in order for them to correctly resolve their dependencies.

```
/src
  /pages
  /messenger <-- Top level
  /npm <-- Top level
  app.js
  app.json
```

## App Configuration
The client is able of generating webviews based on content it receives from the conversation author, in order to load webviews you will need to ensure that the `urlCheck` flag is set to false in your `project.config.json` file.

#### Example
```json
// project.config.json
{
  "miniprogramRoot": "./",
  "projectname": <project-name>,
  "description": <description>,
  "appid": <id>,
  "setting": {
    "urlCheck": false, <-- Must be false
    "es6": false,
    "postcss": false,
    "minified": false
  },
  "compileType": "miniprogram"
}
```

## Messenger Client Page
The messenger client will occupy the entirety of the page it is added to, since mini-programs don't allow ui components to persist between pages we strongly recommend that you add the web client as a tab to your program, you can add it as a page, however when you want to open the chat widget you will need to create a link to navigate to that page.

#### Example

To add the widget as a new tab you can do the following:
```
// Create a new page
/src
  /pages
    /chat-tab
      chat-tab.js
      chat-tab.json
      chat-tab.wxml
      chat-tab.wxss
```

```xml
<!-- chat-tab.wxml -->
<block wx:if="{{$taroCompReady}}">
    <messenger></messenger>
</block>
```

```json
// chat-tab.json
{
  "usingComponents": {
    "messenger": "../../messenger/Messenger"
  }
}
```

Finally we need to register our page inside of the app and the webview page in order to have them render correctly. Here is an example setup of the chat-tab.

```json
// app.json
{
  "pages": [
    "pages/index/index", // Your pages
    "pages/chat-tab/chat-tab", // The chat page
    "messenger/pages/webview/webview" // Webview
  ],
  "tabBar": {
    "color": "#666",
    "selectedColor": "#b4282d",
    "backgroundColor": "#fafafa",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "home"
      },
      {
        "pagePath": "pages/chat-tab/chat-tab",
        "text": "chat"
      }
    ]
  }
}
```

## Messenger Configuration
The fullset of configuration options avaialble to the messenger can be seen on the web-messenger project page which can be found here

In order to configure the messenger you will need to add a `stackchat` property to the top level of your `app.json` file.

```json
  stackchat = {
    appId: "<your-appid>",
    customColors: {
      actionColor: "4c0099",
      brandColor: "4c0099",
      conversationColor: "4c0099"
    },
    locale: "zh_CN",
    region: "cn"
  }
```

## Mini-Program Domain Whitelisting
[As per the documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html) all externals domains need to be explicitly whitelisted, in order to consume the messenger SDK you will need to add the following domains to your whitelist in order to consume the SDK outside of the debug environment.

```
a2l75v1x7xl70n.ats.iot.cn-north-1.amazonaws.com.cn

cognito-identity.cn-north-1.amazonaws.com.cn

assets.authcn.common.dev.stackchat.com.cn

api.authcn.io.dev.stackchat.com.cn

io-shared-apig.authcn.io.dev.stackchat.com.cn

api-alb.authcn.io.dev.stackchat.com.cn
```

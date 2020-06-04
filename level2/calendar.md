# （読み物）カレンダーのアプリを理解してみよう

Level1 ゴールの確認のところで下記のようなプログラムを動かしました。

特に今まで触れませんでしたが、 `var` とは、 `let` と同じようなものです。興味のある方は[JavaScriptで書く「var,let,const」の違いと使い分け方法](https://techacademy.jp/magazine/14872) などをご覧ください。


```js
/**
 * Lists 10 upcoming events in the user's calendar.
 */
function listUpcomingEvents() {
  var calendarId = 'primary';
  var optionalArgs = {
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime'
  };
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
  if (events.length > 0) {
    for (i = 0; i < events.length; i++) {
      var event = events[i];
      var when = event.start.dateTime;
      if (!when) {
        when = event.start.date;
      }
      Logger.log('%s (%s)', event.summary, when);
    }
  } else {
    Logger.log('No upcoming events found.');
  }
}
```

プログラムはとにかく上から順に理解していけばよいのですが、英文を読解するように、少しずつ塊にわけて理解する必要があります。
内容としてはとても難しい内容とはなっているので読み物として流し読みしてください。


まずこのプログラムのキモは下記です。

```js
var response = Calendar.Events.list(...何かごちゃごちゃ書いてあるが気にしない...);
```

[Calendar:list](https://developers.google.com/calendar/v3/reference/events/list) を見ると、Response と書いてあるあたりに

```
{
  "kind": "calendar#events",
  "etag": etag,
  "summary": string,
  "description": string,
  "updated": datetime,
  "timeZone": string,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": string,
      "minutes": integer
    }
  ],
  "nextPageToken": string,
  "nextSyncToken": string,
  "items": [
    events Resource
  ]
}
```

というものが書かれた部分が見つかります。先ほど学んだばかりの内容を思い出せば、こちらのデータは、連想配列なんだな、ということぐらいはわかると思います。（それ以上を理解しろというのはさすがに厳しいと思います...）

すると、

```js
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
```

response の中身は上に書かれた連想配列であり、eventsの中身は連想配列の中のitemsというものを取り出している と理解することができるようになってきます。（慣れです！）

```
{
  // 省略
  "items": [
    events Resource
  ]
}
```

さらに、response.itemsはどうやら配列（[]）のようです。よって、eventsは配列になるようです。

```js
    for (i = 0; i < events.length; i++) {
        // なんかいろいろ書いてある
    }
```

ここでその配列の長さに対して繰り返し何かをしています。

したがって、ここまで学んだ内容で、このプログラムが行っていることは、下記のようなことだと想像できます。

- GoogleCalendarを（なにかの条件で）呼び出して
- イベントの一覧を取得して
- その一覧を使ってなにかした

このようにして概要をつかみながら、プログラムを読解し、また自分で作るときは重要なパーツ、やりたいことを中心に肉付けをしていくことで自分の書きたいプログラムが書けるようになってきます。まずは、小さなプログラムを書いたり、データを取ってくるというところから始めてみましょう。

[次のコンテンツ：説明記事を読みながら作ってみよう](./handson)

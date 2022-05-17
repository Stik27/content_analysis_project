/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8db9c01f2745366589d4253818902b2"
  },
  {
    "url": "assets/css/0.styles.3c79817f.css",
    "revision": "1d5ee161439aeb4525ab3e5678ebd1f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.5b9d7ec0.js",
    "revision": "e753b8bbe05ea388d2fe2bd1c6e90e4d"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.9e9d7f5c.js",
    "revision": "b8bff4cbe7f041462fd325b7b27197b6"
  },
  {
    "url": "assets/js/19.28bbad0b.js",
    "revision": "94ce267222cabdfb8030593853363c6d"
  },
  {
    "url": "assets/js/2.ce537cd2.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.9d148806.js",
    "revision": "1b38d2aa08273c929db7e9f256c4991e"
  },
  {
    "url": "assets/js/21.2608b4dd.js",
    "revision": "c9e5c95efc2d0b42dd47af2c47d26bab"
  },
  {
    "url": "assets/js/22.c606fd39.js",
    "revision": "3a31629957ff84ce2060a72a9dfa96f7"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.92b01401.js",
    "revision": "6bce1825b0efeffabec6b58babbedec3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.ebdad22b.js",
    "revision": "af7d48fd24134de70e1651464c61781d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "98fa7da092818292c96d70359dbfbab8"
  },
  {
    "url": "design/index.html",
    "revision": "5e2677f908e6dbaa0bdcfca306bc7d8d"
  },
  {
    "url": "index.html",
    "revision": "1db612878050ffe5c30ad97c2e37eb9f"
  },
  {
    "url": "intro/index.html",
    "revision": "ec924fe8225a1f60326cff6a2ea7cda2"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6a2e551c0cebf5b5071c381fcde6ad6d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ce26c4aa79baf1878ae2a95b59512104"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c6ba5795dd9660c7a10deed9c10d41f0"
  },
  {
    "url": "software/index.html",
    "revision": "6155e1bf84cd178243dfb117b2bc8929"
  },
  {
    "url": "test/index.html",
    "revision": "6acc0527b56f9251d387ce8bd80ac0e1"
  },
  {
    "url": "use cases/index.html",
    "revision": "772461e8d28e47f58b3604b9a0005c96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

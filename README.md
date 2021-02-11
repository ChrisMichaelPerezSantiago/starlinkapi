<p align="center">
  <img src="./assets/logo.png" width="87%" alt="StarLink API" />
</p>

  
<p align="center">
  It provides data on the positioning of each SpaceX StarLink Satellite at each point on earth, in real time.
</p>
<p align="center">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />          
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/SpaceX StarLink Satellite-API-brightgreen.svg"/>
</p>

<p align="center">
 <a href="https://nodei.co/npm/starlinkapi/"><img src="https://nodei.co/npm/starlinkapi.png"></a>
</p> 


# What is StarLink
`Starlink` is a company that was born as a `SpaceX` project for the creation of a constellation of internet satellites with the aim of providing a `broadband internet service`, low latency and worldwide coverage at low cost. [Wikipedia]

# Reference  [satellitemap.space](https://satellitemap.space/)


# 📖 API Documentation


## satellites()
Positioning of each satellite.


```js
(async() =>{
  const json = await satellites();
})();
```

```json
  {
    id: 44238,
    name: '1-D',
    time: 0,
    lat: -47.24402,
    lng: 53.86238,
    epoch: 42.1,
    alt: 538.5,
    periapsis: 520.7,
    latd: -0.018862,
    longd: 0.089874,
    lat2: -52.90276,
    lng2: 80.82472,
    illum: 1,
    classify: { orbit: 'below service', doing: 'stable', alt: '522.04', id: 44238 }
  }
```


# Altitude history of Norad ID (Graph)
## fixes([id])
  - ***d:*** days pasts
  - ***alt:*** altitude
 


```js
(async() =>{
  const json = await fixes(id = '44238');
})();
```

```json
{
  fixes: [
    { d: '2021-01-05 02:09:39', alt: 522.9, days: 37.3 },
    { d: '2021-01-06 00:20:02', alt: 522.87, days: 36.3 },
    { d: '2021-01-06 00:20:02', alt: 522.87, days: 36.3 },
    { d: '2021-01-07 00:05:26', alt: 522.84, days: 35.4 },
    { d: '2021-01-07 06:25:32', alt: 522.83, days: 35.1 },
    { d: '2021-01-07 22:15:48', alt: 522.82, days: 34.4 },
    { d: '2021-01-07 23:50:50', alt: 522.82, days: 34.4 },
    { d: '2021-01-08 17:16:06', alt: 522.79, days: 33.6 },
    { d: '2021-01-08 23:36:12', alt: 522.79, days: 33.4 },
    { d: '2021-01-09 23:21:35', alt: 522.76, days: 32.4 },
    { d: '2021-01-09 23:21:35', alt: 522.76, days: 32.4 },
    { d: '2021-01-10 23:06:57', alt: 522.74, days: 31.4 },
    { d: '2021-01-11 03:52:01', alt: 522.73, days: 31.2 },
    { d: '2021-01-11 03:52:01', alt: 522.73, days: 31.2 },
    { d: '2021-01-11 22:52:18', alt: 522.72, days: 30.4 },
    { d: '2021-01-12 03:37:22', alt: 522.71, days: 30.2 },
    { d: '2021-01-12 22:37:39', alt: 522.69, days: 29.4 },
    { d: '2021-01-13 09:42:49', alt: 522.68, days: 29 },
    { d: '2021-01-13 17:37:55', alt: 522.67, days: 28.6 },
    { d: '2021-01-13 20:47:58', alt: 522.67, days: 28.5 },
    { d: '2021-01-14 03:08:04', alt: 522.67, days: 28.2 },
    { d: '2021-01-14 20:33:18', alt: 522.66, days: 27.5 },
    { d: '2021-01-14 20:33:18', alt: 522.66, days: 27.5 },
    { d: '2021-01-15 10:48:30', alt: 522.65, days: 26.9 },
    { d: '2021-01-16 02:38:44', alt: 522.64, days: 26.2 },
    { d: '2021-01-16 08:58:49', alt: 522.63, days: 26 },
    { d: '2021-01-16 08:58:49', alt: 522.63, days: 26 },
    { d: '2021-01-16 21:38:59', alt: 522.62, days: 25.5 },
    { d: '2021-01-17 08:44:09', alt: 522.61, days: 25 },
    { d: '2021-01-17 16:39:15', alt: 522.6, days: 24.7 },
    { d: '2021-01-18 02:09:23', alt: 522.6, days: 24.3 },
    { d: '2021-01-18 08:29:28', alt: 522.59, days: 24 },
    { d: '2021-01-18 17:59:36', alt: 522.59, days: 23.6 },
    { d: '2021-01-19 01:54:42', alt: 522.58, days: 23.3 },
    { d: '2021-01-19 08:14:47', alt: 522.58, days: 23 },
    { d: '2021-01-20 01:40:00', alt: 522.56, days: 22.3 },
    { d: '2021-01-20 08:00:05', alt: 522.55, days: 22 },
    { d: '2021-01-20 09:35:06', alt: 522.55, days: 22 },
    { d: '2021-01-20 17:30:13', alt: 522.54, days: 21.6 },
    { d: '2021-01-21 10:55:26', alt: 522.52, days: 20.9 },
    { d: '2021-01-21 17:15:30', alt: 522.51, days: 20.6 },
    { d: '2021-01-21 18:50:31', alt: 522.51, days: 20.6 },
    { d: '2021-01-22 07:30:41', alt: 522.5, days: 20 },
    { d: '2021-01-22 18:35:49', alt: 522.49, days: 19.6 },
    { d: '2021-01-22 18:35:49', alt: 522.49, days: 19.6 },
    { d: '2021-01-23 12:01:01', alt: 522.48, days: 18.9 },
    { d: '2021-01-23 18:21:05', alt: 522.47, days: 18.6 },
    { d: '2021-01-24 07:01:14', alt: 522.46, days: 18.1 },
    { d: '2021-01-24 11:46:18', alt: 522.46, days: 17.9 },
    { d: '2021-01-24 22:51:25', alt: 522.44, days: 17.4 },
    { d: '2021-01-25 11:31:34', alt: 522.43, days: 16.9 },
    { d: '2021-01-25 16:16:37', alt: 522.43, days: 16.7 },
    { d: '2021-01-25 22:36:41', alt: 522.42, days: 16.4 },
    { d: '2021-01-26 06:31:46', alt: 522.4, days: 16.1 },
    { d: '2021-01-26 22:21:56', alt: 522.38, days: 15.4 },
    { d: '2021-01-27 22:07:11', alt: 522.36, days: 14.4 },
    { d: '2021-01-28 07:37:17', alt: 522.34, days: 14 },
    { d: '2021-01-28 10:47:19', alt: 522.34, days: 13.9 },
    { d: '2021-01-28 21:52:25', alt: 522.32, days: 13.4 },
    { d: '2021-01-29 08:57:32', alt: 522.31, days: 13 },
    { d: '2021-01-29 10:32:33', alt: 522.31, days: 12.9 },
    { d: '2021-01-29 21:37:39', alt: 522.31, days: 12.5 },
    { d: '2021-01-30 10:17:46', alt: 522.29, days: 11.9 },
    { d: '2021-01-30 10:17:46', alt: 522.3, days: 11.9 },
    { d: '2021-01-31 03:42:56', alt: 522.29, days: 11.2 },
    { d: '2021-02-01 09:48:13', alt: 522.26, days: 9.9 },
    { d: '2021-02-01 14:33:15', alt: 522.26, days: 9.7 },
    { d: '2021-02-01 14:33:15', alt: 522.26, days: 9.7 },
    { d: '2021-02-02 22:13:32', alt: 522.22, days: 8.4 },
    { d: '2021-02-02 22:13:32', alt: 522.22, days: 8.4 },
    { d: '2021-02-03 07:43:37', alt: 522.21, days: 8 },
    { d: '2021-02-04 02:43:46', alt: 522.19, days: 7.2 },
    { d: '2021-02-04 09:03:49', alt: 522.18, days: 7 },
    { d: '2021-02-04 09:03:49', alt: 522.18, days: 7 },
    { d: '2021-02-05 02:28:57', alt: 522.16, days: 6.3 },
    { d: '2021-02-05 08:49:00', alt: 522.15, days: 6 },
    { d: '2021-02-05 11:59:01', alt: 522.15, days: 5.9 },
    { d: '2021-02-06 02:14:08', alt: 522.13, days: 5.3 },
    { d: '2021-02-06 11:44:12', alt: 522.13, days: 4.9 },
    { d: '2021-02-07 01:59:18', alt: 522.12, days: 4.3 },
    { d: '2021-02-07 01:59:18', alt: 522.12, days: 4.3 },
    { d: '2021-02-07 08:19:21', alt: 522.11, days: 4 },
    { d: '2021-02-08 01:44:28', alt: 522.08, days: 3.3 },
    { d: '2021-02-08 06:29:29', alt: 522.07, days: 3.1 },
    { d: '2021-02-09 01:29:37', alt: 522.07, days: 2.3 },
    { d: '2021-02-09 10:59:41', alt: 522.06, days: 1.9 },
    { d: '2021-02-09 07:49:39', alt: 522.06, days: 2 },
    { d: '2021-02-10 02:49:46', alt: 522.05, days: 1.2 },
    { d: '2021-02-10 09:09:49', alt: 522.04, days: 1 },
    { d: '2021-02-10 09:09:49', alt: 522.04, days: 1 },
    { d: '2021-02-11 00:59:54', alt: 522.04, days: 0.3 }
  ]
}
```


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2021 [StarLink API](https://github.com/ChrisMichaelPerezSantiago/starlinkapi).

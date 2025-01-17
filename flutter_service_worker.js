'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e3d5ef8b42bfe192645e3f63fd61a92",
".git/config": "ac514b4800125bee53530d22e7238f01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b2d78805f263be8e6e0d634665854c3d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1231cb932e369d220ebce802ebdc89eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b47613bebcf22373b20587ddf46a310",
".git/logs/refs/heads/main": "0b47613bebcf22373b20587ddf46a310",
".git/logs/refs/remotes/origin/HEAD": "c1d1e1b7ac9aa12d9900eb5ea2da7134",
".git/logs/refs/remotes/origin/main": "819c9170d37367665be4cc4c41fa3972",
".git/objects/00/754d0cb4759fbd8e698b0d1aaf932a113432b8": "340976c67a4151097ef0a89fe8c6a8cd",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "aa6bc2588c86a5df58354e8329a5819b",
".git/objects/0c/37594409355f44e27de8152dd5be76567012e6": "90be72f0e57b1e1f031c3f95bab409fb",
".git/objects/10/ec4229d08baf5482bd393ee4c4439a330d8aa6": "4f461b7745a5fc28424d4327f894d769",
".git/objects/11/26a2013b1163d469ee4fc9690fff755e7c02e2": "9ad9442af9d17bcb4b0ec636f1dc5643",
".git/objects/11/94ae4121aaabdd57e2aa99ef2df0d429b8510f": "047b16e96c5d784f480b0f237d35a390",
".git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
".git/objects/18/8031d477d2250a3c57abbefbf47e1f74d547a1": "656d07a6dc79777ae39183692040ac71",
".git/objects/1a/c10ea894ab89951b50def7ce57b0cd0af86499": "b3403ae0aff518a6b3a5eb9731e1c557",
".git/objects/1f/e1f47a31919e51c5d8d17d2ab3e516fc96c4c6": "e8093c2b1cd2be7424549be743294e1b",
".git/objects/2b/36ae38855205b3000b7b7116a34ffc342fcde4": "a63a3fd861ee8ced6512e568a34eace5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "cefb98dcae0301097bc465deeeb72772",
".git/objects/36/8bdfa0cf1f8571d30d415785cc70b128d1d9df": "4f1625157411c41c57905f9463039584",
".git/objects/38/f6f9ac00141bd5da849906bcf651b41b393b68": "c9ac1ec26ebebadf79a228d084e64dce",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "18afdd808b7e0b924a0e7474cebad727",
".git/objects/3b/7b9f3ee28ec519a81ecc75db22a404802db1b0": "660007b077c64ac64270208c79e2a66d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "b51c8670b810523b169634bf530a8675",
".git/objects/42/d6c31d496d81033ff6416968b098f90a6b13f1": "7167715cb3143690cb2f0444329dcea4",
".git/objects/43/15e3dd27eeb3bd66ca36b142890955ded0a759": "b9e8c9bb3ec280423c7d0b6f1a05e7b7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "f6fc11391a8c401cfb67cb54aa713a55",
".git/objects/45/b74bb943f68a9c11d11d1911a683b241b4426d": "4af09f890f3b5fdf3e23642bb65504bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
".git/objects/4d/1397fc5144efbeb962284afb0b367bbd786d26": "6658bf86751f1119e2862a45e3cfb339",
".git/objects/4d/4861dcc9e18854654824a5a9171e33785585b2": "232087048034ad19a535bb5dd7a6136c",
".git/objects/4f/b93d38bbcfa2fba58a0b801456f8f7d2287b1b": "867ce0cdadc31730a1e928424a0df0b2",
".git/objects/52/490e87f3817a70ee51512a412120ebe310d332": "612ca23461cdea226862793e22902da4",
".git/objects/55/1a698bce7dd9c272797a7d132e905ca7795f45": "9ea1971b5858dbf636c41866da167a50",
".git/objects/58/8a17de1ed5b21375773ebc86f0178342d1089f": "59a5779035f2dcc0c32df408fe34409b",
".git/objects/5a/bdb7b454d7a7517691c791513490743855e486": "1bee2562fb9cab9f8504a58cd1fc7a49",
".git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "5c56b6c1da319c420d04d397794ce68b",
".git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
".git/objects/66/82d1fe597f6d9fdadb5bfea775ba744579b1c7": "0ccd4c9ecd26f709be2a0036630fe256",
".git/objects/68/a0a9841697079e097ac9930915fa7de3774f53": "928c12f80f1724083e51e2c1f92125c5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "f1341a25d22b4a8e5f9c0241d202a781",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "f88c3e8f69490491359c01fdfbf4dea9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "cc171eda59b2198bcfb662da9c3ed257",
".git/objects/93/9fde2dac706e89966c6728b2a772856b8971f1": "fa4b5173bb9f35471d0b10c593eb11f4",
".git/objects/94/65d16ee3762eafbd1dbb5df7c2c447a0a49436": "0b7c8d478b62efef4fb51617ac068fd2",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "e0aee1a764d4e79300d1392e0233ed7e",
".git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
".git/objects/a1/24d7ed5f3d908c3991a0208fa512b06ef60d3c": "f0b349252d2d2e32c842d12aec46eeea",
".git/objects/a1/f8bdc577a5029040c2da121d838351c68643fc": "5d95621d9b0adce53a2cba2ce35a26ba",
".git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
".git/objects/a5/3e26d73085f80d578ba0c4e97883b4118dfd13": "b596a3f0c9176fb1a56e9c2a678f903a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "a8ee603f3c72787ba9ac0d9e8695cfe0",
".git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "0f71dae0bcf233241efa99a3c9d748a0",
".git/objects/ae/8ad5668741ea26c255fe7433fedb7398930be2": "cf8df0c2107ea35054f0eebed51ebfa1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/ba/949d2dc603631c3e82cc03695270b964a2bc4b": "0b41ae6d37086e19f2f4c6ec2cc6ef71",
".git/objects/bb/6112f1667abaf538ccbe7a637fb4d772ea3b1a": "e117627e51c0ec53f10601d5d7f46ffd",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "5e6d59f1d6187e2b1ab5f657c723ff8c",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
".git/objects/c7/8d7f0456a84098d683b17d7261d2c79f57ce8d": "f8a22c5e8a637ae08d5cab2c8e25dcd9",
".git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
".git/objects/cc/a0514872e52e9ac6d1973df9d4cef5a10475bc": "c0ba26f7e0ee7880871f5a8251d89068",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "e328ba153ad3c7d383daf129966de954",
".git/objects/cd/91049b540bcd71524e83ed854060fdb33c7557": "c380f5b2253326d0eff0523ee80af828",
".git/objects/cd/a6a066987d52fa41216e6092d9805f39263d2a": "297a1c3f3ca0e018209ae4dee8066dea",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "43ec7593c54051d29f6a01ef0b3cdb05",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6fb66a610eeb3a4d0399d24581bd4509",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "561d04eb65f955d114e3388465614e21",
".git/objects/db/2f3dc6fb6e78066da203e46c4645364e7dc1ca": "29d0b83c241e1f61003372dafefe68d3",
".git/objects/dd/8958612015976818ce2316dcf7af02f2d1689e": "272a4264d6c20b0aa00f90be7eb004b3",
".git/objects/e5/8d26cb01b02f1d21b57b5c88556df8c9472b90": "302e8ce93a55487f59859c978cd14eb7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/f0/c1a4070c7009211d725b67280c54f8b2c9d6c1": "25b509d44ff909cfe0c2ee8622a53277",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/fd/1579de25ddd652627d0d128ed1f21642653a85": "8a07603746fc47ae030336d3931856c7",
".git/refs/heads/main": "7bb309eb62e483b92220d57597095cdc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "7bb309eb62e483b92220d57597095cdc",
"assets/AssetManifest.bin": "cbaa6cafafd21fe387eb6a2f4d97fa60",
"assets/AssetManifest.bin.json": "336494d45710ffaa16acd599e8a3ca51",
"assets/AssetManifest.json": "71bc8dddadff70db80b9643b040370ad",
"assets/assets/aerial-bg.jpg": "2d2af73a4d012dddde526bf437ea5dc5",
"assets/assets/aerial-bg2.jpg": "37dfe8d21d3f9812c0d11eaf3ab41ce7",
"assets/assets/anim_location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/d11.png": "e68d26a24a663d987039cc9989e65605",
"assets/assets/divine-bg.png": "3d5a8eacd065f9ee0be51b7fd89f9437",
"assets/assets/ic_facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/assets/ic_form.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/ic_instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/ic_next_city.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"assets/assets/ic_whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/ic_youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/logo.png": "7b757d6beeedf5f235498e9f7a8848db",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/prize.png": "9f797587c2c79920316eabb30cd7c667",
"assets/assets/real_estate_01.png": "c26137ec28583dcd0b6619ded0962c72",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/star.png": "7029826108fa95f796ce0c9058ea637b",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cfcb8f0715fdc483ebb7f982e95e3427",
"assets/NOTICES": "5848d78c9515cca704eebbc853f889e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "47e32c239c9aeee9ea933190ba6c9d68",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6632f8a5b8a0a0d8762b43b8aafba67d",
"/": "6632f8a5b8a0a0d8762b43b8aafba67d",
"logo.png": "feda39e439b82adaf1579db67899c5e8",
"main.dart.js": "78e324b4431561203cb0154f9126f966",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"manifest.zip": "e2dff4c9b3c17e1835da2c0794d9724f",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

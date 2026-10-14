/* COME PRO · service worker: notificaciones y carga sin conexión */
const CACHE='comepro-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html']).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return res}).catch(()=>caches.match('./index.html')));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok&&/\.(webp|png|jpg|jpeg|svg)$/.test(u.pathname)){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})))});
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(_){d={title:'COME PRO',body:e.data&&e.data.text()}}
  e.waitUntil(self.registration.showNotification(d.title||'COME PRO',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||undefined,renotify:!!d.tag,actions:Array.isArray(d.actions)?d.actions.slice(0,2):undefined,data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();let url=(e.notification.data&&e.notification.data.url)||'./';
  if(e.action!=='ate')url=url.replace(/&ate=[^&]*&n=\d+/,'');
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c){c.postMessage({type:'cp-go',url});return c.focus()}}return self.clients.openWindow(url)}))});

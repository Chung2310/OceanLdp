import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
const files=[];
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())await walk(p);else if(/\.(ts|tsx)$/.test(p))files.push(p);}}
await walk('src');
const sources=new Map();
for(const file of files){const text=await fs.readFile(file,'utf8');const urls=[...new Set(text.match(/https:\/\/images\.unsplash\.com\/[^'"\s<>]+/g)||[])];if(urls.length)sources.set(file,{text,urls});}
await fs.mkdir('src/asset/remote',{recursive:true});
const downloaded=new Map();
for(const url of new Set([...sources.values()].flatMap(s=>s.urls))){
 try {
 const response=await fetch(url,{signal:AbortSignal.timeout(12000)});
 if(!response.ok)throw new Error('HTTP '+response.status);
 if(!response.headers.get('content-type')?.startsWith('image/'))throw new Error('not an image');
 const name=crypto.createHash('sha256').update(url).digest('hex').slice(0,16)+'.jpg';
 await fs.writeFile('src/asset/remote/'+name,Buffer.from(await response.arrayBuffer()));
 downloaded.set(url,name);
 } catch(error){console.log('Skipped',url,error.message);}
}
for(const [file,{text,urls}] of sources){let updated=text,imports='';let index=0;for(const url of urls){if(!downloaded.has(url))continue;const name='localRemoteImage'+crypto.createHash('sha256').update(url).digest('hex').slice(0,12);let rel=path.relative(path.dirname(file),'src/asset/remote/'+downloaded.get(url)).replaceAll('\\','/');if(!rel.startsWith('.'))rel='./'+rel;imports+=`// Source: ${url}\nimport ${name} from '${rel}';\n`;updated=updated.replaceAll('src="'+url+'"','src={'+name+'}').replaceAll("'"+url+"'",name);}await fs.writeFile(file,imports+updated);}
console.log('Localized',downloaded.size,'external images');

import fs from 'fs/promises';import path from 'path';
const root=process.env.STORAGE_ROOT||'./storage';
export async function ensureDir(p:string){await fs.mkdir(p,{recursive:true})}
export async function saveUpload(folder:string,file:File){const dir=path.join(root,folder);await ensureDir(dir);const safe=file.name.replace(/[^a-zA-Z0-9._-]+/g,'_');const name=Date.now()+'_'+safe;const full=path.join(dir,name);await fs.writeFile(full,Buffer.from(await file.arrayBuffer()));return {path:full,fileName:file.name,mime:file.type||'application/octet-stream'}}
export async function readTextFile(p:string){try{return await fs.readFile(p,'utf8')}catch{return ''}}
export async function writeGenerated(folder:string,fileName:string,buffer:Buffer|string){const dir=path.join(root,folder);await ensureDir(dir);const full=path.join(dir,fileName.replace(/[^a-zA-Z0-9._-]+/g,'_'));await fs.writeFile(full,buffer);return full}

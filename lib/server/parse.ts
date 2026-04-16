import fs from 'fs/promises';
import * as pdf from 'pdf-parse';
import mammoth from 'mammoth';
export async function extractText(filePath:string,mime:string,fileName:string){const lower=fileName.toLowerCase();try{if(mime.includes('pdf')||lower.endsWith('.pdf')){const data=await fs.readFile(filePath);const out=await pdf(data);return out.text||''}if(lower.endsWith('.docx')||mime.includes('wordprocessingml')){const out=await mammoth.extractRawText({path:filePath});return out.value||''}if(lower.endsWith('.txt')) return fs.readFile(filePath,'utf8');return ''}catch(e){return ''}}

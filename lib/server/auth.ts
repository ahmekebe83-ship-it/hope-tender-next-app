import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { prisma } from './db';
export async function hashPassword(p:string){return bcrypt.hash(p,10)}
export async function verifyPassword(p:string,h:string){return bcrypt.compare(p,h)}
export async function setSession(userId:string){cookies().set('haec_uid',userId,{httpOnly:true,sameSite:'lax',path:'/',maxAge:60*60*24*7})}
export function clearSession(){cookies().delete('haec_uid')}
export async function currentUser(){const id=cookies().get('haec_uid')?.value;if(!id)return null;return prisma.user.findUnique({where:{id}})}
export async function requireUser(){const u=await currentUser();if(!u)throw new Error('Unauthorized');return u}
export async function can(action:'ADMIN'|'WRITE'|'REVIEW'|'VIEW'){const u=await requireUser();if(u.role==='ADMIN')return u;if(action==='VIEW')return u;if(action==='WRITE' && ['PROPOSAL_MANAGER'].includes(u.role))return u;if(action==='REVIEW' && ['REVIEWER','PROPOSAL_MANAGER'].includes(u.role))return u;throw new Error('Forbidden')}

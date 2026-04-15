import { prisma } from './db';
export async function audit(userId:string|undefined, action:string, entity?:string, entityId?:string, details?:unknown){await prisma.auditLog.create({data:{userId,action,entity,entityId,details:details?JSON.stringify(details).slice(0,4000):undefined}})}

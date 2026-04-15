import { NextResponse } from 'next/server';import { prisma } from '@/lib/server/db';
export async function POST(_:Request,{params}:{params:{id:string}}){await prisma.tender.update({where:{id:params.id},data:{status:'APPROVED'}});return NextResponse.json({ok:true})}

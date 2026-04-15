import { NextResponse } from 'next/server';import { exportPackage } from '@/lib/tender/engine';
export async function POST(_:Request,{params}:{params:{id:string}}){return NextResponse.json(await exportPackage(params.id))}

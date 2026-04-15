import { NextResponse } from 'next/server';import { analyzeTender } from '@/lib/tender/engine';
export async function POST(_:Request,{params}:{params:{id:string}}){return NextResponse.json(await analyzeTender(params.id))}

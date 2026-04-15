import { NextResponse } from 'next/server';import { generateProposal } from '@/lib/tender/engine';
export async function POST(_:Request,{params}:{params:{id:string}}){return NextResponse.json(await generateProposal(params.id))}

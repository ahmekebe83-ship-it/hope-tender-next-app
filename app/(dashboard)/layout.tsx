import Shell from '@/components/Shell';import { currentUser } from '@/lib/server/auth';import { redirect } from 'next/navigation';
export default async function Layout({children}:{children:React.ReactNode}){const u=await currentUser();if(!u)redirect('/login');return <Shell>{children}</Shell>}

'use client'
import Link from 'next/link'
export default function Nav(){ return (<nav style={{padding:10}}><Link href='/'>Home</Link> | <Link href='/login'>Login</Link> | <Link href='/dashboard'>Dashboard</Link></nav>) }

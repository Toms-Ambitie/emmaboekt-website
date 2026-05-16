'use client'
import dynamic from 'next/dynamic'

const ChatDemo = dynamic(() => import('./ChatDemo'), { ssr: false })

export default function ChatDemoWrapper() {
  return <ChatDemo />
}

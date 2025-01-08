import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Багшаар бүртгүүлэх - Erdeme',
  description: 'Энэхүү бүртгэл нь урьдчилсан бөгөөд, нээлт хийсэн даруйд тантай доорх мэдээллээр холбогдох болно',
}

export default function PreOrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
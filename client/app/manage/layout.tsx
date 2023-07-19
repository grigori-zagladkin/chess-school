import { ReactNode } from 'react'

import AdminLayout from '@/components/ui/AdminLayout'

export default function ManageLayout({ children }: { children: ReactNode }) {
	return <AdminLayout>{children}</AdminLayout>
}

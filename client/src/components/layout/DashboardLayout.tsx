// ==================== Dashboard Layout Component ====================
// Wraps dashboard pages with Sidebar navigation

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { useAuth } from '@/features/auth'
import { Outlet } from 'react-router'
import DashboardSidebar from './Sidebar'

type UserRole = 'student' | 'tutor' | 'admin'

const DashboardLayout = () => {
    const { user } = useAuth()

    // Get role from authenticated user, default to student
    const role = (user?.role as UserRole) || 'student'

    return (
        <SidebarProvider>
            <DashboardSidebar role={role} />
            <SidebarInset>
                <main className="flex-1 overflow-auto p-4 md:p-6">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout

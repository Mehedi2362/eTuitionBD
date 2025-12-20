// ==================== User Query Hooks ====================
// Uses UserService & TutorService with TanStack Query
import { TutorService, UserService, type TutorQueryParams, type UserQueryParams } from '@/services'
import type { UserRole } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

// ==================== Query Keys ====================
export const userKeys = {
    all: ['users'] as const,
    lists: () => [...userKeys.all, 'list'] as const,
    list: (params?: UserQueryParams) => [...userKeys.lists(), params] as const,
    details: () => [...userKeys.all, 'detail'] as const,
    detail: (id: string) => [...userKeys.details(), id] as const,
}

export const tutorKeys = {
    all: ['tutors'] as const,
    lists: () => [...tutorKeys.all, 'list'] as const,
    list: (params?: TutorQueryParams) => [...tutorKeys.lists(), params] as const,
    featured: () => [...tutorKeys.all, 'featured'] as const,
    details: () => [...tutorKeys.all, 'detail'] as const,
    detail: (id: string) => [...tutorKeys.details(), id] as const,
}

// ==================== User Queries (Admin) ====================

// Get all users (admin)
export const useUsers = (params?: UserQueryParams) => {
    return useQuery({
        queryKey: userKeys.list(params),
        queryFn: () => UserService.getAll(params),
    })
}

// Get user by ID (admin)
export const useUser = (id: string) => {
    return useQuery({
        queryKey: userKeys.detail(id),
        queryFn: () => UserService.getById(id),
        enabled: !!id,
    })
}

// Update user role (admin)
export const useUpdateUserRole = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, role }: { id: string; role: UserRole }) => UserService.updateRole(id, role),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.all })
            toast.success('ইউজারের রোল আপডেট হয়েছে!')
        },
        onError: (error: Error) => {
            toast.error(error.message || 'রোল আপডেট ব্যর্থ!')
        },
    })
}

// ==================== Tutor Queries (Public) ====================

// Get all tutors (public)
export const useTutors = (params?: TutorQueryParams) => {
    return useQuery({
        queryKey: tutorKeys.list(params),
        queryFn: () => TutorService.getAll(params),
    })
}

// Get featured tutors (public)
export const useFeaturedTutors = (limit?: number) => {
    return useQuery({
        queryKey: tutorKeys.featured(),
        queryFn: () => TutorService.getFeatured(limit),
    })
}

// Get tutor by ID (public)
export const useTutor = (id: string) => {
    return useQuery({
        queryKey: tutorKeys.detail(id),
        queryFn: () => TutorService.getById(id),
        enabled: !!id,
    })
}

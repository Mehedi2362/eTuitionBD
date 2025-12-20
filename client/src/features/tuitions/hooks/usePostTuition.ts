/**
 * usePostTuition Hook
 * Custom hook for posting new tuition
 * Handles form state, validation, and submission
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

import { STUDENT_MY_TUITIONS } from '@/features/dashboard/constants'
import { useCreateTuition } from '../hooks/useTuitionQueries'
import { createTuitionSchema, type CreateTuitionFormData } from '../validators'

export interface UsePostTuitionOptions {
    redirectTo?: string
    onSuccess?: () => void
}

export const usePostTuition = (options: UsePostTuitionOptions = {}) => {
    const { redirectTo = STUDENT_MY_TUITIONS, onSuccess } = options
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)

    // React Hook Form with Zod validation
    const form = useForm<CreateTuitionFormData>({
        resolver: zodResolver(createTuitionSchema),
        defaultValues: {
            subject: '',
            class: '',
            location: '',
            budget: undefined,
            schedule: '',
            description: '',
            requirements: '',
        },
    })

    // Create tuition mutation
    const createTuitionMutation = useCreateTuition()

    // Handle form submission
    const onSubmit = async (data: CreateTuitionFormData) => {
        setIsSubmitting(true)

        try {
            await createTuitionMutation.mutateAsync(data)
            toast.success('Tuition posted successfully! Waiting for admin approval.')
            onSuccess?.()
            navigate(redirectTo)
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to post tuition'
            toast.error(message)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Handle form submission wrapper
    const handleSubmit = form.handleSubmit(onSubmit)

    // Cancel handler
    const handleCancel = () => {
        navigate(-1)
    }

    return {
        form,
        handleSubmit,
        handleCancel,
        isSubmitting,
        isLoading: createTuitionMutation.isPending || isSubmitting,
    }
}

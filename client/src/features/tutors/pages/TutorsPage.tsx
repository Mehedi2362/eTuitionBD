// #TODO: Tutors Listing Page
// #TODO: Display all verified tutors
// #TODO: Search functionality
// #TODO: Filter options

import { TutorSearchFilters, TutorsGrid } from '@/features/tutors'
import type { Tutor } from '@/features/tutors/components/TutorCard'
import type { TutorFilters } from '@/features/tutors/components/TutorSearchFilters'
import { useState } from 'react'

const TutorsPage = () => {
    // Filter state
    const [filters, setFilters] = useState<TutorFilters>({
        search: '',
        subject: 'all',
        location: 'all',
        experience: 'all',
    })

    // #TODO: Fetch tutors from backend with useQuery
    // const { data: tutors, isLoading, error } = useQuery({
    //   queryKey: ['tutors', filters],
    //   queryFn: () => fetchTutors(filters),
    // });

    // Mock data for demonstration
    const mockTutors: Tutor[] = [
        {
            _id: '1',
            name: 'Dr. Ahmed Rahman',
            email: 'ahmed@example.com',
            photo: '',
            education: 'PhD in Mathematics, DU',
            subjects: ['Mathematics', 'Physics'],
            location: 'Dhaka',
            experience: 8,
            rating: 4.9,
            reviewCount: 45,
            isVerified: true,
            hourlyRate: 800,
        },
        {
            _id: '2',
            name: 'Fatima Khatun',
            email: 'fatima@example.com',
            photo: '',
            education: 'MSc in Chemistry, BUET',
            subjects: ['Chemistry', 'Biology'],
            location: 'Chittagong',
            experience: 5,
            rating: 4.7,
            reviewCount: 32,
            isVerified: true,
            hourlyRate: 600,
        },
        {
            _id: '3',
            name: 'Mohammad Karim',
            email: 'karim@example.com',
            photo: '',
            education: 'BA in English, Dhaka University',
            subjects: ['English', 'Bangla'],
            location: 'Sylhet',
            experience: 3,
            rating: 4.5,
            reviewCount: 18,
            isVerified: true,
            hourlyRate: 500,
        },
        {
            _id: '4',
            name: 'Anika Hossain',
            email: 'anika@example.com',
            photo: '',
            education: 'BSc in ICT, SUST',
            subjects: ['ICT', 'Mathematics'],
            location: 'Dhaka',
            experience: 2,
            rating: 4.6,
            reviewCount: 12,
            isVerified: false,
            hourlyRate: 450,
        },
        {
            _id: '5',
            name: 'Rafiq Islam',
            email: 'rafiq@example.com',
            photo: '',
            education: 'BBA in Accounting, NSU',
            subjects: ['Accounting', 'Economics'],
            location: 'Rajshahi',
            experience: 6,
            rating: 4.8,
            reviewCount: 28,
            isVerified: true,
            hourlyRate: 700,
        },
        {
            _id: '6',
            name: 'Sadia Akter',
            email: 'sadia@example.com',
            photo: '',
            education: 'MSc in Physics, CU',
            subjects: ['Physics', 'Mathematics'],
            location: 'Khulna',
            experience: 4,
            rating: 4.4,
            reviewCount: 15,
            isVerified: true,
            hourlyRate: 550,
        },
    ]

    const isLoading = false

    const handleSearch = () => {
        // #TODO: Trigger search/filter with API call
        // Will be implemented with useQuery when backend is ready
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Find Tutors</h1>
                <p className="text-muted-foreground">Browse through our verified and experienced tutors</p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-8">
                <TutorSearchFilters filters={filters} onFiltersChange={setFilters} onSearch={handleSearch} />
            </div>

            {/* Tutors Grid */}
            <TutorsGrid tutors={mockTutors} isLoading={isLoading} />
        </div>
    )
}

export default TutorsPage

// #TODO: Tutor Profile Page
// #TODO: Display tutor information
// #TODO: Qualifications and experience
// #TODO: Rating & reviews (Optional)

import { AboutTab, ExperienceTab, ProfileSidebar, ReviewsTab } from '@/features/tutors'
import type { TutorProfile, TutorReview } from '@/features/tutors/components/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useParams } from 'react-router'

const TutorProfilePage = () => {
    // Get tutor ID from URL params
    const { id: tutorId } = useParams<{ id: string }>()

    // #TODO: Fetch tutor details from backend
    // const { data: tutor, isLoading, error } = useQuery({
    //   queryKey: ['tutor', tutorId],
    //   queryFn: () => fetchTutorById(tutorId),
    // });

    // Mock tutor data for demonstration
    const mockTutor: TutorProfile = {
        _id: tutorId || '1',
        name: 'Mohammad Rahman',
        email: 'rahman@email.com',
        phone: '+880 1700-000000',
        title: 'Mathematics Specialist',
        bio: 'I am a passionate mathematics teacher with over 5 years of experience teaching students from Class 6 to HSC level. I specialize in making complex mathematical concepts easy to understand through practical examples and interactive teaching methods. My students have consistently achieved excellent results in board examinations.',
        location: 'Dhaka, Bangladesh',
        subjects: ['Mathematics', 'Physics', 'Higher Mathematics', 'Calculus', 'Statistics'],
        education: [
            {
                degree: 'MSc in Mathematics',
                institution: 'University of Dhaka',
                year: '2015 - 2017',
            },
            {
                degree: 'BSc in Mathematics',
                institution: 'University of Dhaka',
                year: '2011 - 2015',
            },
        ],
        certifications: [
            {
                name: 'Advanced Teaching Certification',
                issuer: 'British Council',
                year: '2020',
            },
        ],
        experience: 5,
        rating: 4.8,
        reviewCount: 50,
        studentsCount: 50,
        classesCount: 100,
        isVerified: true,
        availability: {
            weekdays: '4:00 PM - 9:00 PM',
            weekends: '10:00 AM - 8:00 PM',
        },
    }

    // Mock reviews data
    const mockReviews: TutorReview[] = [
        {
            _id: '1',
            student: { name: 'Anika Hossain' },
            rating: 5,
            comment: 'Excellent tutor! Very patient and explains concepts clearly. My grades improved significantly after taking classes.',
            createdAt: '2025-01-10T10:00:00.000Z',
        },
        {
            _id: '2',
            student: { name: 'Rafiq Islam' },
            rating: 5,
            comment: 'Sir is very dedicated and makes sure students understand every topic before moving on. Highly recommended!',
            createdAt: '2025-01-05T10:00:00.000Z',
        },
        {
            _id: '3',
            student: { name: 'Sadia Akter' },
            rating: 4,
            comment: 'Good teaching methods and always available to answer questions. Helped me a lot with calculus.',
            createdAt: '2024-12-20T10:00:00.000Z',
        },
    ]

    const handleSendMessage = () => {
        // #TODO: Open messaging dialog or redirect to chat
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar - Tutor Basic Info */}
                <div className="lg:col-span-1">
                    <ProfileSidebar tutor={mockTutor} onSendMessage={handleSendMessage} />
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <Tabs defaultValue="about" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="about">About</TabsTrigger>
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        </TabsList>

                        {/* About Tab */}
                        <TabsContent value="about">
                            <AboutTab tutor={mockTutor} />
                        </TabsContent>

                        {/* Experience Tab */}
                        <TabsContent value="experience">
                            <ExperienceTab tutor={mockTutor} />
                        </TabsContent>

                        {/* Reviews Tab */}
                        <TabsContent value="reviews">
                            <ReviewsTab reviews={mockReviews} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default TutorProfilePage

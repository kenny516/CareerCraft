import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewByUserId, getInterviewCreateByOtherUser } from '@/lib/actions/general.action'

const page = async () => {
    const user = await getCurrentUser();
    const [userinterviews, latestInterview] = await Promise.all([
        await getInterviewByUserId(user?.id as string),
        await getInterviewCreateByOtherUser({ userId: user?.id as string })
    ])


    const hasPastInterviews = Array.isArray(userinterviews) && userinterviews.length > 0;
    const hasUpCommingInterviews = Array.isArray(latestInterview) && latestInterview.length > 0;

    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>✨ Practice Your Interview with AI</h2>
                    <p className='text-lg'>🎯 Join our program to enhance your skills and boost your confidence.</p>
                    <Button asChild className='btn-primary max-sm:w-full hover:scale-105 transition-transform'>
                        <Link href='/interview'>
                            🚀 Start an Interview
                        </Link>
                    </Button>
                </div>
                <Image
                    src='/robot.png'
                    alt='robot'
                    width={400}
                    height={400}
                    className='max-sm:hidden animate-pulse'
                />
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>📝 Your Interviews</h2>
                <div className='interviews-section'>
                    {hasPastInterviews ? (
                        userinterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>📭 You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>🎯 Available Interviews</h2>
                <div className='interviews-section'>
                    {hasUpCommingInterviews ? (
                        latestInterview?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p>🔍 No interviews available at the moment</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default page
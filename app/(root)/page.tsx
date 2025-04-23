import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>Get interview ready with ai practise and feedback</h2>
                    <p className='text-lg'>Join our program to enhance your skills and boost your confidence.</p>
                    <Button asChild className='btn-primary max-sm:w-full'>
                        <Link href='/interview'>
                            Start an interview
                        </Link>
                    </Button>
                </div>
                <Image
                    src='/robot.png'
                    alt='robot'
                    width={400}
                    height={400}
                    className='max-sm:hidden'
                />
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>Your interview</h2>
                <div className='interviews-section'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>
            <section className='flex flex-col gap-6 mt-8'>
                <h2>Take an interview</h2>
                <div className='interviews-section'>
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                    {/*   <p>You haven&apos;t taken any interviews yet</p> */}
                </div>
            </section>
        </>
    )
}

export default page 
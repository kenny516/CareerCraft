import { getInterviewById } from '@/lib/actions/general.action';
import { getRandomInterviewCover } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import Agent from '@/components/Agent';
import { getCurrentUser } from '@/lib/actions/auth.action';



const page = async ({ params }: RouteParams) => {
    const user = await getCurrentUser();
    const { id } = await params;
    const interview = await getInterviewById(id);
    if (!interview) redirect('/');
    return (
        <>
            <div className='flex flex-row gap-4 justify-between'>
                <div className='flex flex-row gap-4 items-center max-sm:flex-col'>
                    <div className='flex flex-row gap-4 items-center'>
                        <Image
                            src={getRandomInterviewCover()}
                            alt='cover-image'
                            width={40}
                            height={40}
                            className='rounded-full object-cover size-[40px]'
                        />
                        <h3 className='capitalize'>
                            {interview.role} Interview
                        </h3>
                        <DisplayTechIcons techStack={interview.techstack} />
                        <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>{interview.type}</p>
                    </div>
                </div>
            </div>
            <Agent userName={user?.name || ""} userId={user?.id} interviewId={interview.id} type='interview' questions={interview.questions} />
        </>
    )
}

export default page
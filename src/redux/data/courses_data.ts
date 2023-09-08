import getCourseDates from '../../utils/getCourseDates'

export enum Instructors {
    marcia = 'Márcia de Silva',
    steven = 'Steven Peters',
    ximena = 'Ximena Flora',
}

export interface Course {
    name: string,
    students: string[],
    courseDates: number[],
    startTime: string, 
    endTime: string,
    book: string,
    instructor: string,
    lessons: Lesson[]
}

export interface Lesson {
    name: string,
    description: string

}

export const courses:Course[]  = [
    {
        name: "A1 General English (Young learners)",
        students: [
            "Hannah Hovsepian"
        ],
        courseDates: getCourseDates(),
        startTime: '11:00',
        endTime: '12:30',
        book: "Speakout A1",
        instructor: Instructors.marcia,
        lessons: [
            {
                name:"lesson1",
                description:"this is the lesson"
            }
        ]
    },
    {
        name: "A1 General English (Adults)",
        students: [
            "Hannah Hovsepian"
        ],
        courseDates: getCourseDates(),
        startTime: '11:00',
        endTime: '12:30',
        book: "Roadmap A1",
        instructor: Instructors.steven,
        lessons: [
            {
                name:"lesson1",
                description:"this is the lesson"
            }
        ]
    },
    {
        name: "B1+ General English (Adults)",
        students: [
            "Hannah Hovsepian"
        ],
        courseDates: getCourseDates(),
        startTime: '11:00',
        endTime: '12:30',
        book: " Speakout B1+",
        instructor: Instructors.ximena,
        lessons: [
            {
                name:"lesson1",
                description:"this is the lesson"
            }
        ]
    }
]

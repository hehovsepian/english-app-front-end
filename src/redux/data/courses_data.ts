import getCourseDates from '../../utils/getCourseDates'

export interface Course {
    name: string,
    students: string[],
    courseDates: number[],
    startTime: string, 
    endTime: string,
    book: string,
    lessons: Lesson[]
}

export interface Lesson {
    name: string,
    description: string

}

export const courses = [
    {
        name: "A1 General English(Young learners)",
        students: [
            "Hannah Hovsepian"
        ],
        courseDates: getCourseDates(),
        startTime: '11:00',
        endTime: '12:30',
        book: "Speakout A1",
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
        lessons: [
            {
                name:"lesson1",
                description:"this is the lesson"
            }
        ]
    }
]

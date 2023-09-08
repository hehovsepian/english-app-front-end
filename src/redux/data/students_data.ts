import { Instructors } from "../data/courses_data"


//images
import carlosMachado from '../../images/studentPhotos/Carlos_Machado.png'
import yinGuo from '../../images/studentPhotos/Yin_Guo.png'
import nadjaSaller from '../../images/studentPhotos/Nadja_Saller.png'

export enum Countries {
    brazil = 'Brazil',
    china = 'China',
    germany = 'Germany',
    spain= 'Spain',
    turkey = 'Turkey',
    ukraine= 'Ukraine'
}

export enum NativeLanguages {
    german = 'German',
    mandarin = 'Mandarin',
    portuguese = 'Portuguese',
    spanish = 'Spanish',
    turkish = 'Turkish',
    ukrainian = 'Ukrainian'
}

export interface Student {
    profilePhoto: string,
    name: string,
    location: string,
    country: Countries,
    level: string,
    course: string,
    instructor: Instructors,
    nativeLanguage: NativeLanguages
}

export const students:Student[] = [
    {
        profilePhoto: carlosMachado,
        name: 'Carlos Machado',
        location: 'Madrid, Spain',
        country: Countries.spain,
        level: 'A1',
        course: 'A1 General English (Young learners)',
        instructor: Instructors.marcia,
        nativeLanguage: NativeLanguages.spanish
    },
    {
        profilePhoto: yinGuo,
        name: 'Yin Guo',
        location: 'Beijing, China',
        country: Countries.china,
        level: 'A1',
        course: 'A1 General English (Adults)',
        instructor: Instructors.steven,
        nativeLanguage: NativeLanguages.mandarin
    },
    {
        profilePhoto: nadjaSaller,
        name: 'Nadja Saller',
        location: 'Berlin, Germany',
        country: Countries.germany,
        level: 'B1+',
        course: 'B1+ General English (Adults)',
        instructor: Instructors.ximena,
        nativeLanguage: NativeLanguages.german
    }
]

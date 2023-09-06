import carlosMachado from '../../images/studentPhotos/Carlos_Machado.png'
import yinGuo from '../../images/studentPhotos/Yin_Guo.png'
import nadjaSaller from '../../images/studentPhotos/Nadja_Saller.png'

enum Countries {
    brazil = 'Brazil',
    china = 'China',
    germany = 'Germany',
    spain= 'Spain',
    turkey = 'Turkey',
    ukraine= 'Ukraine'
}

enum NativeLanguages {
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
    nativeLanguage: NativeLanguages
}

export const students = [
    {
        profilePhoto: carlosMachado,
        name: 'Carlos Machado',
        location: 'Madrid, Spain',
        country: Countries.spain,
        level: 'C1',
        course: 'C1 General English',
        nativeLanguage: NativeLanguages.spanish
    },
    {
        profilePhoto: yinGuo,
        name: 'Yin Guo',
        location: 'Beijing, China',
        country: Countries.china,
        level: 'A2',
        course: 'A2 General English',
        nativeLanguage: NativeLanguages.mandarin
    },
    {
        profilePhoto: nadjaSaller,
        name: 'Nadja Saller',
        location: 'Berlin, Germany',
        country: Countries.germany,
        level: 'B1',
        course: 'B1 General English',
        nativeLanguage: NativeLanguages.german
    }
]

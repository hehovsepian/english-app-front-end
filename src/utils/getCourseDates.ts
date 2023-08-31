const getCourseDates = () => {
  let courseDates:number[] = []

  //get last Tuesday
  let now1 = new Date(),
      day1 = now1.getDay(),
      tuesdayDiff = 7 - 2 + day1,
      lastTuesday = now1.setDate(now1.getDate() - tuesdayDiff);

  //get last Thursday    
  let now2 = new Date(),
      day2 = now2.getDay(),
      thursdayDiff = 7 - 4 + day2,
      lastThursday = now2.setDate(now2.getDate() - thursdayDiff);

  courseDates.push(lastTuesday)
  courseDates.push(lastThursday)
  
  //get the next 10 Tuesdays from the starting Tuesday
  for(let i=1; i<10; i++){
      let newTuesday = new Date()
      newTuesday.setDate(new Date(lastTuesday).getDate() + (i * 7))
      courseDates.push(newTuesday.getTime())
  }

  //get the next 10 Thursdays from the starting Thursday
  for(let i=1; i<10; i++){
    let newThursday = new Date()
    newThursday.setDate(new Date(lastThursday).getDate() + (i * 7))
    courseDates.push(newThursday.getTime())
  }

  //sort by date & return
  courseDates.sort((a:number,b:number)=>b - a);
  
  return courseDates
}

export default getCourseDates
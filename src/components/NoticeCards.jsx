import React from 'react'

function Category({ category }) {
    return (
        <div className="bg-[#006699] inline-block px-1 rounded text-white text-sm my-2">
            { category }
        </div>
    )
}

function NoticeCard({ title, category, content}) {
    return (
        <div className="bg-white rounded-lg p-4 m-2 shadow-lg  hover:scale-[1.02] max-w-[80%]">
            <Category category={ category } />
            <h1 className="text-lg font-medium">{ title }</h1>
            <p className="text-sm text-ellipsis">{ content }</p>
        </div>
    )
}

function NoticeCards() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  place-items-center my-3">
        <NoticeCard title={'Suspension of Section Officers'} category={"Uncategorized"} content={"Dear Bombay Section Members, We have just been notified by IEEE MGA staff, on-behalf of the R10 Director, that all the elected Officer Bearers, i.e. Chair (and Chair-elect), Secretary and..."}/>

        <NoticeCard title="Announcing the Recipient of the Lt. Shree Hemant Sonawala Scholarship for Young Woman Engineer" category={"Scholarships"} content={"IEEE Bombay Section – Women in Engineering Affinity Group is pleased to announce that the prestigious “Lt. Shree Hemant Sonawala Scholarship for Young Woman Engineer” for the year 2022-2023, endowed..."}/>

        <NoticeCard title={"Recipients of F C Kohli Lifetime Service Award 2022"} category={"Uncategorized"} content={"We are profoundly honored to bestow this prestigious Award upon our esteemed members in recognition of their exemplary and outstanding contributions to the IEEE Bombay Section, both in duration and..."}/>
    </div>
  )
}

export default NoticeCards

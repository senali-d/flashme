import React, { FunctionComponent } from 'react'

type CatergoryCardProps = {
  qNo: number,
  qTitle: string,
  qContent: string,
}

const colors = [
  'bg-red-50',
  'bg-red-100',
  'bg-red-200',
  'bg-red-300',
  'bg-red-400',
  'bg-red-500',
  'bg-red-600',
  'bg-red-700',
  'bg-red-800',
  'bg-red-900',
]

const CategoryCard: FunctionComponent<CatergoryCardProps> = ({ qNo, qTitle, qContent }) => {
  return (
    <div key={qNo} className={`relative ${colors[qNo]} w-[350px]`} style={{ zIndex: `${10-(qNo+1)}`, bottom: `${(qNo*80)}px`}}>
      <div className="h-24">Javascript</div>
      <div className="flex">
        <div>{qNo+1}</div>
        <div>{qTitle}</div>
      </div>
    </div>
  )
}

export default CategoryCard
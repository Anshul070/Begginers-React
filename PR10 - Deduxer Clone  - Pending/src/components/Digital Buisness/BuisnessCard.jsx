import React from 'react'

function BuisnessCard({CardDtls}) {
  return (
    <div className="w-[76%] h-[65vh] bg-zinc-100 rounded-xl border-[1px] border-zinc-400 p-20 shrink-0">
        <div className="w-24 mb-20">
        {CardDtls.svg}
        </div>
        <h2 className="text-4xl mb-6">{CardDtls.title}</h2>
        <h4 className="text-xl text-zinc-600">{CardDtls.description}</h4>
      </div>
    )
}

export default BuisnessCard
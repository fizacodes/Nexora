import React from 'react'

export default function Contact() {
    const support=["How it works","Features","Pricing","Downloads"]
    const links=["About","Services","Blog","Contact"]
    const terms=["FAQS","Terms and Conditions","Privacy Policy","Help Center"]
  return (
    <div className='bg-white  px-40 pt-10 pb-20 '>
      <div className='flex gap-10'>
        <h1 className='text-background text-7xl tracking-wide  font-semibold'>Let's Contact</h1>
<span className="w-14 h-14 flex items-center justify-center text-4xl  text-background bg-accent rounded-full">
  ↗
</span>
      </div>
      <div className='pt-10 flex gap-20 justify-between'>
        <div className='flex flex-col max-w-[350px]'>
        <div className='flex'>
            <span className="text-3xl font-black text-accent rotate-[-10deg]">
            N
          </span>
          <h1 className="text-2xl font-bold text-background tracking-tight hover:text-accent transition-colors duration-300 cursor-pointer">
            exora
          </h1>
        </div>
        <p className='pt-4 text-[12px] text-gray-600'>Onboard your own talent pool to Nexora, invite them to projects, sign contracts and kick off the projects more than ever.</p>
        <div>

        </div>
        </div>
        
        <div>
            <p className='text-black font-bold'>Support</p>
            <div className='pt-4 space-y-2'>
                {support.map((item,index)=>(
                    <p key={index} className='text-gray-600 text-[12px]'>{item}</p>
                ))}
            </div>
        </div>
        <div>
           <p className='text-black font-bold'>Useful Links</p>
           <div className='pt-4 space-y-2'>
            {links.map((items,index)=>(
                <p key={index} className='text-gray-600 text-[12px]' >{items}</p>
            ))}
           </div>
        </div>
        <div>
            <p className='text-black font-bold'>Terms</p>
            <div className='pt-4 space-y-2'>
            {terms.map((items,index)=>(
                <p key={index} className='text-gray-600 text-[12px]' >{items}</p>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

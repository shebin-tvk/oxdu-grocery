


const Footer1 = () => {
  return (
    <div className='flex justify-center items-center pb-10 w-full'>

        <div className='flex justify-between items-center gap-70'>

            <div className='flex items-center gap-2'>
                <img src="BestPrice.svg" alt="img1" className='h-13'/>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-lg font-semibold'>Best Prices & Deals</h1>
                    <p className='leading-none text-sm text-[#adadad]'>Don't miss our daily amazing <br/> deals and prices</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <img src="Refund.svg" alt="img1" className='h-13'/>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-lg font-semibold'>Refundable</h1>
                    <p className='leading-none text-sm text-[#adadad]'>If your items damage <br/> we agree to refund it</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <img src="Delivery.svg" alt="img1" className='h-13'/>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-lg font-semibold'>Free delivery</h1>
                    <p className='leading-none text-sm text-[#adadad]'>Do purchase over $50 and <br/> get free delivery anywhere</p>
                </div>
            </div>                        

        </div>

    </div>
  )
}

export default Footer1
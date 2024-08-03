

function Sari() {
  return (
    <div>
            <p className='text-3xl text-center mx-auto py-2'>Your Sari is empty</p>
            <div className="flex w-52 flex-col gap-4  mx-auto">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
            </div>
        </div>
  )
}

export default Sari
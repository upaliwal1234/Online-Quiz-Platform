function PageNotFound() {
    return (
        <div className='sm:min-h-screen flex justify-center bg-red-600'>
            <div className='py-52 w-1/5'>
                <h1 className='text-white font-bold text-sm sm:text-4xl text-left'>Error 404</h1>
                <h1 className='text-white text-sm sm:text-2xl text-left'>Page Not Found</h1>
            </div>
        </div>
    )
}

export default PageNotFound
export const EditModal=({isOpen,onClose,children})=>{
    if(!isOpen) return null

    return(
        <div className="fixed inset-0 flex bg-black/25 items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}
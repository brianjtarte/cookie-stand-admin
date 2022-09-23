import CookieForm from './CookieForm'


export default function Main(props) {
    return(
        <main className='bg-bodyColor'>
            <CookieForm handleCreate={props.handleCreate}/>
            <div className="flex items-center justify-center mt-5">
                <p className="text-black">Location Table Coming Soon...</p>


            </div>
            <div className="flex items-center justify-center mt-5 mb-5">
                <p className="text-black">{props.cookieStoreData}</p>
            </div>
        </main>
    )
}
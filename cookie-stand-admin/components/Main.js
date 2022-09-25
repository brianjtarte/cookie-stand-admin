import CreateForm from './CreateForm'
import ReportTable from "./ReportTable"

export default function Main(props) {
    return(
        <main className='bg-bodyColor'>
            <CreateForm handleCreate={props.handleCreate}/>
            <div className="flex items-center justify-center mt-5">
                    <ReportTable hours={props.hours} cookieStoreData={props.cookieStoreData} />


            </div>
            <div className="flex items-center justify-center mt-5 mb-5">
                <p className="text-black">{JSON.stringify(props.cookieStoreData)}</p>
            </div>
        </main>
    )
}
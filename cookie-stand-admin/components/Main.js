import CreateForm from './CreateForm'


export default function Main() {
    return(
        <main className='bg-bodyColor'>
            <CreateForm />
            <div className="flex items-center justify-center mt-5">
                <p className="text-black">Location Table Coming Soon...</p>


            </div>
            <div className="flex items-center justify-center mt-5 mb-5">
                <p className="text-black">{"{"}&quot;location&quot;: &quot;Barcelona&quot;,&quot;minCustomers&quot;: 2, &quot;maxCustomers&quot;: 4,&quot;avgCookies&quot;:2.5{"}"}</p>
            </div>
        </main>
    )
}
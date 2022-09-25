

export default function ReportTable(props){
    function getCookieData(){
        if (props.cookieStoreData.length === 0){
            return <h2 className="flex mx-auto px-50 text-black">No Cookie Stands Available</h2>
        }
        else {
            return <Table hours={props.hours} cookieStoreData={props.cookieStoreData} />
        }
    }
    return(
        <>
            {getCookieData()}
        </>
    )

    function Table(props){
        return (
            <table className="text-black " >
                <thead>
                <tr>
                    <th className="bg-darkGreen rounded-tl-lg pl-10 pr-10">
                        Location
                    </th>
                    {props.hours.map((time) => (<th className="bg-darkGreen pl-2 pr-2" key={time}>{time}</th>))}
                    <th className="bg-darkGreen rounded-tr-lg pl-4 pr-4">
                        Totals
                    </th>
                </tr>
                </thead>
                <tbody>
                    {props.cookieStoreData.map(store =>(
                    //    this function maps over the cookieStoreData and creates a row with the location name
                    <tr key={store.id} className="odd:bg-mediumGreen even:bg-lightGreen">
                      <td className="pl-2 border border-black bg ">
                        {store.location}
                      </td>
                      {store.hourly_sales.map(sale =>
                      //    this function maps over the hourly_sales array and creates a data cell with the hard-coded hourly sales info
                      <td key={sale} className="pl-2 border border-black ">
                        {sale}
                      </td>
                      )}
                      <td className="pl-2 border border-black ">
                      {store.hourly_sales.reduce((previousValue,currentValue) => previousValue + currentValue, 0)}

                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="pl-2 font-bold border border-black bg-darkGreen">
                      Totals
                    </td>
                    {props.hours.map((hour, idx)=> (
                      <td key ={hour} className="pl-2 font-bold border border-black bg-darkGreen">
                        {props.cookieStoreData.reduce((previousValue,currentValue) => previousValue + currentValue.hourly_sales[idx], 0
                        )}

                      </td>
                    ))}
                    <td className="pl-2 border font-bold border-black bg-darkGreen ">
                      {props.hours.map((hour, idx) => props.cookieStoreData.reduce((previousValue, currentValue) => previousValue + currentValue.hourly_sales[idx],0
                        )
                      ).reduce((previousValue, currentValue)=> previousValue + currentValue,0)
                      }
                    </td>
                  </tr>
                </tbody>
            </table>
        )
    }
}
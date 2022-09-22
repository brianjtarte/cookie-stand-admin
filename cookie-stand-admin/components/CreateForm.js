
export default function CreateForm(props) {

  return(
    <form onSubmit={props.handleCreate} className="w-11/12 px-3 pb-2 mx-auto text-sm text-black rounded-lg bg-lightGreen mt-7">
      <h2 className="p-3 text-xl font-strong text-center">Create Cookie Stand</h2>
        <div className="flex m-2">
          <label className="pr-2">Location</label>
          <input name="location" type="text" className="flex-grow  placeholder-black text-black pl-1 bg-locationColor" placeholder="Barcelona" required></input>
        </div>

        <div className="flex mt-5">
          <div className="w-1/4 p-2 mx-1 my-2 rounded bg-lightGreen">
          <label className="block mx-auto text-center">
            Minimum Customers per Hour
          </label>
          <input name="minCustPerHour" type="text" placeholder="2" className="w-full bg-bodyColor placeholder-black pl-1"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-lightGreen">
          <label className="block mx-auto text-center">
            Maximum Customers per Hour
          </label>
          <input name="maxCustPerHour" type="text" placeholder="4" className="w-full bg-bodyColor pl-1 placeholder-black"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-lightGreen">
          <label className="block text-center ">Average Cookies per Sale</label>
          <input name="avgCookiesPerSale" type="text" placeholder="2.5"
          className="w-full bg-bodyColor pl-1 placeholder-black">

          </input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 bg-darkGreen">
          <button className="w-1/4 mx-1 bg-darkGreen" type="submit">
          Create
          </button>
        </div>
      </div>
    </form>
)
}
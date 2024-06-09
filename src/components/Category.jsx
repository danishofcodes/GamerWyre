import Input from "./Input";

export default function Category({handleChange, handleShowAll}) {
  return (
    <div>
       <h4 className="font-bold my-3 text-left"> Category </h4>
       <div className="mx-2">

       <div className="flex items-center gap-2">
       <input type="radio" name="prodtype"  onChange={handleShowAll} value=""  title="All"/>
        <label htmlFor="cat1" className="font-medium text-gray-900 dark:text-gray-300" >All</label>
        </div>
       <Input value="Gaming Console" handleChange={handleChange} title="Gaming Console" name="prodtype"/>
       <Input value="Gaming Accessories" handleChange={handleChange} title="Gaming Accessories" name="prodtype"/>
       <Input value="Video Game" handleChange={handleChange} title="Video Game" name="prodtype"/>
       {/* <Input value="Gaming Machines" handleChange={handleChange} title="Gaming Machines" name="prodtype"/> */}
       </div>
    </div>
  )
}

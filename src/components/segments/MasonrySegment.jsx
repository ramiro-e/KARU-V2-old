import "../../app/masonry.css"
import Photo from "../partials/Photo";

const MasonrySegment = ({photos}) => {

    

    return(
        <section className="flex justify-center pb-10">
            <div className="grid grid-cols-1 px-5 laptop:grid-cols-3 gap-6 max-w-6xl">
            <div className="grid gap-6 auto-rows-min">
                    {photos.map((photo,index) => {
                        if (index%3 == 0){
                            return <Photo photo={photo} key={index} priority={index <= 3 ? true : false}/>
                        }
                    })}
                </div>
                <div className="grid gap-6 auto-rows-min">
                    {photos.map((photo,index) => {
                        if (index%3 == 1){
                            return <Photo photo={photo} key={index} priority={index <= 3 ? true : false}/>
                        }
                    })}
                </div>
                <div className="grid gap-6 auto-rows-min">
                    {photos.map((photo,index) => {
                        if (index%3 == 2){
                            return <Photo photo={photo} key={index} priority={index <= 3 ? true : false}/>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}


export default MasonrySegment;

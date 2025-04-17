import { Link } from "react-router-dom";
import Couch from "../data/images/couch.png"
import {Button} from "../components/ui/button.tsx";

function Home(){
    return (
        <div className="container mx-auto mt-16">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                {/*Text Section*/}
                <div className="text-center lg:text-left my-8 lg:mt-20 lg:mb-0 lg:w-2/5">
                    <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 lg:text-6xl">Modern Interior Design Studio</h1>
                    <p className="mb-6 lg:mb-8">Furniture is an essential component of any living space,providing
                        functionality, comfort, and aesthetic appeal</p>
                    <div>
                        <Button asChild className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold">
                            <Link to="#">Shop Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base font-bold">
                            <Link to="#">Explore</Link>
                        </Button>
                    </div>
                </div>
                {/*Image Section*/}
                <img src={Couch} alt="Couch" className="w-full lg:w-3/5"/>
            </div>
        </div>
    );
};

export default Home;
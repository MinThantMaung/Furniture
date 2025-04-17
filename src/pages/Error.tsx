import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { Button } from "../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Footer from "../components/layout/Footer.tsx";
import { Icons } from "../components/icons";

function Error() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 items-center mx-auto my-32">
        <Card className="w-[350px] md:w-[500px] lg:w-[500px]">
          <CardHeader className="grid place-items-center gap-2">
              <div className="border border-dashed border-muted-foreground/70 rounded-full size-24
              grid place-items-center mt-2 mb-4">
                  <Icons.exclamationTriangle className="size-10 text-muted-foreground/70" aria-hidden="true" />
              </div>
            <CardTitle>Oops!</CardTitle>
            <CardDescription>
              An Error occurs accidentally!.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
                <Link to="/">Go to Home Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default Error;

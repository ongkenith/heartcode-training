import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import ImgCat from "@/app/assets/img1.png";
import { Alert,AlertTitle,AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react"

export default function aboutme() {
    return (
        <div>
            <Card className="text-center ">
                <CardHeader>
                    <CardTitle>
                        Hello, I am Kenith
                    </CardTitle>
                    <CardDescription>
                            ...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div  className="flex justify-center items-center">
                        <Image src={ImgCat} alt="1"/>
                    </div>
                    <div className="flex flex-row gap-2 justify-center">
                        <p className="font-bold">Name:</p>
                        Kenith
                    </div>
                    <div className="flex flex-row gap-2 justify-center"><p className="font-bold">Major:</p>Information Systems</div>
                    <div className="flex flex-row gap-2 justify-center"><p className="font-bold">Hobbies:</p>I like to code</div>
                </CardContent>
            </Card>
            <Alert>
                <Terminal className="h-4 w-4"/>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        This is an alert
                    </AlertDescription>
            </Alert>
        </div>
    );
  }
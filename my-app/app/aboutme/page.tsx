import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function aboutme() {
    return (
        <div>Hello World, this is the aboutme route
            <Card>
                <CardHeader>
                    <CardTitle>
                        Hello, I am Kenith
                    </CardTitle>
                    <CardDescription>
                            ...
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row gap-2">
                        <p className="font-bold">Name:</p>
                        Kenith
                    </div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
                </CardContent>
            </Card>
        </div>
    );
  }
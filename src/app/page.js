import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="p-10">
      <Card className="w-96">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-xl font-bold">Next + Express Setup</h1>
          <Button>Test Button</Button>
        </CardContent>
      </Card>
    </div>
  )
}
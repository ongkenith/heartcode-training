"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend, 
  ChartLegendContent
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { type: "NEW Drug Abusers", year_2022: 802, year_2023: 952 },
  { type: "TOTAL Drug Abusers", year_2022: 2826, year_2023: 3122 },
  
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  year_2022: {
    label: "Year 2022",
    color: "hsl(var(--chart-1))",
  },
  year_2023: {
    label: "Year 2023",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
    return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">2023 Key Drug Statistics</CardTitle>
        <CardDescription>by CNB Statistics</CardDescription>
      </CardHeader>
      <CardContent>
      <ChartContainer config={chartConfig} className="min-h-[100px] max-w-[80%] m-auto">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="year_2022" fill="var(--color-year_2022)" radius={4} />
          <Bar dataKey="year_2023" fill="var(--color-year_2023)" radius={4} />
        </BarChart>
      </ChartContainer>
      </CardContent>
      <CardDescription className="text-center text-black-500 text-md py-2">
        30% of arrested drug abuser were new abusers<br />
        About 51% of new drug abusers arrested were <span className="font-semibold">BELOW</span> the age of 30
      </CardDescription>
    </Card>
    )
  } 
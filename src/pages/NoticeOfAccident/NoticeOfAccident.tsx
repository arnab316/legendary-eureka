"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Download, Edit } from "lucide-react";

interface AccidentData {
  id: number;
  name: string;
  licenceNo: string;
  place: string;
  date: string;
  shift: string;
  type: string;
  status: string;
  caseId: string;
  submitDate: string;
}

const NoticeOfAccident: React.FC = () => {
  const [search, setSearch] = useState("");
  const [zone, setZone] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  const accidentData: AccidentData[] = [
    {
      id: 1,
      name: "SUGUNA FOODS PVT. LTD.",
      licenceNo: "21870",
      place:
        "Suguna Foods Private Limited, Vill-Jhanjupara, Kanchanjunga Integrated Park, P.O-Fatapukur, P.S-Rajganj, Dist-Jalpaiguri, Pin-7",
      date: "2023-05-19",
      shift: "2pm to 10pm",
      type: "Serious",
      status: "Receiving Cell",
      caseId: "AP2023NA0073",
      submitDate: "20/05/2023 14:09",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-muted/20 px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0c5273]">
            Notice of Accident
          </h1>
          <div className="text-sm text-gray-600 mt-2 sm:mt-0">
            <span className="text-gray-500">Home </span>›{" "}
            <span
              className="text-blue-600 cursor-pointer"
            >
              Dashboard
            </span>
          </div>
        </div>

        {/* Filter Section */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-700">Filter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Label htmlFor="zone" className="text-white font-medium bg-[#4b2a6b] px-14 py-4 ">
                  Zone
                </Label>
                <Select onValueChange={(v) => setZone(v)}>
                  <SelectTrigger className="w-60  text-white border-0 bg-amber-400">
                    <SelectValue placeholder="-Select-" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North</SelectItem>
                    <SelectItem value="south">South</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="ghost"
                className="text-[#4b2a6b] hover:text-[#4b2a6b]/80 font-semibold cursor-pointer shadow-lg"
                onClick={() => {
                  setZone("");
                  setSearch("");
                }}
              >
                Reset
              </Button>
            </div>

            {/* Show & Search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Label className="text-gray-700">Show</Label>
                <Select
                  value={entries.toString()}
                  onValueChange={(v) => setEntries(Number(v))}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    {[10, 25, 50, 100].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-700">entries</span>
              </div>

              <div className="flex items-center gap-2">
                <Label className="text-gray-700">Search:</Label>
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="sm:w-64"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card className="shadow-sm">
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#008080] text-white">
                <TableRow>
                  <TableHead className="w-[5%] text-white">Sl. No.</TableHead>
                  <TableHead className="w-[35%] text-white">
                    Factory Details
                  </TableHead>
                  <TableHead className="w-[15%] text-white">
                    Accident Date
                  </TableHead>
                  <TableHead className="w-[15%] text-white">
                    Type of Accident
                  </TableHead>
                  <TableHead className="w-[20%] text-white">Status</TableHead>
                  <TableHead className="w-[10%] text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accidentData.map((item) => (
                  <TableRow key={item.id} className="bg-white">
                    <TableCell>{item.id}</TableCell>
                    <TableCell className="text-sm">
                      <p>
                        <strong>Name:</strong> {item.name}
                      </p>
                      <p>
                        <strong>Licence No.:</strong> {item.licenceNo}
                      </p>
                      <p>
                        <strong>Place:</strong> {item.place}
                      </p>
                    </TableCell>
                    <TableCell className="text-sm">
                      <p>
                        <strong>Date:</strong> {item.date}
                      </p>
                      <p>
                        <strong>Shift:</strong> {item.shift}
                      </p>
                    </TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell className="text-sm">
                      <p className="text-red-600 font-semibold">
                        {item.status}
                      </p>
                      <p>
                        <strong>Case Identification No.:</strong> {item.caseId}
                      </p>
                      <p>
                        <strong>Submit Date:</strong> {item.submitDate}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 items-center text-blue-600">
                        <Download size={16} />
                        <span className="cursor-pointer">Download</span>
                        <Edit size={16} />
                        <span className="cursor-pointer">View</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-700">
          <p>
            Showing 1 to {accidentData.length} of {accidentData.length} entries
          </p>
          <div className="flex gap-2">
            {["First", "Previous", "1", "Next", "Last"].map((label) => (
              <Button
                key={label}
                variant={label === "1" ? "default" : "outline"}
                size="sm"
                className={
                  label === "1"
                    ? "bg-gray-800 text-white"
                    : "text-gray-800 border-gray-400"
                }
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeOfAccident;

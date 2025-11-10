"use client";
import React, { useState } from "react";
import { factoriesData } from "@/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CrossedOffFactories: React.FC = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // --- Filter logic ---
  const filteredFactories = factoriesData.filter(
    (factory) =>
      factory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      factory.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      factory.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFactories.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentFactories = filteredFactories.slice(startIndex, endIndex);

  const handleFind = () => {
    console.log("Searching from:", fromDate, "to:", toDate);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="w-full min-h-screen bg-muted/20 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c5273]">
          LIST OF CROSSED OFF FACTORIES
        </h1>

        {/* Date Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter by Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label>From Date</Label>
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div>
                <Label>To Date</Label>
                <Input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleFind}
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                >
                  Find
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card>
          <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Label>Show</Label>
              <Select
                value={entriesPerPage.toString()}
                onValueChange={(value) => {
                  setEntriesPerPage(Number(value));
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder={entriesPerPage} />
                </SelectTrigger>
                <SelectContent>
                  {[10, 25, 50, 100].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-600">entries</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Label className="whitespace-nowrap">Search:</Label>
              <Input
                placeholder="Search factory..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="sm:w-64"
              />
            </div>
          </CardContent>
        </Card>

        {/* Table - Desktop */}
        <Card className="hidden lg:block">
          <CardContent className="overflow-x-auto p-0">
            <Table>
              <TableHeader className="bg-cyan-700 text-white">
                <TableRow>
                  <TableHead>Sl. No.</TableHead>
                  <TableHead>Factory Details</TableHead>
                  <TableHead>Communication Details</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentFactories.map((factory, index) => (
                  <TableRow key={factory.id} className="hover:bg-muted/40">
                    <TableCell>{startIndex + index + 1}</TableCell>
                    <TableCell className="space-y-1 text-sm">
                      <p className="font-semibold text-gray-800">
                        {factory.name} [{factory.section}]
                      </p>
                      <p>
                        <strong>Address:</strong> {factory.address}
                      </p>
                      <p>
                        <strong>Zone:</strong> {factory.zone}
                      </p>
                      <p>
                        <strong>Date of Amenability:</strong>{" "}
                        <span className="text-red-600">
                          {factory.dateOfAmenability}
                        </span>
                      </p>
                      <p>
                        <strong>Reg. No.:</strong> {factory.regNo} on{" "}
                        <span className="text-red-600">{factory.regDate}</span>
                      </p>
                      <p>
                        <strong>License No.:</strong> {factory.licenseNo} on{" "}
                        <span className="text-red-600">{factory.licenseDate}</span>
                      </p>
                      <p className="text-red-600 font-semibold">
                        License Expire Date: {factory.licenseExpireDate}
                      </p>
                    </TableCell>

                    <TableCell className="text-sm space-y-1">
                      <p>
                        <strong>Address:</strong>{" "}
                        <span className="text-red-600">
                          {factory.commAddress}
                        </span>
                      </p>
                      <p>
                        <strong>Telephone:</strong>{" "}
                        <span className="text-red-600">
                          {factory.telephone}
                        </span>
                      </p>
                      <p>
                        <strong>Mobile:</strong>{" "}
                        <span className="text-red-600">{factory.mobile}</span>
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <span className="text-red-600">{factory.email}</span>
                      </p>
                    </TableCell>

                    <TableCell>
                      <p className="text-red-600 font-bold text-base">
                        {factory.status}
                      </p>
                      <p className="text-gray-700 text-sm">{factory.statusDate}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {currentFactories.map((factory, index) => (
            <Card key={factory.id}>
              <CardContent className="space-y-3 pt-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-600">
                    Sl. No. {startIndex + index + 1}
                  </span>
                  <div className="text-right">
                    <p className="text-red-600 font-bold">{factory.status}</p>
                    <p className="text-sm text-gray-700">{factory.statusDate}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-cyan-700">
                    {factory.name} [{factory.section}]
                  </p>
                  <p>
                    <strong>Address:</strong> {factory.address}
                  </p>
                  <p>
                    <strong>Zone:</strong> {factory.zone}
                  </p>
                  <p>
                    <strong>License Expire Date:</strong>{" "}
                    <span className="text-red-600">
                      {factory.licenseExpireDate}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Card>
          <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <p className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredFactories.length)} of{" "}
              {filteredFactories.length} entries
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["First", "Prev"].map((label, i) => (
                <Button
                  key={label}
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1 && i === 0}
                  onClick={() =>
                    label === "First"
                      ? setCurrentPage(1)
                      : setCurrentPage((p) => Math.max(1, p - 1))
                  }
                >
                  {label}
                </Button>
              ))}
              {getPageNumbers().map((page) => (
                <Button
                  key={page}
                  size="sm"
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              {["Next", "Last"].map((label, i) => (
                <Button
                  key={label}
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages && i === 1}
                  onClick={() =>
                    label === "Next"
                      ? setCurrentPage((p) => Math.min(totalPages, p + 1))
                      : setCurrentPage(totalPages)
                  }
                >
                  {label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CrossedOffFactories;











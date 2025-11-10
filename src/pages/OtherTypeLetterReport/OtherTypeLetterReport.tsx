import React, { useState } from "react";
import { Eye, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Types
interface LetterReport {
  id: number;
  factoryName: string;
  factoryType: string;
  section: string;
  zone: string;
  licenseNo: string;
  registrationNo: string;
  addressedTo: string;
  subject: string;
  type: string;
  status: string;
  statusDate: string;
}

// Mock Data
const letterReportsData: LetterReport[] = [
  {
    id: 1,
    factoryName: "ABC MANUFACTURING LTD",
    factoryType: "Non-Chemical Factory",
    section: "Section 2m(i)",
    zone: "Kolkata-A",
    licenseNo: "LIC/2024/001",
    registrationNo: "REG/2024/123",
    addressedTo: "Chief Inspector of Factories",
    subject: "Request for Extension of License",
    type: "Letter",
    status: "Pending",
    statusDate: "05th Nov 2025",
  },
  {
    id: 2,
    factoryName: "XYZ INDUSTRIES",
    factoryType: "Chemical Factory",
    section: "Section 6",
    zone: "Howrah-B",
    licenseNo: "LIC/2024/002",
    registrationNo: "REG/2024/456",
    addressedTo: "District Inspector",
    subject: "Annual Inspection Report",
    type: "Report",
    status: "Approved",
    statusDate: "01st Nov 2025",
  },
  {
    id: 3,
    factoryName: "MODERN STEEL WORKS",
    factoryType: "Non-Chemical Factory",
    section: "Section 2m(i)",
    zone: "Jalpaiguri-A",
    licenseNo: "LIC/2024/003",
    registrationNo: "REG/2024/789",
    addressedTo: "Regional Inspector",
    subject: "Safety Compliance Order",
    type: "Order",
    status: "Issued",
    statusDate: "03rd Nov 2025",
  },
];

const OtherTypeLetterReport: React.FC = () => {
  const [factoryName, setFactoryName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [searchResults, setSearchResults] = useState<LetterReport[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const results = letterReportsData.filter((item) => {
      const matchesFactory =
        !factoryName ||
        item.factoryName.toLowerCase().includes(factoryName.toLowerCase());
      const matchesLicense =
        !licenseNo ||
        item.licenseNo.toLowerCase().includes(licenseNo.toLowerCase());
      const matchesRegistration =
        !registrationNo ||
        item.registrationNo
          .toLowerCase()
          .includes(registrationNo.toLowerCase());

      return matchesFactory && matchesLicense && matchesRegistration;
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  const handleReset = () => {
    setFactoryName("");
    setLicenseNo("");
    setRegistrationNo("");
    setSearchResults([]);
    setHasSearched(false);
  };

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "outline";
      case "approved":
        return "default";
      case "issued":
        return "secondary";
      case "rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Home className="w-4 h-4" />
          <span>›</span>
          <Link to="/" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-[#2c3e7a]">
          Other Type of Letter / Report / Order
        </h1>

        {/* Search Form */}
        <Card>
          <CardHeader className="bg-yellow-50 border-l-4 border-yellow-400">
            <CardTitle className="text-blue-700 text-base">
              Search Factory using Factory Name / Licence No. / Registration No.
            </CardTitle>
            <CardDescription>
              You can use any one, two or all three fields to search.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="factoryName">Factory Name</Label>
                <Input
                  id="factoryName"
                  placeholder="Enter Factory Name"
                  value={factoryName}
                  onChange={(e) => setFactoryName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="licenseNo">Licence No.</Label>
                <Input
                  id="licenseNo"
                  placeholder="Enter Licence No."
                  value={licenseNo}
                  onChange={(e) => setLicenseNo(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="registrationNo">Registration No.</Label>
                <Input
                  id="registrationNo"
                  placeholder="Enter Registration No."
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button onClick={handleSearch} className="bg-cyan-600 hover:bg-cyan-700">
                Search
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl. No.</TableHead>
                  <TableHead>Factory Details</TableHead>
                  <TableHead>Addressed To & Subject</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!hasSearched ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                      Please enter search criteria and click Search
                    </TableCell>
                  </TableRow>
                ) : searchResults.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                      No data found!
                    </TableCell>
                  </TableRow>
                ) : (
                  searchResults.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <p className="font-semibold">{item.factoryName}</p>
                        <p className="text-sm text-muted-foreground">
                          [{item.factoryType}] — {item.zone}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm">
                          <strong>To:</strong> {item.addressedTo}
                        </p>
                        <p className="text-sm">
                          <strong>Subject:</strong> {item.subject}
                        </p>
                      </TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(item.status)}>
                          {item.status}
                        </Badge>
                        <div className="text-xs text-gray-500">{item.statusDate}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="link" size="sm" className="text-blue-600">
                            <Eye className="w-4 h-4 mr-1" /> View
                          </Button>
                          <Button variant="link" size="sm" className="text-blue-600">
                            <FileText className="w-4 h-4 mr-1" /> Details
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OtherTypeLetterReport;



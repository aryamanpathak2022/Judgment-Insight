'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Gavel, Search } from "lucide-react"

// Expanded sample data for commercial laws
const commercialLaws = [
  
    { id: 1, name: "Companies Act", date: "1956-01-18", category: "Corporate Law", jurisdiction: "Madras High Court" },
    { id: 2, name: "Securities and Exchange Board of India Act", date: "1992-04-04", category: "Securities Regulation", jurisdiction: "Madras High Court" },
    { id: 3, name: "Companies Act", date: "2013-08-29", category: "Corporate Law", jurisdiction: "Bombay High Court" },
    { id: 4, name: "Competition Act", date: "2002-01-13", category: "Antitrust", jurisdiction: "Bombay High Court" },
    { id: 5, name: "Electronic Commerce Act", date: "2000-05-01", category: "E-Commerce", jurisdiction: "Delhi High Court" },
    { id: 6, name: "Insolvency and Bankruptcy Code", date: "2016-05-28", category: "Insolvency", jurisdiction: "National Company Law Tribunal (NCLT)" },
    { id: 7, name: "Competition Act", date: "2002-01-13", category: "Antitrust", jurisdiction: "National Company Law Appellate Tribunal (NCLAT)" },
    { id: 8, name: "Foreign Exchange Management Act", date: "1999-12-29", category: "Foreign Exchange", jurisdiction: "Delhi High Court" },
    { id: 9, name: "Information Technology Act", date: "2000-06-09", category: "Information Technology", jurisdiction: "Delhi High Court" },
    { id: 10, name: "Consumer Protection Act", date: "2019-08-09", category: "Consumer Protection", jurisdiction: "National Consumer Disputes Redressal Commission (NCDRC)" },
    { id: 11, name: "Goods and Services Tax Act", date: "2017-04-12", category: "Taxation", jurisdiction: "Supreme Court of India" },
    { id: 12, name: "Indian Contract Act", date: "1872-09-01", category: "Commercial Transactions", jurisdiction: "Calcutta High Court" },
    { id: 13, name: "Negotiable Instruments Act", date: "1881-03-01", category: "Banking", jurisdiction: "Bombay High Court" },
    { id: 14, name: "Arbitration and Conciliation Act", date: "1996-01-16", category: "Arbitration", jurisdiction: "Delhi High Court" },
    { id: 15, name: "Trade Marks Act", date: "1999-12-15", category: "Intellectual Property", jurisdiction: "Madras High Court" }
  ];
  


const categories = [...new Set(commercialLaws.map(law => law.category))]
const jurisdictions = [...new Set(commercialLaws.map(law => law.jurisdiction))]

export function LawRepositoryComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('')
  const itemsPerPage = 10

  const filteredLaws = commercialLaws.filter(law =>
    (law.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     law.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     law.jurisdiction.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'all' || law.category === selectedCategory) &&
    (selectedJurisdiction === 'all' || law.jurisdiction === selectedJurisdiction)
  );
  

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentLaws = filteredLaws.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredLaws.length / itemsPerPage)

  return (
    (<div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Gavel className="h-6 w-6" />
            <span className="font-bold text-lg">Judgment Insight</span>
          </div>
         
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Commercial Law Repository</h1>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search laws..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex space-x-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Categories</SelectItem>
    {categories.map((category) => (
      <SelectItem key={category} value={category}>{category}</SelectItem>
    ))}
  </SelectContent>
</Select>

<Select value={selectedJurisdiction} onValueChange={setSelectedJurisdiction}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Jurisdiction" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All Jurisdictions</SelectItem>
    {jurisdictions.map((jurisdiction) => (
      <SelectItem key={jurisdiction} value={jurisdiction}>{jurisdiction}</SelectItem>
    ))}
  </SelectContent>
</Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Jurisdiction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentLaws.map((law) => (
              <TableRow key={law.id}>
                <TableCell className="font-medium">{law.name}</TableCell>
                <TableCell>{new Date(law.date).toLocaleDateString()}</TableCell>
                <TableCell>{law.category}</TableCell>
                <TableCell>{law.jurisdiction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>)
  );
}
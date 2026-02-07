import React, { useState } from 'react';
import { Receipt, Download, Send, User, MapPin, Phone, Mail } from 'lucide-react';
import "./InvoiceGenerator.css";

const InvoiceGenerator = () => {
  const [invoice, setInvoice] = useState({
    invoiceNo: "INV-2026-089",
    date: "07 Feb 2026",
    studentName: "Rahul Verma",
    studentEmail: "rahul.v@example.com",
    course: "Full Stack Development",
    totalFees: 45000,
    paid: 15000,
    discount: 2000
  });

  // Strict Calculation Logic
  const subtotal = invoice.totalFees - invoice.discount;
  const balance = invoice.totalFees - invoice.paid - invoice.discount;

  const handlePrint = () => {
    window.print(); // Professional way to trigger PDF save/print
  };

  return (
    <div className="invoice-container">
      <div className="invoice-controls no-print">
        <button className="action-btn download" onClick={handlePrint}>
          <Download size={18}/> Save as PDF
        </button>
        <button className="action-btn send">
          <Send size={18}/> Send to Email
        </button>
      </div>

      <div className="invoice-paper glass-effect" id="printable-invoice">
        {/* --- Header Section --- */}
        <div className="invoice-top">
          <div className="brand">
            <div className="logo-icon"><Receipt size={32} /></div>
            <div>
              <h2>EDUTECH LMS</h2>
              <p>Knowledge Beyond Boundaries</p>
            </div>
          </div>
          <div className="meta-info">
            <h1>INVOICE</h1>
            <p><strong>No:</strong> {invoice.invoiceNo}</p>
            <p><strong>Date:</strong> {invoice.date}</p>
          </div>
        </div>

        <hr className="divider" />

        {/* --- Billing Section --- */}
        <div className="billing-section">
          <div className="bill-to">
            <span className="section-label">BILL TO:</span>
            <h3>{invoice.studentName}</h3>
            <p><Mail size={14} /> {invoice.studentEmail}</p>
            <p><User size={14} /> {invoice.course}</p>
          </div>
          <div className="institute-from">
            <span className="section-label">FROM:</span>
            <h3>EduTech Academy</h3>
            <p><MapPin size={14} /> 102 Cyber Hub, Surat, India</p>
            <p><Phone size={14} /> +91 98765 43210</p>
          </div>
        </div>

        {/* --- Table Section --- */}
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-right">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Course Enrollment Fee</strong><br />
                <small>{invoice.course} - 6 Months Certification</small>
              </td>
              <td className="text-right">₹{invoice.totalFees.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        {/* --- Summary Section --- */}
        <div className="invoice-summary">
          <div className="summary-left">
            <div className="status-stamp overdue">PARTIAL PAID</div>
            <p className="note"><strong>Note:</strong> Fees once paid are non-refundable as per policy.</p>
          </div>
          <div className="summary-right">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{invoice.totalFees.toLocaleString()}</span>
            </div>
            <div className="summary-row text-blue">
              <span>Discount:</span>
              <span>- ₹{invoice.discount.toLocaleString()}</span>
            </div>
            <div className="summary-row text-green">
              <span>Paid Amount:</span>
              <span>- ₹{invoice.paid.toLocaleString()}</span>
            </div>
            <div className="summary-row grand-total">
              <span>Remaining Balance:</span>
              <span>₹{balance.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="invoice-footer">
          <p>This is a computer-generated invoice and does not require a physical signature.</p>
          <div className="signature-area">
            <div className="sign-line"></div>
            <span>Authorized Signatory</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
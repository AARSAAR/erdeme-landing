"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function PreOrder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/pre-order`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phone.startsWith("+976")
            ? formData.phone
            : `+976${formData.phone}`,
        }
      );

      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setError("");
    } catch (err) {
      console.error("Error:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Алдаа гарлаа");
      } else {
        setError("Сервертэй холбогдоход алдаа гарлаа");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Багшаар бүртгүүлэх</h1>
            <p className="text-xl text-gray-400">
              Энэ нь урьдчилсан бүртгэл бөгөөд, нээлт хийсэн даруйд тантай доорх
              мэдээллээр холбогдох болно
            </p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            {success ? (
              <div className="text-center">
                <div className="text-green-500 mb-4">
                  Амжилттай бүртгэгдлээ!
                </div>
                <Link
                  href="/"
                  className="btn text-white bg-purple-600 hover:bg-purple-700 rounded-lg"
                >
                  Нүүр хуудас руу буцах
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="firstName"
                    >
                      Нэр <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="Таны нэр"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="lastName"
                    >
                      Овог <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="Таны овог"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Имэйл <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="example@gmail.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-300 text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Утасны дугаар <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input w-full text-gray-300 rounded-lg"
                      placeholder="99999999"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button
                      disabled={isSubmitting}
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full rounded-lg !important"
                    >
                      <span className="block w-full text-center">
                        {isSubmitting ? "Түр хүлээнэ үү..." : "Бүртгүүлэх"}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

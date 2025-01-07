import { zigzagItems } from "@/data/zigzagItems";
import ZigzagItem from "@/components/zigzagItem";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Зорилгодоо хүр
            </div>
            <h1 className="h2 mb-4">Бүтээгдэхүүн</h1>
            <p className="text-xl text-gray-400">
              Та дараах дарааллаар сургалт авах боломжтой бөгөөд энэ нь таныг
              бүх шаардлагатай мэдлэг, ур чадварыг эзэмшихэд туслах болно.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {zigzagItems.map((item, index) => (
              <ZigzagItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

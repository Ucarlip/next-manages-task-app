import logoimg from "@/assets/logo.png";
import FooterSAU from "@/components/FooterSAU";
import Image from "next/image";
import Link from "next/link";
 
export default function Page() {
  return (
    <>
      <div className="w-3/5 mt-20 p-10 shadow-xl mx-auto border border-gray-400 rounded-xl flex flex-col justify-center items-center">
        {/* แสดงรูปจาก Internet */}
        <Image src={logoimg} alt="logo" width={150} height={150} />
        {/* แสดงชื่อแอปฯ + การทำงาน */}
        <h1 className="mt-5 text-2xl font-bold text-gray-700">
          Manage Task App
        </h1>
        <h1 className="mt-3 text-lg text-gray-700">แก้ไขงาน </h1>
 
        {/* ส่วนของการป้อนงาน และรายละเอียดงาน*/}
        <div className="w-full mt-5  flex flex-col">
          <h1>ชื่องาน</h1>
          <input
            type="text"
            className="p-2 border border-gray-700 rounded mt-1 mb-2"
          />
          <h1>รายละเอียดงาน</h1>
          <textarea
            className="p-2 border border-gray-700 rotate mt-1 mb-2"
            rows={4}
          ></textarea>
        </div>
        {/* ส่วนเลือกรูป*/}
        <div className="w-full mt-5 flex flex-col">
          <h1>อัปโหลดรูป</h1>
          <input
            id="selsctImage"
            type="file"
            accept="image"
            className="hidden"
          />
          <label
            htmlFor="selsctImage"
            className="px-1 py-2 bg-blue-600 text-white rotate mt-1 mb-2 w-30 text-center"
          >
            เลือกรูป
          </label>
          {/* แสดงรูป*/}
        </div>
        {/*ส่วนเลือกสถานะงาน*/}
        <div className="w-full mt-5 flex flex-col">
          <h1>สถานะงาน</h1>
          <select className="p-2 border border-gray-700 rotate mt-1 mb-2">
            <option value="1">✔ เสร็จแล้ว</option>
            <option value="0">❌ ยังไม่เสร็จ</option>
          </select>
        </div>
        {/*ส่วนปุ่มบันทึกงานใหม่ */}
        <button className="w-full px-4 py-4 bg-green-500 text-white hover:bg-green-600 rounded mt-5">
          บันทึกงานใหม่
        </button>
 
        {/* ส่วนปุ่มกลับไปหน้า / showalltask*/}
        <Link href={"/showalltask"} className="mt-3 text-blue-500">
          กลับไปหน้าแสดงทั้งหมด
        </Link>
 
        {/* ส่วนของ Footer */}
        <FooterSAU />
      </div>
    </>
  );
}
 
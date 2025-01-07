import Calendar from "@/public/images/calendar.png";
import Home from "@/public/images/home.png";
import TaskerPicker from "@/public/images/teacher-picker.png";
import Lessons from "@/public/images/lessons.png";
import TaskerProfile from "@/public/images/tasker-profile.png";
import Profile from "@/public/images/profile.png";

interface ZigzagItem {
  number: string;
  title: string;
  description: string;
  image: any;
  listItems: string[];
  isReversed?: boolean;
}

export const zigzagItems: ZigzagItem[] = [
  {
    number: "1",
    title: "Нүүр хуудас",
    description:
      "Энэхүү хэсгээс та өөрийн сонирхож буй сэдвийг болон сургалтын төрөл, түвшинг сонгох боломжтой. Энэ нь таныг хэрэгцээтэй мэдээлэл, сургалт авахад илүү хялбар болгох бөгөөд дараах сонголтуудаас тохиромжтойг сонгоно.",
    image: Home,
    listItems: ["1-5 дугаар анги", "6-9 дүгээр анги", "10-12 дугаар анги"],
  },
  {
    number: "2",
    title: "Багш сонгох хэсэг",
    description:
      "Таны сонгосон хичээлийг заадаг багш нар гарч ирэх бөгөөд та эндээс багшийнхаа үнэлгээ, мэдээлэл, үнийг харгалзан сонгох боломжтой.",
    image: TaskerPicker,
    listItems: ["Найдвартай", "Мэдээлэл нь ил"],
    isReversed: true,
  },
  {
    number: "3",
    title: "Цагаа сонгох",
    description:
      "Та багшийн боломжтой сул цагаас сонгон төлбөрөө хийж баталгаажуулна.",
    image: TaskerProfile,
    listItems: ["Хурдан", "Цэгцтэй", "Үр дүнтэй"],
  },
  {
    number: "4",
    title: "Хичээлүүд",
    description:
      "Уулзалт орох Google Meet Link үүсэх ба тухайн цагтаа хичээл эхлэх болно.",
    image: Lessons,
    listItems: [],
    isReversed: true,
  },
  {
    number: "5",
    title: "Хуанли",
    description:
      "Багш нар өөрийн гэсэн хуанлигаа хянаж явах боломжтойгоос гадна хичээл орох сул цагуудаа нэмж өгнө.",
    image: Calendar,
    listItems: [],
  },
  {
    number: "6",
    title: "Данс",
    description:
      "Багш нарт зориулсан орлогоо хянах, татаж авах хэсэг",
    image: Profile,
    listItems: ["Хялбар", "Ойлгомжтой"],
    isReversed: true,
  },
];

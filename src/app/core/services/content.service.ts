import { Injectable } from '@angular/core';
import { Member } from 'src/app/shared/components/member-list-item/member-list-item.component';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}
  public boardAdvisor: Member[] = [
    {
      displayName: 'Ш.Байгалмаа',
      represent: 'Оюу Толгой ХХК',
    },
    {
      displayName: 'З.Сугармаа',
      represent: 'Энержи Ресурс ХХК',
    },
    {
      displayName: 'Г.Сурахбаяр',
      represent: 'Зөвлөх',
    },
    {
      displayName: 'Б.Сүнжидмаа',
      represent: 'Геологи, АМГТГ',
    },
    {
      displayName: 'С.Хандмаа',
      represent: 'Олборлох, МАК ХХК',
    },
    {
      displayName: 'Б.Мэндбаяр',
      represent: 'Олборлох, АМЕП',
    },
    {
      displayName: 'Ч.Анун',
      represent: 'Бодлогын, УУХҮЯ ',
    },
    {
      displayName: 'И.Ганцэцэг',
      represent: 'Олборлох, Монросцветмет',
    },
    {
      displayName: 'Оюунтөгс',
      represent: 'Газрын тос, ШУТИС',
    },
    {
      displayName: 'Т.Чимэгсанаа',
      represent: 'Хүнд үйлдвэр, УУХҮЯ',
    },
    {
      displayName: 'Б.Отгонбаяр',
      represent: 'Олборлох, УБЭҮ',
    },
    {
      displayName: 'Б.Хэрлэнчимэг',
      represent: 'Олборлох, Багануур ХК',
    },
    {
      displayName: 'Ш.Солонго',
      represent: 'Жендэрийн зөвлөх',
    },
    {
      displayName: 'Д.Энхжаргал',
      represent: 'Зөвлөх',
    },
    {
      displayName: 'Б.Дэлгэрмаа',
      represent: 'Хараат бус судлаач',
    },
    {
      displayName: 'Н.Баярсайхан',
      represent: 'ИНБ, хараат бус судлаач',
    },
  ];
  public boardExecute: Member[] = [
    {
      displayName: 'Октябрийн ТУЯА',
      represent: 'ЭБЭХ ТББ-ын УЗ-ийн дарга',
      image: '../../../assets/images/people/tuya.jpg'
    },
    {
      displayName: 'Мижиддорж ЭНХЖАРГАЛ',
      represent: 'АМГТГазрын дарга',
    },
    {
      displayName: 'Чулуунбат ЭНХТУЯА',
      represent: 'Геологийн Эмэгтэйчүүдийн Холбооны гүйцэтгэх захирал',
    },
    {
      displayName: 'Отгонбаатар УНДРАХГЭРЭЛ',
      represent: 'Эрдэнэс ТТ ХХК-ийн хуулийн мэргэжилтэн',
    },
    {
      displayName: 'Батын ТУЯА',
      represent: 'Эрдэнэс Монгол ХХК-ийн санхүүгийн мэргэжилтэн',
    },
    {
      displayName: 'Б.БАЯЛАГМАА',
      represent: 'Эрдэнэт УБҮ ТӨҮГ',
    },
    {
      displayName: 'П.ЦЭЦЭГМАА',
      represent: 'Энержи ресурс ХХК',
    },
    {
      displayName: 'А.САРАНЦЭЦЭГ',
      represent: 'ТИЙСС ХХК',
    },
    {
      displayName: 'Ч.ХАНДСҮРЭН',
      represent: 'АМГТГ',
    },
    {
      displayName: 'Д.ГАНЧИМЭГ',
      represent: 'Багануур ХК',
    },
    {
      displayName: 'ТҮМЭНГЭРЭЛ',
      represent: 'Хараат бус гишүүн',
    },
    {
      displayName: 'Б.Хэрлэнчимэг',
      represent: 'Олборлох, Багануур ХК',
    },
    {
      displayName: 'Ш.Солонго',
      represent: 'Жендэрийн зөвлөх',
    },
    {
      displayName: 'Д.Энхжаргал',
      represent: 'Зөвлөх',
    },
    {
      displayName: 'Б.Дэлгэрмаа',
      represent: 'Хараат бус судлаач',
    },
    {
      displayName: 'Н.Баярсайхан',
      represent: 'ИНБ, хараат бус судлаач',
    },
  ];
}

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Member } from 'src/app/shared/components/member-list-item/member-list-item.component';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(public db: AngularFirestore) {}
  public images = {
    story_nobg: '../../../assets/images/story_nobg.png',
    story_tree: '../../../assets/images/story_tree_nobg.png'
  };
  public boardAdvisor: Member[] = [
    {
      displayName: 'Ш.Байгалмаа',
      represent: 'Олборлох салбар',
    },
    {
      displayName: 'Н.Дорждарь',
      represent: 'Байгалийн баялгийн засаглал',
    },
    {
      displayName: 'Д.Цэцэн',
      represent: 'Менежментийн зөвлөх',
    },
    {
      displayName: 'Г.Сурахбаяр',
      represent: 'Эрх зүйч',
    },
    {
      displayName: 'Б.Мэндбаяр',
      represent: 'Эрсдэлийн удирдлага',
    },
    {
      displayName: 'Ч.Анун',
      represent: 'УУХҮЯ',
    },
    {
      displayName: 'Т.Чимэгсанаа',
      represent: 'Хүнд үйлдвэр',
    },
    {
      displayName: 'Ш.Солонго',
      represent: 'Жендэрийн мэргэшсэн зөвлөх',
    },
    {
      displayName: 'Б.Батцэнгэл',
      represent: 'Боловсрол',
    },
    {
      displayName: 'Ц.Мөнхтуяа',
      represent: 'Системийн удирдлага',
    },
    {
      displayName: 'Б.Дэлгэрмаа',
      represent: 'Дата удирдлага',
    },
    {
      displayName: 'Д.Тэгшбаяр',
      represent: 'Засаглалын зөвлөх',
    },
    {
      displayName: 'Б.Уянга',
      represent: 'Геологийн салбар',
    },
    {
      displayName: 'Н.Баярсайхан',
      represent: 'ИНБ, хараат бус судлаач',
    },
    {
      displayName: 'Пүрэв',
      represent: 'Газрын тосны салбар',
    },
  ];
  public boardExecute: Member[] = [
    {
      displayName: 'Октябрийн ТУЯА',
      represent: 'ЭБЭХ ТББ-ын УЗ-ийн дарга',
      image: '../../../assets/images/people/tuya.jpg',
    },
    // {
    //   displayName: 'Мижиддорж ЭНХЖАРГАЛ',
    //   represent: 'АМГТГазрын дарга',
    // },
    {
      displayName: 'Чулуунбат ЭНХТУЯА',
      represent: 'Геологийн Эмэгтэйчүүдийн Холбоо НҮТББ',
    },
    // {
    //   displayName: 'Отгонбаатар УНДРАХГЭРЭЛ',
    //   represent: 'Эрдэнэс ТТ ХХК-ийн хуулийн мэргэжилтэн',
    // },
    // {
    //   displayName: 'Батын ТУЯА',
    //   represent: 'Эрдэнэс Монгол ХХК-ийн санхүүгийн мэргэжилтэн',
    // },
    // {
    //   displayName: 'Б.БАЯЛАГМАА',
    //   represent: 'Эрдэнэт УБҮ ТӨҮГ',
    // },
    // {
    //   displayName: 'П.ЦЭЦЭГМАА',
    //   represent: 'Энержи ресурс ХХК',
    // },
    // {
    //   displayName: 'А.САРАНЦЭЦЭГ',
    //   represent: 'ТИЙСС ХХК',
    // },
    {
      displayName: 'Ч.ХАНДСҮРЭН',
      represent: 'Олон нийттэй харилцах',
    },
    {
      displayName: 'Д.ГАНЧИМЭГ',
      represent: 'Хөдөлмөрийн харилцааны эрх зүйч',
    },
    // {
    //   displayName: 'ТҮМЭНГЭРЭЛ',
    //   represent: 'Хараат бус гишүүн',
    // },
    // {
    //   displayName: 'Б.Хэрлэнчимэг',
    //   represent: 'Олборлох, Багануур ХК',
    // },
    // {
    //   displayName: 'Ш.Солонго',
    //   represent: 'Жендэрийн зөвлөх',
    // },
    // {
    //   displayName: 'Д.Энхжаргал',
    //   represent: 'Зөвлөх',
    // },
    // {
    //   displayName: 'Б.Дэлгэрмаа',
    //   represent: 'Хараат бус судлаач',
    // },
    // {
    //   displayName: 'Н.Баярсайхан',
    //   represent: 'ИНБ, хараат бус судлаач',
    // },
  ];
  public contacts: any[] = [
    {
      icon: 'mail',
      label: 'women.mrm@gmail.com',
    },
    {
      icon: 'phone',
      label: '+976 99088018',
    },
  ];
  getConferenceDetail(year: string): Observable<any> {
    return this.db.collection('conferences').doc(year).valueChanges();
  }
}

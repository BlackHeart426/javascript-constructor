import image from './assets/image.png'
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/block'
import {css} from "./utils";

export const model = [
  new TitleBlock('Конструктор сайтов на чистои JavaScript', {
    tag: 'h3',
    styles: css({
      background: '#63a7f0',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    })
  }),
  new ImageBlock(image, {
    alt: 'my image',
    imageStyles: 'width: 100%; height: auto'
  }),
  new TextBlock('Новости недели', {
    styles: css({
      background: '#fafaff',
      color: 'black',
      'text-align': 'center',
      padding: '10px'
    })
  }),
  new TextColumnsBlock([
    'Ninja поставил 420 069 долларов на аукционе для получения собственного скина в Fall Guys',
    'Отличный перезапуск или просто ностальгический трюк? Мнения критиков о новой Battletoads разделились ',
    'Epic Games обозначила примерную дату начала продаж PS5 и Xbox Series X'
  ], {
    styles: css({
      background: '#fafaff',
      color: 'black',
      padding: '1rem'
    })
  }),
]

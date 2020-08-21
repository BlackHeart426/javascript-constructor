import image from './assets/image.png'

export const model = [
  {type: 'title', value: 'Конструктор сайтов на чистои JavaScript', options: {
    tag: 'h3',
    styles: 'background: #63a7f0; color: #fff; text-align: center; padding: 1.5rem'
  }},
  {type: 'image', value: image, options: {
    alt: 'my image',
    imageStyles: 'width: 100%; height: auto'
  }},
  {type: 'text', value: 'Новости недели', options: {
    styles: 'background: #fafaff; color: black; padding: 10px'
  }},
  {type: 'textColumns', value: [
    'Ninja поставил 420 069 долларов на аукционе для получения собственного скина в Fall Guys',
    'Отличный перезапуск или просто ностальгический трюк? Мнения критиков о новой Battletoads разделились ',
    'Epic Games обозначила примерную дату начала продаж PS5 и Xbox Series X'
  ], options: {
    styles: 'background: #fafaff; padding: 1rem'
  }}
]

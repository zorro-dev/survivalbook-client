import {ArticleItemType} from "../constants";

const URL = "https://n1s2.hsmedia.ru/50/89/ba/5089bafe4ae7e3099fd09b84a6a83370/690x380_0x0a330c2a_17935579201587645964.jpeg"

 export const fakeArticle =  [
        {type: ArticleItemType.Header, value: 'Заголовок', number: Date.now() - 1},
        {type: ArticleItemType.Paragraph, value: 'Параграф с текстом', number: Date.now() + 2},
        {
            type: ArticleItemType.Image,
            value: 'https://n1s2.hsmedia.ru/50/89/ba/5089bafe4ae7e3099fd09b84a6a83370/690x380_0x0a330c2a_17935579201587645964.jpeg',
            number: Date.now() + 15
        },
        {
            type: ArticleItemType.MarkList,
            value: [
                {number: Date.now() + 500, value: 'Маркированный список 1'},
                {number: Date.now() + 501, value: 'Маркированный список 2'},
                {number: Date.now() + 502, value: 'Маркированный список 3'},
                {number: Date.now() + 503, value: 'Маркированный список 4'},
            ],
            number: Date.now() + 17
        },
        {
            type: ArticleItemType.NumberList,
            value: [
                {number: Date.now() + 600, value: 'Нумерованный список 1'},
                {number: Date.now() + 601, value: 'Нумерованный список 2'},
                {number: Date.now() + 602, value: 'Нумерованный список 3'},
                {number: Date.now() + 603, value: 'Нумерованный список 4'},
            ],
            number: Date.now() + 567
        },
        {
            type: ArticleItemType.ImageSlider,
            value: [
                {number: Date.now() + 700, value: URL},
                {number: Date.now() + 701, value: URL},
                {number: Date.now() + 702, value: URL},
                {number: Date.now() + 703, value: URL},
            ],
            number: Date.now() + 25
        },
    ]
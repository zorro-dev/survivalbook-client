import React from 'react';
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {ArticleItemType} from "../constants";
import Header from "./elements/Header";
import Paragraph from "./elements/Paragraph";
import ImageItem from "./elements/ImageItem";
import MarkedList from "./elements/MarkedList";
import NumberList from "./elements/NumberList";
import ImageSlider from "./elements/ImageSlider";

const ArticleColumn = observer(({article, articleItems}) => {

    const renderItem = (item) => {
        console.log("render")
        if (item.type === ArticleItemType.Header) {
            return <Header element={item}/>
        } else if (item.type === ArticleItemType.Paragraph) {
            return <Paragraph element={item}/>
        } else if (item.type === ArticleItemType.Image) {
            return <ImageItem element={item}/>
        } else if (item.type === ArticleItemType.NumberList) {
            return <NumberList element={item}/>
        } else if (item.type === ArticleItemType.MarkList) {
            return <MarkedList element={item}/>
        } else if (item.type === ArticleItemType.ImageSlider) {
            return <ImageSlider element={item}/>
        }
    }

    const getListStyle = () => ({
        background: "white",
        padding: 8,
        width: "90%",
        marginBottom: 200
    });

    const renderArticleItems = () => {
        return articleItems.length !== 0 ? articleItems.map((item, index) => (
            <div>
                {renderItem(item, index)}
            </div>
        )) : renderEmptyState()
    }

    const renderEmptyState = () => {
        return 'Статья пустая'
    }

    return (
        <Card className="d-flex justify-content-center align-items-center w-100"
              style={{border: "none", outline: "none", display: "inline"}}>

            <div className="article_items" id="article_items"
                 style={getListStyle()}>
                {renderArticleItems()}
            </div>
        </Card>

    )
});


export default ArticleColumn;

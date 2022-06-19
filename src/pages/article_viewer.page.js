import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import { Container, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchArticle} from "../http/articleApi";
import ArticleColumn from "../component/ArticleColumn";
import {ArticleItemType} from "../constants";

const ArticleViewer = observer(() => {

    const {id} = useParams()

    const [articleItems, setArticleItems] = useState([])
    const [article, setArticle] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('articleId: ' + id)
        if (id) {
            fetchArticle(id).then(article => {
                console.log("открыта статья " + article)
                const content = JSON.parse(article.content)
                setArticle(article)
                setArticleItems(content)
            }).catch(reason => {
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(false)
            console.log("Статьи не сущ")
        }
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <ArticleColumn articleItems={articleItems} setArticleItems={setArticleItems}/>
        </Container>
    );
});

export default ArticleViewer;

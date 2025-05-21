import { Article } from "./types";

export const getAllArticles = async ():Promise<Article[]> => {
    const res = await fetch('http://localhost:3001/posts', {cache: 'no-store'});

    if (!res.ok) {
        throw new Error('データの取得に失敗しました');
    }

    const articles = await res.json();
    return articles;
}

export const getDetailArticle = async (id: string):Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {next: {revalidate: 60}});

    if (!res.ok) {
        throw new Error('データの取得に失敗しました');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const article = await res.json();
    return article;
}

export const createArticle = async (
    id: string,
    title: string,
    content: string,
):Promise<Article> => {
    const currentDatetime = new Date().toISOString();

    const res = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            title,
            content,
            createAt: currentDatetime,
        }),
    });
    
    if (!res.ok) {
        throw new Error('データの作成に失敗しました');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const article = await res.json();
    return article;
}

export const deleteArticle = async (id: string):Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error('データの削除に失敗しました');
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const deletedArticle = await res.json();
    return deletedArticle;
}

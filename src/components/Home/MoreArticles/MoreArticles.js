import React from 'react';
import news1 from '../../../images/news1.jpg'
import news2 from '../../../images/news2.jpg'
import news3 from '../../../images/news3.jpg'
import MoreArticleDetails from '../MoreArticleDetails/MoreArticleDetails';

const ArticleDetails= [
    {
        title: 'Why Helsinki is also worth a visit in winter',
        img: news1,
        description: 'welcome to Helsinki in winter! Chances are you are one those people who, when in a'
    },
    {
        title: 'Health News: Ten reasons why cycling is (really) good for you',
        img: news2,
        description: 'Nowadays, every child knows that cycling is good for health. But how exactiy is it '
    },
    {
        title: 'Displaying local bicycle campaigns in the Bike Citizens app',
        img: news3,
        description: 'Information on bike events can now be added to the Bike Citizens app.'
    }
]

const MoreArticles = () => {
    return (
        <div>
            <div className=''>
                <h3 className="text-danger">More interesting articles...</h3>
            </div>
            <div className="row">
                {
                    ArticleDetails.map(articles => <MoreArticleDetails articles={articles}></MoreArticleDetails>)
                }
            </div>
        </div>
    );
};

export default MoreArticles;
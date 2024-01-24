const quotes = [
    {
        id: 1,
        quote: "Nothing tastes as good as skinny feels.",
        author: 'Kate Moss',
        img: 'https://i.stack.imgur.com/8ctbL.jpg'
    },
    {
        id: 2,
        quote: "I definitely want Brooklyn to be christened, but I don't know into what religion yet.",
        author: 'David Beckham',
        img: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/david_beckham_lead-434102.jpg?r=1686998680160'
    },
    {
        id: 3,
        quote: "Smoking kills. If you're killed, you've lost a very important part of your life.",
        author: 'Brooke Shields',
        img: 'https://wallpapers.com/images/hd/brooke-shields-black-and-white-sh8uf4dbaphodnah.jpg'
    },
    {
        id: 4,
        quote: "I couldn't care less if they [the media] say I'm pregnant with twins by my brother.",
        author: 'Kim Kardashian',
        img: 'https://m.media-amazon.com/images/I/61NU6np-GfL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: 5,
        quote: "I have a swagger coach that helps me and teaches me different swaggerific things to do… He has helped me with my style and just putting different pieces together and being able to layer and stuff like that",
        author: 'Justin Bieber',
        img: 'https://i.pinimg.com/originals/42/f3/9b/42f39b8447533c6a830448870f14e5fe.jpg'
    },
    {
        id: 6,
        quote: "I think that the film [Clueless] was very deep. I think it was deep in the way that it was very light. I think lightness has to come from a very deep place if it's true lightness.",
        author: 'Alicia Silverstone',
        img: 'https://assets.playbill.com/head-shots/3e39ff5bbb990be954b43241367ad2e8-Alicia-Silverstone.jpg'
    },
    {
        id: 7,
        quote: "I am on a drug. It's called Charlie Sheen. It's not available because if you try it once, you will die. Your face will melt off and your children will weep over your exploded body.",
        author: 'Charlie Sheen',
        img: 'https://i.pinimg.com/736x/fa/44/09/fa440963ced060e6eca5f63a6046cd22.jpg'
    },
    {
        id: 8,
        quote: "Kanye West is the biggest piece of shit on earth. Quote Me.",
        author: 'P!nk',
        img: 'https://cdn.artphotolimited.com/images/5fe9fba6bd40b826eea25e0a/1000x1000/le-portrait-de-la-chanteuse-pink.jpg'
    },
    {
        id: 9,
        quote: "This week's celeb news takeaway: she who comes closest to showing the actual inside of her vagina is most popular. #stopactinglikewhores",
        author: 'Rashida Jones',
        img: 'https://m.media-amazon.com/images/M/MV5BNDYwNTczM2EtOTMwZi00MTE1LTk3MWMtNTc1NGE5YTliMTNlXkEyXkFqcGdeQXVyMTU3NTQyMTg@._V1_.jpg'
    },
    {
        id: 10,
        quote: "I just want one day off when I can go swimming and eat ice cream and look at rainbows.",
        author: 'Mariah Carey',
        img: 'https://i.pinimg.com/474x/b9/e3/b7/b9e3b7a14a2f312c0bfe603548f844d1.jpg'
    },
    {
        id: 11,
        quote: "I've just gone through so much in my life that pulling my top up just doesn't seem like that big of a deal.",
        author: 'Nicole Richie',
        img: 'https://i.dailymail.co.uk/i/pix/2012/03/02/article-0-11FD1417000005DC-146_634x864.jpg'
    },
    {
        id: 12,
        quote: "I'm thinking of buying a monkey. Then I think, 'Why stop at one?' I don't like being limited in that way. Therefore, I'm considering a platoon of monkeys. So that people will look at me and see how mellow and well-adjusted I am compared to these monkeys throwing feces around.",
        author: 'Robert Downey Jr.',
        img: 'https://californiamuseum.org/wp-content/uploads/robertdowneyjr_cahalloffameinductee.png'
    },
    {
        id: 13,
        quote: "I'm prouder of my weight loss than my Oscar!",
        author: 'Jennifer Hudson',
        img: 'https://www.billboard.com/wp-content/uploads/media/jennifer-hudson-650-430.jpg?w=650'
    },
    {
        id: 14,
        quote: "I love the smell of diapers; I even like when they're wet and you smell them all warm liked a baked good. I love the smell of Balmex. Love it.",
        author: 'Sarah Jessica Parker',
        img: 'https://assets.playbill.com/head-shots/2bfc85f6430e06980db0e72adcf179fd-sarah-jessica-parker.jpg'
    },
    {
        id: 15,
        quote: "I am who I am. I can't pretend to be somebody who makes $25,000 a year.",
        author: 'Gwyneth Paltrow',
        img: 'https://i.pinimg.com/originals/e8/64/e7/e864e77dc892d2ca8681a298fe2bc7c4.jpg'
    },
    {
        id: 16,
        quote: "I think MTV should consider using subtitles. Half the time, even I can't understand what the fuck I'm talking about.",
        author: 'Ozzy Osbourne',
        img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/9-ozzy-osbourne-martyn-goodacre.jpg'
    },
    {
        id: 17,
        quote: "Kate Middleton has a nice silhouette and she is the right girl for that boy. I like that kind of woman, I like romantic beauties. On the other hand, her sister struggles. I don't like the sister's face. She should only show her back.",
        author: 'Karl Lagerfeld',
        img: 'https://images.squarespace-cdn.com/content/v1/5bbb8e00b7c92c6de2e25726/1550776574006-PXCXJNVMYTW4YLALP0LO/Karl-Lagerfeld-self-portrait.jpg'
    },
    {
        id: 18,
        quote: "Visiting my mind is like visiting the Hermès factory. Shit is real.",
        author: 'Kanye West',
        img: 'https://i.pinimg.com/originals/ec/29/16/ec2916aa4bc8a5dae97bf76f92fae176.jpg'
    },
    {
        id: 19,
        quote: "I am my own experiment. I am my own work of art.",
        author: 'Madonna',
        img: 'https://i.ebayimg.com/images/g/t~AAAOSwmEtjjLSo/s-l1600.jpg'
    },
    {
        id: 20,
        quote: "I don't know if this is too much…but I can actually mentally give myself an orgasm.",
        author: 'Lady Gaga',
        img: 'https://pbs.twimg.com/media/EExLV2uUwAAI3x-.jpg:large'
    },
    {
        id: 21,
        quote: "When you think about it, we actors are kind of prostitutes.",
        author: 'Megan Fox',
        img: 'https://i.pinimg.com/originals/99/a5/ac/99a5acffd0da96e244d6f7ece04a34cf.jpg'
    },
    {
        id: 22,
        quote: "So, where's the Cannes Film Festival being held this year?",
        author: 'Christina Aguilera',
        img: 'https://i.ebayimg.com/images/g/~5wAAOSwKupZzo6r/s-l1200.webp'
    },
    {
        id: 23,
        quote: "I get to go to lots of overseas places, like Canada.",
        author: 'Britney Spears',
        img: 'https://i.pinimg.com/originals/37/38/f1/3738f1ba347ba9cc95fedd3d9b68a251.jpg'
    },
    {
        id: 24,
        quote: "I think gay marriage is something that should be between a man and a woman.",
        author: 'Arnold Schwarzenegger',
        img: 'https://i.pinimg.com/originals/e6/4a/d0/e64ad03dfa52c77b1005576db6ec70a1.jpg'
    },
    {
        id: 25,
        quote: "The only happy artist is a dead artist, because only then you can't change. After I die, I'll probably come back as a paintbrush.",
        author: 'Sylvester Stallone',
        img: 'https://i.pinimg.com/originals/5c/48/5d/5c485d09e315ffa5d5c362ecc74b50ce.jpg'
    }
];

export { quotes };

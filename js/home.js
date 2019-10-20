window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
    console.log(articles);

    // Ma classe : 

    class Articles {

        constructor (id, title, content, resumes, author, publishedDate, img, tags) {
            this.id = id; 
            this.title = title; 
            this.content = content; 
            this.resumes = resumes; 
            this.author = author; 
            this.publishedDate = publishedDate; 
            this.img = img; 
            this.tags = tags; 
        }
            getId (){ return this.id}
            getTitle (){ return this.title}
            getContent(){ return this.content}
            getResumes(){ return this.resumes}
            getAuthor (){ return this.author}
            getPublishedDate (){ return this.publishedDate}
            getImg (){ return this.img}
            getTags (){ return this.tags} 

            setId (){ return this.id}
            setTitle (){ return this.title}
            setContent(){ return this.content}
            setResumes(){ return this.resumes}
            setAuthor (){ return this.author}
            setPublishedDate (){ return this.publishedDate}
            setImg (){ return this.img}
            setTags (){ return this.tags} 
    }   

    const section = document.getElementsByTagName("section")[0];

    // Ma boucle : 
    for (let i = 0; i<articles.length; i++){

    // Déclarer une instance : 
    let newArticle = new Articles (articles[i].id, articles[i].title, articles[i].content, articles[i].resumes, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].tags); 
    
    // Créer dans mon html les différents éléments : 
    let sectionArticle = document.createElement ("article"); 
    sectionArticle.classList.add ("articlePreview");
    sectionArticle.setAttribute("data-id", newArticle.getId())
    section.appendChild(sectionArticle); 

    let articleTitle = document.createElement ("h2"); 
    articleTitle.innerText = newArticle.getTitle();
    sectionArticle.append(articleTitle);

    let bodyDiv = document.createElement ("div"); 
    bodyDiv.classList.add ("article-body"); 
    sectionArticle.append(bodyDiv);

    let imgDiv = document.createElement ("div"); 
    imgDiv.classList.add("article-img"); 
    bodyDiv.append(imgDiv);

    let img = document.createElement ("img"); 
    img.setAttribute ("src", newArticle.getImg()); 
    imgDiv.append(img);

    let contentDiv = document.createElement ("div"); 
    contentDiv.classList.add ("article-content"); 
    sectionArticle.append(contentDiv);

    let paraContent = document.createElement ("p"); 
    paraContent.innerText = newArticle.getContent(); 
    contentDiv.append(paraContent); 

    let paraResume = document.createElement ("p"); 
    paraResume.innerText = newArticle.getResumes(); 
    contentDiv.append(paraResume);

    let author = document.createElement ("h3"); 
    author.innerText = newArticle.getAuthor(); 
    contentDiv.append(author);

    let date = document.createElement ("date"); 
    date.innerText = newArticle.getPublishedDate(); 
    contentDiv.append(date);

    let tagDiv = document.createElement ("div"); 
    tagDiv.classList.add ("article-tags"); 
    sectionArticle.append(tagDiv);

    let tags = document.createElement("p"); 
    tags.innerText = newArticle.getTags(); 
    tagDiv.append(tags); 
    
    // URL redirection : (à terminer)
    sectionArticle.onclick = function() {
        window.location.href = "file:///Applications/MAMP/htdocs/JavascriptMe/article.html";
    }
     }

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article








        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);

            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER








        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....





        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





    });
}

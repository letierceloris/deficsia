import React, { Component } from 'react';

export class module1 extends Component {
  static displayName = module1.name;

  render () {
    return (
      <div>
        <h2>Découvrez l'utilité et les concepts clés de React</h2>

        <iframe id="video1" src="https://player.vimeo.com/video/252852974?color=f18215?modestbranding=1&autohide=1&showinfo=0 " webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
        <p id="r-4712961" data-claire-element-id="9602662" class="">Bienvenue ! Dans cette partie, nous allons découvrir React et mettre en place notre environnement de développement afin d'effectuer correctement les exercices et les démonstrations du cours.</p>

        <div class="foldable" id="ui-id-1" data-widget="foldable">
          <h3 id="r-4712899" data-claire-element-id="9591545" class="foldable__button secondTitle js-foldable-button">À quoi sert un framework front-end ?<i class="foldable__icon icon-next"></i></h3>
          <div class="foldable__content">
            <p id="r-4712896" data-claire-element-id="8568361" class="">Et tout d’abord, qu’est-ce que c’est ? On appelle&nbsp;<strong>framework front-end</strong> tout ensemble de classes,&nbsp;fonctions et utilitaires qui nous <strong>facilite la création d'applications</strong> riches pour les navigateurs (et, de plus en plus, pour les mobiles).</p>
            <p id="r-4712897" data-claire-element-id="9591543" class="">Un tel framework vise à nous isoler - nous qui développons des applications web - des différences techniques entre les navigateurs, et à nous <strong>éviter de réinventer la roue</strong> pour tous les besoins classiques de nos applications : <strong>gestion de l'interface utilisateur</strong>, des événements, du DOM, des formulaires, de l’évolution dans le temps des données manipulées par l'interface, etc.</p>
            <p id="r-4712898" data-claire-element-id="9591544" class="">Dans cet « espace » des frameworks front-end (ou simplement « frameworks front »), on trouve pêle-mêle Angular, Ember, React, Vue.js et bien d’autres (par exemple Marko, Mavo, Backbone,…).</p>
          </div>
        </div>

        <div class="foldable" id="ui-id-2" data-widget="foldable">
        <h3 id="r-5056654" data-claire-element-id="30598474" class="foldable__button secondTitle js-foldable-button">React<i class="foldable__icon icon-next"></i></h3>
        <div class="foldable__content">
        <p id="r-4712900" data-claire-element-id="9602663" class="">React est sans doute le framework front-end le plus populaire aujourd’hui, même s’il préfère se positionner comme une&nbsp;<strong>bibliothèque</strong> (<em>library</em>) plutôt que comme un framework. En effet, React se concentre sur le cœur du problème : la gestion de l’interface utilisateur. Les autres briques applicatives, comme le routage côté client, le stockage des données, etc. sont laissées aux innombrables solutions complémentaires de son écosystème (par exemple, <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer nofollow">React-Router</a>, <a href="http://redux.js.org/" target="_blank" rel="noopener noreferrer nofollow">Redux</a>, <a href="https://hackernoon.com/introducing-redux-offline-offline-first-architecture-for-progressive-web-applications-and-react-68c5167ecfe0" target="_blank" rel="noopener noreferrer nofollow">Redux-Offline</a>…).</p>
        <div id="r-5095319" data-claire-element-id="9584334" data-claire-semantic="question" class="">
            <p id="r-5095317" data-claire-element-id="9584332"><strong><em>Framework ou bibliothèque ?</em></strong>&nbsp;&nbsp;Il existe quelques tentatives de distinguer formellement l'un de l'autre&nbsp;; par exemple, une explication populaire dit qu'un framework appelle notre propre code, là où c'est notre code qui appelle celui d'une bibliothèque. Mais en pratique, il arrive fréquemment que les deux se mêlent, comme dans le cas de React.</p>
            <p id="r-5095318" data-claire-element-id="9584333">Pour moi, la frontière est plus subtile, mais j'aurais tendance à dire que oui, React reste un framework, même s'il est beaucoup plus léger que des frameworks « qui&nbsp;veulent tout faire », comme Angular, Aurelia ou Ember…</p></div>
            <figure id="r-5056653" data-claire-element-id="30598473" class="">
                <img id="r-4714006" data-claire-element-id="8570411" src="https://user.oc-static.com/upload/2017/10/11/15076991283202_320px-React-icon.svg.png" alt="Logo de React"></img><figcaption>Le logo de React</figcaption>
            </figure>
                <p id="r-4712901" data-claire-element-id="9591549" class="">React&nbsp;est un projet <strong>open-source</strong> , désormais distribué sous la très populaire licence MIT et piloté par Facebook, dont tous les produits web et mobiles reposent sur cette technologie. Autour d’une équipe principale composée d’une vingtaine de personnes, gravitent&nbsp;<strong>plus de mille contributeurs</strong> occasionnels. En octobre 2017, <strong>plus de 20 000 modules</strong> sur npm (le principal référentiel de modules&nbsp;de développement, surtout orienté JavaScript, qui contient quelques 650 000 modules au total)&nbsp;avaient&nbsp;un rapport&nbsp;à l'écosystème React.</p>
                <p id="r-4725072" data-claire-element-id="9602564" class="">La&nbsp;plupart des « gros sites » connus du web ont migré leur interface web - et souvent leurs applications mobiles -&nbsp;vers React et React Native (son pendant pour la création d'applications natives iOS et Android).&nbsp;<strong>Airbnb</strong>, Algolia, Atlassian, Bit.ly, Campaign Monitor, Citymapper, CloudFlare, Codecademy, Coursera, <strong>Dailymotion</strong>, Discord, <strong>Dropbox</strong>, <strong>Facebook</strong> évidemment, Housing.com, IMDb, <strong>Instagram</strong>, KISSmetrics, <strong>Netflix</strong>, <strong>Paypal</strong>, Tesla, <strong>Twitter</strong>, Walmart, <strong>Wordpress</strong>, <strong>Yahoo!</strong>&nbsp;et <a href="https://github.com/facebook/react/wiki/sites-using-react" target="_blank" rel="noopener noreferrer nofollow">des centaines d’autres</a>&nbsp;en sont quelques exemples</p>
                <p id="r-5095321" data-claire-element-id="10183674">L’édition 2017 du JavaScript Developer Survey <a href="https://stateofjs.com/2017/front-end/results/" target="_blank" rel="noopener noreferrer nofollow">montre bien cette domination</a> : plus de la moitié des répondants ont déjà utilisé&nbsp;React et sont prêts à recommencer, tandis qu'un bon quart souhaite s'y mettre ! C’est davantage que tous les autres principaux frameworks réunis…</p>
            </div>
        </div>

    <div class="foldable" id="ui-id-3" data-widget="foldable">
    <h3 id="r-4712914" data-claire-element-id="30598476" class="foldable__button secondTitle js-foldable-button">Une approche basée composants<i class="foldable__icon icon-next"></i></h3>
    <div class="foldable__content">
        <p id="r-4712904" data-claire-element-id="8568369" class="">React a remis sur le devant de la scène l’approche basée <strong>composants</strong> qui avait déjà dominé le monde du développement d’applications riches de bureau (sur Windows principalement), au travers de solutions comme Delphi à l’époque.</p>
        <p id="r-4712905" data-claire-element-id="30598475" class="">Le web avait été conçu initialement pour des <strong>documents</strong>,&nbsp;et non pour des applications. Cela se ressentait dans le fonctionnement de HTML, de CSS et du DOM, de sorte qu'à force d'ajouter des rustines et de tenter d'y faire rentrer au chausse-pied une gestion applicative, on obtenait finalement des applications dont le code source ressemblait à un immense <strong>plat de spaghetti sauce jQuery</strong> : incompréhensibles, très ardues à maintenir et à faire évoluer, bourrées de bugs et d'effets de bord. <a href="https://www.freecodecamp.org/news/react-introduction-for-people-who-know-just-enough-jquery-to-get-by-2019-version-28a4b4316d1a/" target="_blank" rel="noopener noreferrer nofollow">Cet excellent didacticiel comparé</a> de 2015 montre bien ce phénomène (même s'il souffre d'un compte JSBin débordé pour ses démos…)</p>
        <p id="r-4712906" data-claire-element-id="9591855" class="">React a fait <strong>voler en éclat les&nbsp;dogmes établis du développement web</strong>, tels que la séparation stricte entre&nbsp;la structure (HTML), l'aspect (CSS) et le comportement (JS), classiquement écrits dans des fichiers bien distincts, pour revenir à la notion fondamentale de composant autonome, cohérent&nbsp;et&nbsp;complet.</p>
        <p id="r-4712907" data-claire-element-id="9602585" class="">Notez que tous les « concurrents » de React - Angular, Ember, Vue.js ou autres - rejoignent cette philosophie. Leurs approches diffèrent essentiellement dans la syntaxe et les détails d'implémentation. Leurs écosystèmes, outillages et nombres de déploiements majeurs sont en revanche beaucoup plus réduits que pour React.</p>
        
        <h4 id="r-4712911" data-claire-element-id="9591858" class="">Encapsulation</h4>
        <p id="r-4712908" data-claire-element-id="8568373" class="">Les composants React se comportent vis-à-vis du reste de l'application comme une <strong>boîte noire</strong>, avec une interface de programmation externe (une <strong>API</strong>) <strong>clairement définie</strong>. Ils contiennent en eux tout le nécessaire à leur bon fonctionnement : <strong>la structure, les styles, le comportement</strong>.</p>
        <p id="r-4712909" data-claire-element-id="9591857" class="">Le fait de rassembler&nbsp;dans un même fichier source&nbsp;ces trois volets, connectés par une <strong>syntaxe concise et familière</strong> (baptisée <strong>JSX</strong>, que nous verrons en détail dans la prochaine partie), facilite considérablement le développement. En effet, pour comprendre les changements d'aspect et le comportement d'un composant, plus besoin de fouiller dans de multiples fichiers plus globaux en essayant de « connecter les points » de l‘un à l’autre !</p>
        <p id="r-4712910" data-claire-element-id="8568375" class="">Notez que cette encapsulation facilite aussi l‘écriture de <strong>tests automatiques</strong> pour les composants.</p>
        
        <h4 id="r-4712913" data-claire-element-id="9622316" class="">Composition</h4>
        <p id="r-4712912" data-claire-element-id="9622315" class="">React nous encourage à structurer nos interfaces comme une <strong>arborescence de composants</strong>, et à rendre&nbsp;ces composants éminemment <strong>réutilisables</strong>. La majorité de nos composants sont eux-mêmes créés en&nbsp;<strong>combinant d’autres composants</strong> plus simples : c’est le principe fondamental de la <strong>composition</strong>,&nbsp;un outil primordial de structuration de code et d'application.</p>
    </div>
    </div>

    <div class="foldable" id="ui-id-4" data-widget="foldable">
    <h3 id="r-4712920" data-claire-element-id="9620426" class="foldable__button secondTitle js-foldable-button">« Les données descendent, l’état remonte »<i class="foldable__icon icon-next"></i></h3>
    <div class="foldable__content">
    <p id="r-4712915" data-claire-element-id="9620425" class="">Lorsque l’on programme des comportements complexes dans une interface utilisateur, une des plus grosses sources de complication et de difficulté réside dans la gestion de&nbsp;<strong>l'état applicatif</strong> : ce sont les données manipulées par l'interface qui doivent évoluer au fil des manipulations en respectant une série de règles métier précises. Ainsi, certaines saisies sont invalides, d’autres sont inter-dépendantes,&nbsp;etc.</p>
    <p id="r-4712916" data-claire-element-id="9602595" class="">Réciproquement, lorsque les données évoluent, l'interface est censée réagir pour refléter le nouvel état applicatif. Par exemple, l’absence de données obligatoires <em>doit</em> interdire l’accès à certaines actions, des saisies invalides <em>doivent</em> provoquer un affichage d’erreur, une saisie a <em>besoin</em> d’être formatée au fil de l’eau, etc.</p>
    <p id="r-4712917" data-claire-element-id="9592536" class="">Afin d’éviter que tous les composants ne finissent par être étroitement connectés entre eux (appelé&nbsp;<em>couplage fort</em>, et constituant un gros problème de maintenance), React nous force à suivre un principe simple : <em>« les données descendent, l’état remonte »</em>.</p>
    <p id="r-4712918" data-claire-element-id="9602596" class="">Chaque composant est seul responsable des informations qu’il fournit à ses composants fils. Lorsque ceux-ci ont besoin de signaler une évolution de l'état applicatif, ils&nbsp;font alors remonter cette demande de composant parent en composant parent, jusqu’à atteindre un niveau suffisamment haut pour&nbsp;contenir tous les autres composants intéressés.</p>
    <p id="r-4712919" data-claire-element-id="9592895" class="">Les deux mécanismes techniques employés pour cela sont les&nbsp;<strong>props</strong> et&nbsp;<strong>l'état local</strong>. Nous verrons ces notions en détail dans la troisième partie de ce cours, « Créez des composants complets ».</p>
    </div>
    </div>

    <div class="foldable" id="ui-id-5" data-widget="foldable">
    <h3 id="r-4712924" data-claire-element-id="9622335" class="foldable__button secondTitle js-foldable-button">Le DOM virtuel<i class="foldable__icon icon-next"></i></h3>
    <div class="foldable__content">
        <p id="r-4712921" data-claire-element-id="9602605" class="">React a&nbsp;inauguré la notion de DOM virtuel : React lui-même ne manipule pas directement le <a href="/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom">DOM du navigateur</a>. Cela serait&nbsp;coûteux en performance et empêcherait de décliner cette approche sur d’autres supports tels que les applications mobiles natives, les terminaux textuels, les fichiers PDF, etc.</p>
        <p id="r-4712922" data-claire-element-id="9602635" class="">À la place, React nous fait décrire un&nbsp;<strong>DOM virtuel</strong>, absolument distinct du DOM des navigateurs. Au moment venu il&nbsp;<strong>réconcilie</strong> ce DOM virtuel avec la couche de rendu réelle (par exemple, le DOM du navigateur, ou, si on est côté serveur, la production du texte HTML à renvoyer côté client), en prenant soin de minimiser le nombre d'opérations nécessaires.</p>
        <p id="r-4712923" data-claire-element-id="9602655" class="">Ce système permet&nbsp;<strong>d'excellentes performances</strong>. Cependant, à mon sens, son véritable avantage est qu'il nous permet d'utiliser React dans de nombreux contextes, et pas seulement au sein du navigateur même. Le <strong>pré-rendu côté serveur</strong> et les <strong>applications natives mobiles</strong> sont les deux autres cas de figure les plus intéressants.</p>
        <p id="r-4712963" data-claire-element-id="9622325">Dans le prochain chapitre, nous découvrirons <em>Create-React-App</em>, un outil de développement spécialement conçu pour mettre facilement le pied à l'étrier et pouvoir attaquer le développement avec React en un rien de temps.</p>
    </div>
    </div>

    <button id="btn1"  onclick="">J'ai terminé ce module et je passe au suivant</button><br></br>
    <button id="btn2"  onclick="">Retourner au module précédent</button><br></br>
    <button id="btn13"  onclick="">Aller au module suivant : %nomdumodule+1?</button>
    </div>
    );
  }
}
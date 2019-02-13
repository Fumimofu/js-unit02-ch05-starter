import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('locale') || 'ja';
  }

  setup() {
    // const locale = document.getElementsByName("data-locale"); いらない？

    if (this.currentLocale === 'ja') {
      this.polyglot.extend({
        "hello, world": "こんにちは、世界"
      });
    }

    if (this.currentLocale === 'en') {
      this.polyglot.extend({
        "hello, world": "Hello, world"
      });
    }
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
  }

  updateLocale(e) {
      // const locale = document.getElementsByName("data-locale");　いらない？

      if (e.button1 && this.currentLocale === 'en') {
        this.currentLocale = 'ja';
        return;
      }

      if (e.button2 && this.currentLocale === 'ja') {
        this.currentLocale = 'en';
        return;
      }
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    const main = document.getElementById('main');

    if (this.currentLocale === 'ja') {
      main.innerHTML = `<h1>こんにちは、世界。</h1>`;
    }

    if (this.currentLocale === 'en') {
      main.innerHTML = `<h1>Hello, world</h1>`;
    }
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。 
    */

  }

}

{
  const app = new TranslationApp;

  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);

  app.setup();
  app.showMessage();
}
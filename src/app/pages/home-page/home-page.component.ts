import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')} `,
    'color: #bada55'
  )
}

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'Iván';
  signalProperty = signal('Iván');

  // 🛠️ Creation - Standard JavaScript class constructor . Runs when Angular instantiates the component.
  constructor() {
    log('🛠️ Constructor called');
  }

  changeTraditional() {
    this.traditionalProperty = 'Iván López';
  }

  changeSignal() {
    this.signalProperty.set('Iván López');
  }

  // ⚡ Effect
  basicEffect = effect((onCleanup) => {
    log('⚡ effect', "Runs secondary Effects");

    onCleanup(() => {
      log('🧹 onCleanup', 'Runs once the effect is about to be destroyed.')
    })
  })

  // ✨ Change Detection
  ngOnInit() {
    log('✨ 1️⃣ ngOnInit', "Runs once after Angular has initialized all the component's inputs.");
  }

  ngOnChanges() {
    log('✨ 📝 ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log('✨ ☑️ ngDoCheck', "Runs every time this component is checked for changes.");
  }

  ngAfterContentInit() {
    log('✨ 🎨 ngAfterContentInit', "Runs once after the component's content has been initialized.");
  }

  ngAfterContentChecked() {
    log('✨ ✅ ngAfterContentChecked', "Runs every time this component content has been checked for changes.");
  }

  ngAfterViewInit() {
    log('✨ 🎨 ngAfterViewInit', "Runs once after the component's view has been initialized.");
  }

  ngAfterViewChecked() {
    log('✨ ✅ ngAfterViewChecked', "Runs every time the component's view has been checked for changes.");
  }

  // 💡 Rendering
  afterNextRenderEffect = afterNextRender(() => {
    log('💡 afterNextRender', "Runs once the next time that all components have been rendered to the DOM.")
  })

  afterEveryRenderEffect = afterEveryRender(() => {
    log('💡 afterEveryRender', "Runs every time all components have been rendered to the DOM.")
  })

  // 🔥 Destruction
  ngOnDestroy() {
    log('🔥 ngOnDestroy', "Runs once before the component is destroyed.")
  }
}

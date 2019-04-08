import { injectable } from "inversify";
import { FrontendApplicationContribution, FrontendApplication } from '@theia/core/lib/browser';
import 'roboto-fontface/css/roboto/roboto-fontface.css';



@injectable()
export class ThemeExtApplicationContribution implements FrontendApplicationContribution {

    async onStart(app: FrontendApplication): Promise<void> {

        document.documentElement.style.setProperty("--theia-ui-font-size1","14px");
        document.documentElement.style.setProperty("--theia-brand-color0","#1776BF");
        document.documentElement.style.setProperty("--theia-ui-font-family","'Roboto', Arial, Sans-serif");
        document.documentElement.style.setProperty("--theia-ui-font-color0","#333333");
        document.documentElement.style.setProperty("--theia-ui-font-color1","#333333");
    }
    

}


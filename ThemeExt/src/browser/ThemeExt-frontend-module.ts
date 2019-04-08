/**
 * Generated using theia-extension-generator
 */

import { ThemeExtApplicationContribution } from './ThemeExt-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(FrontendApplicationContribution).to(ThemeExtApplicationContribution);

    
});
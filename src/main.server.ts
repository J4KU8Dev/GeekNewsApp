import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
    
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);
    
export default bootstrap;

// answer ->>  https://www.reddit.com/r/Angular2/comments/1nijxze/i_cant_run_newly_created_project_still_getting/?tl=pl
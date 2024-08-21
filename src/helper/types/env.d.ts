export { };

declare global{
    namespace NodeJS{
        interface ProcessEnv {
            BROWSER :"chrome" | "firefox" | "webkit",
            ENV : "stage" | "dev" | "test" | "prod" ,
            BASEURL: string;
            HEAD : "true" | "false"
        }
    }
}
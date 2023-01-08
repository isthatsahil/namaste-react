## Assignment - 02 | Igniting our app

1. What is 'NPM'?

   > NPM is a package manager for installing various packages into our projects. Basically its a registary for javascript packages.

2. What is Parce/Webpack ? Why do we need it ?

   > Parcel/Webpack is a bundler which is nothing but a development tool that combines various JS codes into a single file ready for production. We need it because it installs various packages and manages their dependencies. It also offers a lot of features in development mode like HMR,caching etc.

3. What is '.parcel.cache'?

   > It's a folder created when we serving or building our project in development. It basically caches it so that it will take less time to server/build your project if there is no change in the development process.

4. What is 'npx'?

   > Npx is a command that is used to execute Javascript packages.

5. What is the difference between dependencies and devDependencies?

   > Dependencies - These are the packages that are required in production.
   > DevDependencies - These are the packages that are required at the time of development and testing.

6. What is Tree shaking?

   > Tree shaking refers to the elmination of dead code inside a JavaScript project.

7. What is Hot Module Replacement?

   > Hot Module Replacement(HMR) exchanges,add or removes a module while an application is running, without full reload. This speeds up the development process.

8. What is .gitignore? What should we add and not add into it?

   > .gitignore is file which tells git which files to include/add to git. We should not add those files/folders which can be regenerated on the server like node_modules, .parcel.cache etc.

9. What is the difference between `package.json` and `package-lock.json` ?

   | package.json                                                                                                                                  |                                                                         package-lock.json                                                                          |
   | :-------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
   | The package.json file is the core of any node project. It stores critical metadata about a project that is necessary .                        | The package-lock.json is a lockfile that holds information on the dependencies or packages installed for a node.js project, including their exact version numbers. |
   | The package for your project. json is the primary format for configuring and describing how to communicate with and execute your application. |   Its objective is to offer an immutable version of package.json, so you may fetch an earlier version of your code and end up with the same node_modules folder.   |

10. Why should I not modify package-lock.json?

    > We should not modify package-lock.json because its objective is to offer an immutable version of package.json

11. What is node_modules ? Is it a good idea to push that into git?

    > node_modules is basically a folder which is generated when we install any dependencies in our application. It contains all the dependencies be it direct or transitive.

12. What is the dist folder?

    > dist folder is generated when we take a production build of our application.

13. What is browserlist?

    > Browserlist is a tool that allows specifying which browser will be supported by the application by specifying queries in the config file.

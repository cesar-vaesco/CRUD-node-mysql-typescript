### ts-restserver

- Inicializar proyecto con npm  ```npm init -y ```
- Archivo de configuración de typescript ``` tsc --init```
    - Crea el archivo tsconfig.json
    - Y dentro de este archivo, se realizan configuraciones iniciales
    - Después de las cnfiguraciones iniciales realizadas al archivo  tsconfig.json...
- Ejecutar el comando ```tsc```
    - Al ejecutar este comando se genera la carpeta dist y dentro dos archivos que permiten ejecutar código de javascript de node
- Se ejecuta la app ```node dist/app.js ```

### Configurar tslint en el proyecto de typescript en línea de comando
- instalar tslint como dependencia de desarrollo ```npm i tslint --save-dev ```
- instalar typescript como dependencia de desarrollo ```npm i typescript --save-dev ```
- inicializar archivo de configuración de tslint ```./node_modules/.bin/tslint --init ```
- configurar archivo de configuración de tslint para evitar que typescript tire errores al usar la consola
    - archivo de configuración de tslint, regla a modificar : ```"rules": {"no-console": false},```

### Compilación de typescript
- En terminal usar dos ventanas - consolas:
  - Una, typescript compilara en tiempo real al guardar cambios del código ``` tsc --watch o tsc -w ``` y nos mostrara los errores
  - En la otra se veran los problemas que se vean con la aplicación corriendo


*** tsc = Command-line TypeScript Compiler***

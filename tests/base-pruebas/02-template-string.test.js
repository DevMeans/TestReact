import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Pruebas en el  02-template-string', () => { 
    test('Getsaludo debe regrear "Hola Fernando" ', () => { 
         const name="Fernando";
         const mensaje=getSaludo(name)
          expect(mensaje).toBe('Hola '+name)
     })
})
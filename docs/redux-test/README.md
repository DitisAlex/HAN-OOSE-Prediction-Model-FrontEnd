# Redux Testing:
Redux testen bestaan uit het testen van de actions & de reducers. Op dit moment hebben wij alleen de actions van consumption & production getest.

Deze test wordt gedaan door Jest & redux-mock-store.

## Hoe werkt actions.test.js?
### Setup:
```js
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actionTypes from '../../../redux/graphs/actions'
import * as types from '../../../redux/graphs/types'
```
Importeer de benodigde modules en alle actions/types.

```js
const mws = [thunk]
const mockStore = createMockStore(mws)
const store = mockStore({})
```
Initialiseer daarna de Redux store die gemockt zal worden.
### Test:
```js
describe('Graphs actions', () => {
  it('Dispatches FETCHED_CONSUMPTION after fetching consumption data', () => {
    expect.assertions(2)
    const mJson = {
      labels: [
        '10AM',
        '11AM',
        '12AM',
        '1PM',
        '2PM',
        '3PM',
        '4PM',
        '5PM',
        '6PM',
      ],
      values: [8, 10, 15, 13, 17, 18, 22, 19],
    }
    const mResponse = { json: jest.fn().mockResolvedValueOnce(mJson) }
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse)

    const expectedActions = [
      {
        type: types.FETCHED_CONSUMPTION,
        payload: {
          labels: [
            '10AM',
            '11AM',
            '12AM',
            '1PM',
            '2PM',
            '3PM',
            '4PM',
            '5PM',
            '6PM',
          ],
          values: [8, 10, 15, 13, 17, 18, 22, 19],
        },
      },
    ]

    return store.dispatch(actionTypes.fetchConsumption()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      expect(global.fetch).toBeCalledWith('/consumption', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    })
  })
  ```
  Daarna de test zelf, hier fetchen wij `/consumption` en bekijken wij daarna of de response hetzelfde is als de verwachte uitkomst.

  Een aantal belangrijke punten zijn:
  - r27: geef aan hoeveel assertions je gaat behandelen
  - r42-43: handled de mock van fetching
  - r66: controleert resultaten van test
  - r67: gebruik de correcte route

  ### Meerdere testen tegelijk:
  Wanneer er meedere testen tegelijk moeten gebeuren is het belangrijk om de Redux store te wissen na elke test, anders kun je ongewenste uitkomsten krijgen die niet bij de betreffende test behoren.
  ```js
    beforeEach(() => {
    store.clearActions()
  })
  ```
  Om dit probleem op te lossen kun je een eenvoudige beforeEach bovenaan de test initialiseren, deze wist alle actions met `store.clearActions()`

  ## Hoe werkt reducers.test.js?
  ### Setup:
  ```js
  import { graphsReducer } from '../../../redux/graphs/reducer'
  import * as types from '../../../redux/graphs/types'
  ```
  Importeer je types & reducers

  ### Test:
  ```js
  const data = {
    labels: ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
    values: [8, 10, 15, 13, 17, 18, 22, 19],
  }

    it('Should handle FETCHED_CONSUMPTION', () => {
    const dispatchedData = {
      type: types.FETCHED_CONSUMPTION,
      payload: data,
    }

    expect(graphsReducer([], dispatchedData)).toEqual({
      consumption: data,
    })
  })
  ```
  Dit is een simpele reducer test waarbij gekeken wordt of de opgehaalde payload van de actions hetzelfde is als de verwachte data.
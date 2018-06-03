import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="month">
          <h1>June</h1>
          <div className="stats">
            <h2>Totals For the Month</h2>
            <ul>
              <li>Total Income: $2000</li>
              <li>Total expences: $1800</li>
              <li>Paid expences: $1500</li>
              <li>Unpaied expences: $300</li>
            </ul>
          </div>
          <div className="credits">
            <h2>Income</h2>

            <form>
              <label for='incomeAmount'> Amount:
                <input
                  type="text"
                  size="10"
                  id="incomeAmount"
                />
              </label>
              <label for='incomeSource'> Source:
                <input
                  type="text"
                  size="10"
                  id="incomeSource"
                />
                </label>
                <br />
                <label for='incomeDate'> Date:
                  <input
                    type="text"
                    size="10"
                    id="incomeDate"
                  />
                </label>
                <input type="submit" value="add"/>
            </form>

            <table>
              <tr>
                <th>Amount</th>
                <th>Source</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>1500</td>
                <td>Job1</td>
                <td>07/01/2018</td>
                <button>edit</button>
              </tr>
              <tr>
                <td>1500</td>
                <td>Job1</td>
                <td>07/15/2018</td>
                <button>edit</button>
              </tr>
            </table>
          </div>
          <div className="debits">
            <h2>Expences</h2>

            <form>
              <label for='expenceAmount'> Amount:
                <input
                  type="text"
                  size="10"
                  id="expenceAmount"
                />
              </label>
              <label for='expenceName'> Expence:
                <input
                  type="text"
                  size="10"
                  id="expenceName"
                />
                </label>
                <br />
                <label for='dueDate'> Due-Date:
                  <input
                    type="text"
                    size="10"
                    id="dueDate"
                  />
                </label>
                <input type="submit" value="add"/>

            </form>

            <table>
              <tr>
                <th>Amount</th>
                <th>Expence-Name</th>
                <th>Due-Date</th>
                <th>Paid</th>
              </tr>
              <tr>
                <td>120.86</td>
                <td>Power</td>
                <td>7/26/2018</td>
                <td><input type="checkbox"/></td>
                <button>edit</button>
              </tr>
              <tr>
                <td>90.58</td>
                <td>Water</td>
                <td>7/10/2018</td>
                <td><input type="checkbox"/></td>
                <button>edit</button>
              </tr><tr>
                <td>80.32</td>
                <td>gas</td>
                <td>07/5/2018</td>
                <td><input type="checkbox"/></td>
                <button>edit</button>
              </tr>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

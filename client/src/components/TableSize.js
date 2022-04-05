import React from 'react'
import styled from 'styled-components'

function tableSize() {
  return (
    <Wrapper>
      <p>Tableau des tailles:</p>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Tour de Taille</th>
            <th>Longueur manche</th>
            <th>Longueur Qamono</th>
          </tr>
          <tr>
            <td>S</td>
            <td>60 cm</td>
            <td>62 cm</td>
            <td>122 cm</td>
          </tr>
          <tr>
            <td>M</td>
            <td>64 cm</td>
            <td>63 cm</td>
            <td>124 cm</td>
          </tr>
          <tr>
            <td>L</td>
            <td>68 cm</td>
            <td>63 cm</td>
            <td>125 cm</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>70 cm</td>
            <td>73 cm</td>
            <td>125 cm</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 1rem;
  table,
  th,
  td {
    padding: 0 5px;
    border: 1px solid;
    border-color: var(--clr-green-ines-light);
    border-collapse: collapse;
  }
`
export default tableSize

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
               <footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0" >
    <section class="mb-4" >
      <a class="btn btn-btn-floating m-1" href="#!" role="button"
        ><i ><img src='./img/facebook-logo.png' alt='' width="35" />   </i
      ></a>
      <a class="btn btn- btn-floating m-1" href="#!" role="button"
        ><i ><img src='./img/github.png' alt='' width="35" /></i
      ></a>
      <a class="btn btn-btn-floating m-1" href="#!" role="button"
        ><i ><img src='./img/linkedin.png' alt='' width="35" /></i
      ></a>
      <a class="btn btn- btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"><img src='./img/twitter.png' alt='' width="35" /></i
      ></a>
      
    </section>
  </div>
  <div class="text-center p-3" >
    © 2021 Copyright:
    <p>Code-Executors</p>
  </div>
</footer> 
            </div>
        )
    }
}

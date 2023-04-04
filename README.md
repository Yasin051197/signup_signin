# cointab_assignment
It is a full-stack web application where we can see the login and signup functionality using Backend.
<ol>
<li>Registration</li>
<li>Authentication & validation</li>
<li>Redircts</li>
<li>Managing Errors</li>
</ol>
<h2>Main ponts-</h2>
<h3>1)Registration:-</h3>
  <p>In this section user can registor him with thier email and password</p>
  <p>System(Backend) will check if user alredy registored or not if user alredy registored then it will be redirect to signin page without regitoring users data, if user is not a user then system will store thier data and then redirect to signin page</p>
  
<h3>1)Authentication & validation :-</h3>
  <p>In this section user can signin him with thier email and password</p>
  <p>System(Backend) will check if user authorised or not, If user authorised then it will be redirect to home page, if user is not a authorised user then system will show one error which is "Login Failed, plz enter correct credintials". If user try to signin with wrong password more than 5 times the system will lock that user for 24 hours in miliseconds</p>
  <p>If the user try to sign in after that time then system will signin him and redirect to home page</p>

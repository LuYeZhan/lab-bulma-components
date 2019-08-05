import React from "react";
import CoolButton from './CoolButton'

const Signup = () => {
  return (
    <div>
    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control">
    <input class="input" type="password" placeholder="Password" />
  </div>
</div>
<CoolButton class="button is-small is-success" name="Submit" />
</div>
  );
}
export default Signup;
import React from "react";
import Button from "./Button";

export default function Links() {
  return (
    <div className="col-md-6 offset-md-3 my-5">
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="ProCoding.org"
        icon="fab fa-chrome"
        href="https://www.procoding.org/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="abhi_erroprone"
        icon="fab fa-instagram"
        href="https://www.instagram.com/abhi_errorprone/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="yumm_abhi_shake"
        icon="fab fa-instagram"
        href="https://www.instagram.com/yumm_abhi_shake/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="GitHub"
        icon="fab fa-github"
        href="https://www.github.com/akabhi5/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="Bitbucket"
        icon="fab fa-bitbucket"
        href="https://bitbucket.org/akabhi/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="Linkedin"
        icon="fab fa-linkedin"
        href="https://www.linkedin.com/in/akabhi/"
      />
      <Button
        type="button"
        class="btn bnt-outline btn-secondary btn-lg btn-block"
        name="HackerRank"
        icon="fab fa-hackerrank"
        href="https://www.hackerrank.com/abhishekk580"
      />
    </div>
  );
}

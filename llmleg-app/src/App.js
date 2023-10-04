import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="top">
        <h1> Summary of petition</h1>
        <p>The claim against the patentability of claim 1 of US patent 8,066,181 is that it is anticipated by, or at least obvious over, the prior art patent by Wankmueller.</p>

        <p>Specifically, the claim against claim 1 is that Wankmueller discloses all of the elements of claim 1, including:</p>
        <ul>
          <li>generating an RFID transaction device authentication tag using a random number, a transaction device identifier, and a counter value</li>
          <li>transmitting the RFID transaction device authentication tag to the RFID reader</li>
          <li>incrementing the counter value</li>
          <li>authorizing an RFID transaction in response to verification of the RFID transaction device authentication tag</li>
        </ul>

        <p>The claim against claim 4 of US patent 8,066,181 is that it is obvious over the prior art patent by Wankmueller.</p>

        <p>Specifically, the claim against claim 4 is that Wankmueller discloses that the counter value is incremented before a predefined event, such as before each transaction, and that the transaction counter value is maintained by the RF chip. Wankmueller also discloses that the issuer uses this information to authorize a user’s transaction.</p>

        <p>Given Wankmueller’s disclosure that the counter is a transaction counter, a POSA would have understood, or at least found obvious, that the increment is by a predetermined amount (e.g., one).</p>
      </div>
      <div className="middle">
        <h1>Summary of response</h1>
        <p>The response to the petition argues that the petition's challenge is not reasonably likely to prevail with respect to any claim. Specifically, the response argues that the prior art reference Wankmueller discloses all of the elements of claim 1, including an authentication tag that is generated using a pre-incremented instance of a counter value.</p>

        <p>The response also argues that even assuming arguendo that the challenge were reasonably likely to prevail with respect to some claims, the Board should still deny the petition in its discretion.</p>
      </div>
      <div className="bottom">
        <h1>Suggested appeal</h1>
        <p>The Patent Owner's Response to the Petition to Invalidate Patent fails to address the Petitioner's arguments that the patent is invalid due to anticipation and obviousness in view of the prior art reference Wankmueller.</p>

        <h2>Anticipation</h2>

        <p>The Petitioner's Petition clearly and concisely sets forth the elements of claim 1 of the patent and demonstrates that Wankmueller discloses each and every element of claim 1. The Patent Owner's Response does not dispute this assertion. Instead, the Patent Owner argues that Wankmueller does not disclose an "RFID transaction device authentication tag" because Wankmueller does not use the term "authentication tag." However, the term "authentication tag" is not defined in the patent, and there is no reason to believe that the Patent Owner intended to use the term in a narrow or technical sense. In fact, the Patent Owner's own description of claim 1 makes clear that an "authentication tag" is simply a data structure that is used to authenticate a device. Wankmueller discloses all of the elements of this data structure, including a counter value that is incremented before the authentication code is generated.</p>

        <h2>Obviousness</h2>

        <p>The Petitioner's Petition also sets forth a prima facie case of obviousness in view of Wankmueller. The Patent Owner's Response does not address this argument. Instead, the Patent Owner argues that the Petitioner's Petition is deficient because it does not provide any evidence of a motivation to combine the teachings of Wankmueller. However, the Petitioner is not required to provide evidence of motivation to combine. The Patent Owner bears the burden of proving that the combination of the teachings of Wankmueller would not have been obvious to a person of ordinary skill in the art. The Patent Owner has not met this burden.</p>

        <h2>Conclusion</h2>

        <p>For the foregoing reasons, the Petitioner respectfully requests that the Board institute inter partes review of the patent and invalidate the patent for anticipation and obviousness.</p>

        <h2>Additional Arguments</h2>

        <p>In addition to the arguments above, the Petitioner may also want to consider the following arguments in its reply:</p>

        <ul>
          <li>The Patent Owner's Response relies on hindsight analysis. The Patent Owner argues that Wankmueller does not disclose an "RFID transaction device authentication tag" because the term "authentication tag" was not coined until after Wankmueller was published. However, this is a hindsight view of the prior art. At the time that Wankmueller was published, it would have been obvious to a person of ordinary skill in the art that the data structure disclosed in Wankmueller could be used to authenticate an RFID device.</li>
          <li>The Patent Owner's Response argues that Wankmueller's disclosure of an incremented counter value is not relevant to the patent because the patent does not specify how the counter value is used. However, this is a narrow and technical interpretation of the patent. The patent claims a system that generates an RFID transaction device authentication tag using a counter value. Wankmueller discloses a system that generates an RFID transaction device authentication tag using an incremented counter value. Therefore, Wankmueller is relevant to the patent.</li>
        </ul>

        <p>The Petitioner should also carefully review the Patent Owner's Response and address any specific arguments that the Patent Owner makes.</p>
      </div>
    </div>
  );
}

export default App;

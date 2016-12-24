# Alexa + SmartStart
Control your Viper SmartStart enabled car with Alexa (Amazon Echo)

## Instructions

### VERY IMPORTANT: ***DO NOT*** PUBLISH THIS SKILL OR SUBMIT IT FOR CERTIFICATION. THIS IS A PRIVATE SKILL AND WILL WORK WITHOUT PUBLISHING/CERTIFYING.

1. If you do not already have one, create an [**Amazon Developer**](https://developer.amazon.com/) account.
1. Go to the [**Amazon Developer Portal**](https://developer.amazon.com/edw/home.html#/).
  1. Click **Get Started >** under **Alexa Skills Kit**.
  1. Click **Add a New Skill** at the top right.
    * **Skill Type:** `Custom Interaction Model`
    * **Language:** `English (U.S.)`
    * **Name:** `Viper SmartStart`
    * **Invocation Name:** `viper`
    * **Audio Player:** `No`
  1. Click **Next**.
  1. At the top left under **Viper SmartStart** you should see a skill ID. Copy this down as we will need it in the next step.
1. Go to [https://alexa-skills-server.herokuapp.com/smartstart](https://alexa-skills-server.herokuapp.com/smartstart) and enter your Directed/Viper/Clifford/Python SmartStart username and password, as well as the skill ID that you copied from the previous step.
  1. **Make sure to enter this information correctly as you will have to wait 60 seconds before you can try again. This is a security measure to prevent brute-force attacks on the encryption keys.**
  1. After you've made sure that you have entered the correct information, click **Submit**.
  1. Copy and paste the **Intent Schema** and **Sample Utterances** to the new skill on the **Amazon Developer Portal**.
  1. On the **Amazon Developer Portal** page, click **Next**.
1. You should now be on the **Configuration** page of the skill.
  * **Service Endpoint Type:** `HTTPS`
  * **Geographical Region:** `North America`
  * Copy and paste the **Skill URL** from the **Viper SmartStart Alexa Skill Setup** page into the text field under **North America**.
  * **Account Linking:** `No`
1. Click **Next**.
  * **Certificate for NA Endpoint:** `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`
1. Click **Next** and you are finished.

## Donations

If you find yourself enjoying this skill, please consider making a small donation of $7 to help cover the server costs.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="QMN7ED7745TQJ">
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

## Sample Phrases

* *Alexa, tell Viper to unlock the car*
* *Alexa, lock the truck with Viper*
* *Alexa, tell Viper to start the car*
* *Alexa, ask Viper what was the top speed today?*
* *Alexa, ask Viper to find the Jeep*

## Bugs and Issues

Please report any bugs or issues to the [Issues](https://github.com/dale3h/alexa-smartstart/issues) page.

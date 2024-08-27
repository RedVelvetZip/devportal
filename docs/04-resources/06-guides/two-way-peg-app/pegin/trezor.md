---
sidebar_position: 1400
sidebar_label:  Peg-in using Trezor Hardware Wallet
title: "Performing a peg-in in using Trezor Hardware Wallet"
description: "Here, we will learn how to perform a peg-in transaction using the Trezor Hardware Wallet."
tags: [2 way peg app, powpeg, peg-in, peg-out, bridge, rsk, rootstock]
---

In this guide, we will be using performing a peg in transaction using the [2 way peg app](https://app.2wp.rootstock.io/) application.

## Access Pegin Page

![Connect Trezor](/img/resources/two-way-peg-app/pegin.png)

## Verify if you have enabled **Perform Safety Checks** to **PROMPT**

    > - If is not enabled you will receive this error ![Trezor Error Key Path](/img/resources/two-way-peg-app/trezor-error.png) 
    > - This video explains how to enable **Perform Safety Checks** to **PROMPT** on **Trezor Suite** [Enabling Prompt for Key Path](/img/resources/two-way-peg-app/trezor-error-fixed.mp4) 
    <Video url="/img/resources/two-way-peg-app/trezor-error-fixed.mp4" thumbnail="/img/resources/two-way-peg-app/trezor-error.png" />

## Select Trezor Wallet

![Connect Trezor](/img/resources/two-way-peg-app/wallets.png)

## Trezor Hardware Wallet

![Connect Trezor](/img/resources/two-way-peg-app/pegin-connect-your-trezor.png)


## Read pop up information

The pop up shown in the image below describes the duration of the peg-in process which requires at least 100 confirmations on the Bitcoin network, this gives an estimate of around 17 hours in total. It also describes the three main steps involved which is; connecting to the hardware wallet, sending a signed transaction to the BTC network until the corresponding RBTC value is made available in the destination wallet and a receipt for this transaction.

![Connect Trezor](/img/resources/two-way-peg-app/pegin-popup.png)

**Step 1: Connecting to a trezor wallet**

Plug your Trezor wallet by connecting the USB cable that comes with Trezor.

**Step 2: Export multiple addresses**
In this step, the user is redirected to Trezor's site and needs to click on export to export the addresses. 

![Export Testnet Addresses](/img/resources/two-way-peg-app/34-export-testnet-addresses.png)

**Step 3: Enter Pin and confirm**
Enter a pin for your Trezor, displayed on your hardware wallet. Click **confirm**.

![Insert Trezor Wallet Pin](/img/resources/two-way-peg-app/35-insert-trezor-wallet-pin.png)

![Insert Wallet Pin - Trezor](/img/resources/two-way-peg-app/35a-insert-wallet-pin-trezor.png)

**Step 4: Unlock Trezor with passphrase**

![Enter passphrase](/img/resources/two-way-peg-app/36-enter-passphrase.png)

Step 5:
- Type Trezor passphrase
- Trezor will display the message: 'Please enter your passphrase using the computer's keyboard'.

![Enter Passphrase using Keyboard](/img/resources/two-way-peg-app/36a-enter-passphrase-keyboard.png)

The user fills the passphrase, and confirms passphrase fields, using the Trezor Connect application. The user will see this screen on Trezor: "Access Hidden Wallet?".

![Access hidden wallet notification](/img/resources/two-way-peg-app/37-access-hidden-wallet-notification.png)

![Use passphrase](/img/resources/two-way-peg-app/37a-use-passphrase.png)

Now, you have successfully connected your Trezor to the Bitcoin network.

## Performing a peg-in transaction with Trezor
 
**Step 1: Connect to the app**

Click **Continue** to connect to the 2 way peg application.

![Connect to the app](/img/resources/two-way-peg-app/pegin-trezor-connection.png)

The 2 way peg app shows the pop-up with the connected usb ledger devices, if your device is not visible, unplug the usb device and plug in again, unlock with a pin and click **Retry** or go back to the [connect ledger wallet](#ledger-hardware-wallet) section.

![Connect device error](/img/resources/two-way-peg-app/error-conecting-trezor.png)

To confirm successful connection to the 2 way peg app, you will be directed to the screen below, where we will perform a Peg-in transaction. 

![Peg-in screen](/img/resources/two-way-peg-app/pegin-transaction-page.png)

> - The balance of the accounts in your hardware wallet will be loaded, and this shows the balance of 3 different types of accounts: segwit, legacy, native segwit. See the [supported addresses](#supported-addresses) for the meaning of these types of accounts.

**Step 5: Sending a transaction**

**Choose Account**

Select the account you would like to send BTC from, by clicking on the dropdown as shown in the image below. 

![Select Testnet Bitcoin Account](/img/resources/two-way-peg-app/select-btc-account.png)

> Note that for each selected account type, we will see a corresponding balance.

**Enter Amount**

After selecting the account you will like to send BTC from, the next step is to enter an amount you would like to send. The amount entered appears in the BTC field, and you can see the corresponding amount in USD under transaction summary.

![Enter Amount](/img/resources/two-way-peg-app/enter-amount.png)

> - The minimum amount to send to perform a pegin operation is **0.005 BTC**, any amount less than this throws an error message: **“You cannot send that amount of BTC, you can only send a minimum of 0.005 BTC”**.
> - The minimum amount to send to perform a pegout operation is **0.004 RBTC**, any amount less than this throws an error message: **“You cannot send that amount of BTC, you can only send a minimum of 0.005 BTC”**.
> - The maximum amount to send to perform a pegout or pegout operation is **10 RBTC / BTC**, any amount greater than this throws an error message: **“The maximum accepted value is 10”**.

> - Note that the amount sent in BTC is the same amount to be received in RBTC on the Rootstock network.

**Step 6: Enter address**

To enter an address, we are provided with two options: 

- (1) Your connected Rootstock address. See [Account based addresses](/concepts/account-based-addresses/) 
- (2) Connect to a software wallet. E.g, Metamask. Here, the address is automatically filled in by the account that is connected to your metamask wallet.

![Enter address](/img/resources/two-way-peg-app/ledger-pegin-destination-address.png)

**Tips:**

> - Use the [address verifier](/developers/) to verify if an address is Rootstock-compatible and can be used to perform a peg in a transaction.
> - Use the [Metamask-Rootstock](https://metamask-landing.rifos.org/) tool to automatically connect to Rootstock mainnet or [manually connect metamask to the Rootstock mainnet or testnet](/developers/blockchain-essentials/browser/).

**Step 6a: Add a custom address**

Also you can input a custom Rootstock address, different than the connected address.
 
**Step 7: Select Transaction Fee**

Here, we can select the fee that will be used for this transaction, this is set on default to average.

![Select Transaction Fee](/img/resources/two-way-peg-app/select-pegin-fee.png)

> - The transaction fee is not part of the amount you’re sending via the 2 way peg app, it will only be used for the correct processing of the transaction on the Bitcoin network. Also see the different types of fees (slow, average, fast) and their corresponding cost in TBTC and USD, depending on preference, you can choose any of those three. See the [adjusting network fees](/resources/guides/two-way-peg-app/advanced-operations#adjusting-network-fees) section for more information. 
> - The time for each type of fee per transaction may vary depending on the number of transactions on the network and the fees charged at the time.

**Step 8: View transaction summary**

In this section, we can confirm the selected values:

- Destination Address
- Estimated time
- BTC fee (Network fee)
- Provider fee (always zero for this option)
- Amount to send
- Value to receive

![Review Transaction](/img/resources/two-way-peg-app/ledger-pegin-review-details.png)

> - In the instance of an error on this transaction, the amount will be sent to the address indicated in the **refund Bitcoin address** located in your hardware wallet.
> - See the [glossary](/resources/guides/two-way-peg-app/glossary/) section for the meaning of these values.

![Review Summary](/img/resources/two-way-peg-app/ledger-pegin-review-summary.png)


**Step 9: Accept and send the transaction to be broadcasted to the network.**


> After signing, the transaction is sent to the network to be processed, taking into account the fee value selected previously. 

**Step 10: View transaction status**

This shows the status of your transaction, with a transaction ID and a link to check the transaction on the explorer. 

![view transaction status](/img/resources/two-way-peg-app/ledger-pegin-tx-finished.png)

By clicking on the **See Transaction** button, the user can check the status directly in the transaction status page, by clicking in **Start Again** button the user can perform another transaction.

See the [Viewing Peg-in Transaction Status](/resources/guides/two-way-peg-app/pegin/status) section for more information. 

**Now you have successfully performed a peg-in transaction using the 2 way peg application.**
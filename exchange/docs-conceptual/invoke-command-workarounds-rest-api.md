---
title: Workarounds for Invoke-Command scenarios in REST API connections
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 7/5/2023
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer:
ms.localizationpriority: medium
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn about the alternatives to Invoke-Command commands in REST API connections using the EXO V3 module."
---

# Workarounds for Invoke-Command scenarios in REST API connections

In multiple connections to Exchange Online or Security & Compliance PowerShell in the same window, you use the [Invoke-Command](/powershell/module/microsoft.powershell.core/invoke-command) cmdlet to run scripts or commands in a specific remote PowerShell session. But, the **Invoke-Command** cmdlet doesn't work in [REST API connections](exchange-online-powershell-v2.md#rest-api-connections-in-the-exo-v3-module) to Exchange Online or Security & Compliance PowerShell.

This article offers REST API alternatives for scenarios that that use **Invoke-Command** commands.

## Scenario 1: Run Exchange Online cmdlets

This example finds the identity of any other user (`$Us = $User.Identity`).

> [!TIP]
> Other commands were required to get the values of `$User` and therefore `$Us`. Those commands aren't important. The overall approach that's being used is what's important.

- **In a remote PowerShell session**: Use the **Get-PSSession** cmdlet to store the remote PowerShell session details in the variable named `$Session`, and then run the following command:

  ```powershell
  Invoke-Command -Session $Session -ScriptBlock {Get-User $Using:Us | Select-Object DistinguishedName, ExternalDirectoryObjectId} -ErrorAction SilentlyContinue
  ```

- **In a REST API session**: Run the following command:

  ```powershell
  Get-User $Us | Format-List DistinguishedName, ExternalDirectoryObjectId
  ```

This example finds the identity of a group member:

- **In a remote PowerShell session**: Use the **Get-PSSession** cmdlet to store the remote PowerShell session details in the variable named `$Session`, and then run the following command:

  ```powershell
  Invoke-Command -Session $Session -ScriptBlock {Get-Recipient -Filter "Members -eq '$($User.DistinguishedName)'" -RecipientTypeDetails MailUniversalDistributionGroup | Select-Object DisplayName, ExternalDirectoryObjectId, RecipientTypeDetails} -ErrorAction SilentlyContinue -HideComputerName
  ```

- **In a REST API session**: Run the following command:

  ```powershell
  Get-Recipient -Filter "Members -eq '$($User.DistinguishedName)'" -RecipientTypeDetails MailUniversalDistributionGroup | Format-List DisplayName, ExternalDirectoryObjectId, RecipientTypeDetails
  ```

## Scenario 2: Run Exchange Online cmdlets and expand specific properties

This example finds all mailboxes where the GrantSendOnBehalfTo permission is set, and then returns the users who have the permission on the mailbox.

- **In a remote PowerShell session**: Use the **Get-PSSession** cmdlet to store the remote PowerShell session details in the variable named `$Session`, and then run the following command:

  ```powershell
  Invoke-Command -Session $Session -ScriptBlock {Get-Mailbox -Filter "GrantSendOnBehalfTo -ne `$null" -ErrorAction SilentlyContinue | Select-Object ExternalDirectoryObjectId, GrantSendOnBehalfTo -ExpandProperty GrantSendOnBehalfTo}
  ```

- **In a REST API session**: Run the following command:

  ```powershell
  $mailboxes = Get-Mailbox -Filter "GrantSendOnBehalfTo -ne `$null"

  foreach ($mailbox in $mailboxes)

  {
    $users = $mailbox | Select-Object GrantSendOnBehalfTo -ExpandProperty GrantSendOnBehalfTo | Get-User

    $users | Select-Object Name, Guid
  }
  ```

## Scenario 3: Run Exchange Online cmdlets in a specific PowerShell session when multiple sessions are present

This example shows how to create two PowerShell sessions in the same window and run the **Get-Mailbox** cmdlet in each session.

- **In a remote PowerShell session**:
  1. Use the **Get-PSSession** cmdlet to store the first remote PowerShell session details in the variable named `$Session1`.
  2. Use the **Get-PSSession** cmdlet to store the second remote PowerShell session details in the variable named `$Session2`.
  3. Run the following commands:

     ```powershell
     Invoke-Command -Session $Session1 -ScriptBlock {Get-Mailbox -ResultSize 1}

     Invoke-Command -Session $Session2 -ScriptBlock {Get-Mailbox -ResultSize 1}
     ```

- **In a REST API session**:
  1. In the first **Connect-ExchangeOnline** command, use the parameter _Prefix_ with the value C1.
  2. Store the first REST API connection details in the variable named `$ConnectionInfo1` by running the following command:

     ```powershell
     $ConnectionInfo1 = Get-ConnectionInformation | Where-Object { $_.ModulePrefix -eq "C1"}
     ```

  3. In the second **Connect-ExchangeOnline** command, use the parameter _Prefix_ with the value C2.
  4. Store the second REST API connection details in the variable named `$ConnectionInfo2` by running the following command:

     ```powershell
     $ConnectionInfo1 = Get-ConnectionInformation | Where-Object { $_.ModulePrefix -eq "C2"}
     ```

  5. Now you can run commands in either session. For example:

     ```powershell
     $CommandStr1 = "Get-$($ConnectionInfo1.ModulePrefix)Mailbox -ResultSize 10"

     Invoke-Expression $CommandStr1
     ```

     Or

     ```powershell
     $CommandStr2 = "Get-$($ConnectionInfo2.ModulePrefix)Mailbox -ResultSize 10"

     Invoke-Expression $CommandStr2
     ```

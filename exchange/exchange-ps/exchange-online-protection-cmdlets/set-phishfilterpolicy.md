---
title: "Set-PhishFilterPolicy"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: ed0f903a-6b05-4e84-a362-c10d0e9117c4
description: "This cmdlet is available only in the cloud-based service."
---

# Set-PhishFilterPolicy

This cmdlet is available only in the cloud-based service.
  
Use the **Set-PhishFilterPolicy** cmdlet to configure the phish filter policy in your cloud-based organization.
  
> [!NOTE]
> This cmdlet is only available in Office 365 Enterprise E5, or with Advanced Threat Protection licenses. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Set-PhishFilterPolicy -Identity <HostedConnectionFilterPolicyIdParameter> -SpoofAllowBlockList <String> [-Confirm [<SwitchParameter>]] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This configures the phish filter policy to block or allow all spoofed email messages from a source messaging server.
  
 **Step 1**: Write the summary output of the Get-PhishFilterPolicy cmdlet to a CSV file.
  
 **Step 2**: Add or modify the **TrueSender**, and **AllowedToSpoof** values in the CSV file, save the file, and then read the file and store it as a variable named `$UpdateSummarySpoofedSenders`.
  
 **Step 3**: Use the  `$UpdateSummarySpoofedSenders` variable to configure the phish filter policy.
  
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList | Export-CSV "C:\My Documents\Summary Spoofed Senders.csv"; $UpdateSummarySpoofedSenders = Get-Content -Raw "C:\My Documents\Summary Spoofed Senders.csv"; Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateSummarySpoofedSenders
```

### Example 2

This example configures the phish filter policy to selectively block or allow some spoofed email messages from a source messaging server.
  
 **Step 1**: Write the detailed output of the Get-PhishFilterPolicy cmdlet to a CSV file.
  
 **Step 2**: Add or modify the **TrueSender**, **SpoofedSender**, and **AllowedToSpoof** values in the CSV file, save the file, and then read the CSV file and store it as a variable named `$UpdateDetailedSpoofedSenders`.
  
 **Step 3**: Use the  `$UpdateDetailedSpoofedSenders` variable to configure the phish filter policy.
  
```
Get-PhishFilterPolicy -Identity Default -SpoofAllowBlockList -Detailed | Export-CSV "C:\My Documents\Detailed Spoofed Senders.csv"; $UpdateDetailedSpoofedSenders = Get-Content -Raw "C:\My Documents\Detailed Spoofed Senders.csv"; Set-PhishFilterPolicy -Identity Default -SpoofAllowBlockList $UpdateDetailedSpoofedSenders
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.HostedConnectionFilterPolicyIdParameter  <br/> |The  _Identity_ parameter specifies the phish filter policy that you want to modify. The only available value is `Default`.  <br/> |
| _SpoofAllowBlockList_ <br/> |Required  <br/> |System.String  <br/> | The _SpoofAllowBlockList_ parameter specifies the CSV file that you want to use to configure the phish filter policy. <br/>  A valid value for this parameter reads the CSV file and stores it as a variable. For example, run the command `$SpoofedSenders = Get-Content -Raw <PathAndFileName>.csv`, and then use the value  `$SpoofedSenders` for this parameter. <br/>  There are two basic options for the CSV file: <br/> **Block or allow all spoofed mail from the source**: You want to block or allow any and all spoofed messages from the specified message source, regardless of the spoofed email address. You can get the CSV file by running the command  `Get-PhishFilterPolicy -SpoofAllowBlockList | Export-CSV "<PathAndFileName>.csv"`. The important header fields (column headers) are **TrueSender** (the domain of the source messaging server from DNS records, or the IP address if there aren't any DNS records) and **AllowedToSpoof** (indicates whether the message source is allowed to send spoofed messages. Valid values are `Yes` or `No`).  <br/> **Block or allow some spoofed mail from the source**: You want to block or allow some spoofed messages from the specified message source, but not others. You can get the CSV file by running the command  `Get-PhishFilterPolicy -SpoofAllowBlockList -Detailed | Export-CSV "<PathAndFileName>.csv"`. The important header fields (column headers) are:  <br/> **TrueSender**: The domain of the source messaging server from DNS records, or the IP address if there aren't any DNS records. <br/> **SpoofedSender**: The spoofed email address in your organization that the messages appear to be coming from. <br/> **AllowedToSpoof**: Indicates whether messages that contain the spoofed sender from the source messaging server are allowed. Valid values are `Yes` or `No`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  


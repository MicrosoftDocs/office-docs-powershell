---
title: "Update-ExchangeHelp"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 3ab76294-cde8-4a15-9949-eb744713dd65
description: "This cmdlet is available only in on-premises Exchange."
---

# Update-ExchangeHelp

This cmdlet is available only in on-premises Exchange. 
  
Use the **Update-ExchangeHelp** cmdlet to find, download, and install the latest available help topics for the Exchange Management Shell on the local computer. If an available version is found based your installed version and languages of Exchange, the cmdlet downloads and integrates the updated version of Help in the Exchange Management Shell. This cmdlet is a required substitute for the **Update-Help** cmdlet that's available in Windows PowerShell.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Update-ExchangeHelp [-Force <SwitchParameter>]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example checks for the latest available version of Help for the Exchange Management Shell on the local computer. Because we used the _Force_ switch, the command checks for updates even if you ran the command less than 24 hours ago, and displays status and error messages.
  
```
Update-ExchangeHelp -Force
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Update-ExchangeHelp** cmdlet is available in Exchange Server 2013 or later.
  
You need to run the **Update-ExchangeHelp** cmdlet on each Exchange server. By default, the cmdlet requires an Internet connection, but you can configure an offline mode. For more information, see[Use Update-ExchangeHelp to update Exchange PowerShell help topics on Exchange servers](../../use-update-exchangehelp-to-update-exchange-powershell-help-topics-on-exchange-se.md)[Update-ExchangeHelp](update-exchangehelp.md).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> By default, the **Update-ExchangeHelp** cmdlet has a throttling period of 24 hours. If you run this cmdlet within 24 hours of the last time you ran it, it won't check for updates. You can use this switch to force the cmdlet to check for updates more frequently, and to display status or error messages. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.
  


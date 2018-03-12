---
title: "Get-ExchangeServerAccessLicenseUser"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: de51a293-5c86-4767-9add-1b32f0a1ccd3
description: "This cmdlet is available only in on-premises Exchange."
---

# Get-ExchangeServerAccessLicenseUser

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-ExchangeServerAccessLicenseUser** cmdlet to return a list of unique users for the specified license name. Each object contains the FQDN or primary SMTP address of the mailbox and the license that's associated with it.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ExchangeServerAccessLicenseUser -LicenseName <String>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns the unique users for the license named Exchange Server 2016 Standard Edition.
  
```
Get-ExchangeServerAccessLicenseUser -LicenseName "Exchange Server 2016 Standard Edition"
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-ExchangeServerAccessLicenseUser** cmdlet returns a collection of unique users for the specified license name. The list of unique users represents an estimate of your licenses when you run this cmdlet. Each object contains the FQDN or primary SMTP address of the mailbox and the license name to which it's associated.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _LicenseName_ <br/> |Required  <br/> |System.String  <br/> | The _LicenseName_ parameter specifies the license type that you want to view. You can find the available license type values by running the **Get-ExchangeServerAccessLicense** cmdlet. Valid values are: <br/>  Exchange Server 2016 Standard CAL <br/>  Exchange Server 2016 Enterprise CAL <br/>  Exchange Server 2016 Standard Edition <br/>  Exchange Server 2016 Enterprise Edition <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


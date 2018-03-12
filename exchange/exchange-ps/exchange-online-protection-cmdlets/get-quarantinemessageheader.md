---
title: "Get-QuarantineMessageHeader"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: eop
localization_priority: Normal
ms.assetid: 1ac639ba-97e5-4433-b2eb-c8386946a978
description: "This cmdlet is available only in the cloud-based service."
---

# Get-QuarantineMessageHeader

This cmdlet is available only in the cloud-based service. 
  
Use the **Get-QuarantineMessageHeader** cmdlet to view the message header of a quarantined message. The command will fail if the specified message is not in quarantine.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-QuarantineMessageHeader -Identity <QuarantineMessageIdentity>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays the message header of the quarantined message that has the specified **Identity** value.
  
```
Get-QuarantineMessageHeader 65ab8c7d-dcd3-4067-7c60-08d116c001c3\8b677327-0ef3-166b-e108-ff6cb380d191
```

### Example 2

This example displays the message header of the first message that's returned by **Get-QuarantineMessage** cmdlet.
  
```
$qMessages = Get-QuarantineMessage; Get-QuarantineMessageHeader $qMessages[0].Identity
```

## Detailed Description
<a name="DetailedDescription"> </a>

Standard SMTP message header syntax is described in RFC 5322. This cmdlet displays the message header exactly as it appears in the message. Individual header fields are not unfolded.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Management.FfoQuarantine.QuarantineMessageIdentity  <br/> |The  _Identity_ parameter specifies the quarantined message that you want to view the header for. The value is a unique quarantined message identifier in the format `GUID1\GUID2` (for example `c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7`.  <br/> You can find the  _Identity_ value for a quarantined message by using the **Get-QuarantineMessage** cmdlet. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


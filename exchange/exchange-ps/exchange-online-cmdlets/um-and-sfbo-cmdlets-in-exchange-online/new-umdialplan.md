---
title: "New-UMDialplan"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 21b8a099-92d0-49cf-b492-a052e0f23135
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-UMDialplan

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-UMDialplan** cmdlet to create a Unified Messaging (UM) dial plan to establish a link between UM IP gateways, UM hunt groups, and Mailbox servers to enable communication between Unified Messaging components.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-UMDialPlan -CountryOrRegionCode <String> -Name <String> -NumberOfDigitsInExtension <Int32> [-AccessTelephoneNumbers <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DefaultLanguage <UMLanguage>] [-DomainController <Fqdn>] [-FaxEnabled <$true | $false>] [-GenerateUMMailboxPolicy <$true | $false>] [-URIType <TelExtn | E164 | SipName>] [-VoIPSecurity <SIPSecured | Unsecured | Secured>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates the UM dial plan MyUMDialPlan that uses four-digit extension numbers.
  
```
New-UMDialplan -Name MyUMDialPlan -NumberOfDigitsInExtension 4
```

### Example 2

This example creates the UM dial plan MyUMDialPlan that uses five-digit extension numbers that support SIP URIs.
  
```
New-UMDialplan -Name MyUMDialPlan -URIType SipName -NumberOfDigitsInExtension 5
```

### Example 3

This example creates the unsecured UM dial plan MyUMDialPlan that supports E.164 numbers and that uses five-digit extension numbers.
  
```
New-UMDialplan -Name MyUMDialPlan -URIType E164 -NumberOfDigitsInExtension 5 -VoIPSecurity Unsecured
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **New-UMDialplan** cmdlet creates a UM dial plan in Active Directory. A UM dial plan object has an organization-wide scope and contains all configuration information related to a telephony dial plan. A UM dial plan is a required component for establishing Unified Messaging communications with Microsoft Exchange. When you create a UM dial plan, an understanding of telephony configurations and the implications of adding to or modifying a UM configuration is required.
  
> [!NOTE]
> After the new UM dial plan is created, a UM IP gateway and a Mailbox server must be associated with the UM dial plan to enable Unified Messaging operations. 
  
After this task is completed, a new UM dial plan is created.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _CountryOrRegionCode_ <br/> |Required  <br/> |System.String  <br/> |The  _CountryOrRegionCode_ parameter specifies the country or region code that precedes a telephone number used to place calls from other countries or regions to the country or region in which the UM dial plan is located. For example, 1 is the code used for North America, and 44 is the code used for the United Kingdom. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the display name of the UM dial plan. This description is presented to the administrator when a user is enabled for Unified Messaging. The UM dial plan name field can contain as many as 64 characters. <br/> |
| _NumberOfDigitsInExtension_ <br/> |Required  <br/> |System.Int32  <br/> |The  _NumberOfDigitsInExtension_ parameter specifies the fixed number of digits in an extension number. The range for this parameter is from 1 through 20 digits. <br/> |
| _AccessTelephoneNumbers_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _AccessTelephoneNumbers_ parameter specifies the telephone number or numbers used for subscriber access. These numbers are sometimes referred to as pilot or pilot ID numbers. The telephone number is limited to 32 characters. <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultLanguage_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.UMLanguage  <br/> |The  _DefaultLanguage_ parameter specifies the default language of the system. This default language is selected from the list of available languages. If there are no other UM language packs installed, the default value is en-US. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _FaxEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _FaxEnabled_ parameter specifies whether the Mailbox servers associated with the dial plan answer and process incoming fax calls. The default is `$true`.  <br/> |
| _GenerateUMMailboxPolicy_ <br/> |Optional  <br/> |System.Boolean  <br/> |The  _GenerateUMMailboxPolicy_ parameter specifies whether a default UM mailbox policy is created when the UM dial plan is created. The default setting is to create a UM mailbox when the UM dial plan is created. <br/> |
| _URIType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMUriType  <br/> |The  _URIType_ parameter specifies the URI type to be sent and received with SIP messages from the Private Branch eXchange (PBX). <br/> |
| _VoIPSecurity_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.UMVoIPSecurityType  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _VoIPSecurity_ parameter specifies whether the signaling channel is encrypted using mutual Transport Layer Security (TLS). The default setting is `Unsecured`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


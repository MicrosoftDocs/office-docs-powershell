---
title: "Set-IRMConfiguration"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 5df0b56a-7bcc-4be2-b4b8-4de16720476c
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-IRMConfiguration

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-IRMConfiguration** cmdlet to configure Information Rights Management (IRM) features on your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
> [!IMPORTANT]
> Configuring and using IRM features in an on-premises Exchange organization requires Active Directory Rights Management Services (AD RMS). 
  
```
Set-IRMConfiguration [-AzureRMSLicensingEnabled <$true | $false>] [-ClientAccessServerEnabled <$true | $false>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-EDiscoverySuperUserEnabled <$true | $false>] [-ExternalLicensingEnabled <$true | $false>] [-Force <SwitchParameter>] [-InternalLicensingEnabled <$true | $false>] [-JournalReportDecryptionEnabled <$true | $false>] [-LicensingLocation <MultiValuedProperty>] [-PublishingLocation <Uri>] [-RefreshServerCertificates <SwitchParameter>] [-RMSOnlineKeySharingLocation <Uri>] [-SearchEnabled <$true | $false>] [-ServiceLocation <Uri>] [-SimplifiedClientAccessEnabled <$true | $false>] [-TransportDecryptionSetting <Disabled | Optional | Mandatory>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables journal report decryption.
  
```
Set-IRMConfiguration -JournalReportDecryptionEnabled $true
```

### Example 2

This example enables transport decryption and enforces decryption. When decryption is enforced, messages that can't be decrypted are rejected, and an NDR is returned.
  
```
Set-IRMConfiguration -TransportDecryptionSetting Mandatory
```

### Example 3

This example enables licensing for external messages.
  
```
Set-IRMConfiguration -ExternalLicensingEnabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

IRM requires the use of an on-premises AD RMS server or the ILS service. IRM features can be selectively enabled or disabled.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AzureRMSLicensingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _AzureRMSLicensingEnabled_parameter specifies whether the Exchange Online organization can to connect directly to Azure Rights Management. Valid values are:  <br/>  `$true`: The Exchange Online organization can connect directly to Azure Rights Management. This enables data encryption policies.  <br/>  `$false`: The Exchange Online organization can't connect directly to Azure Rights Management.  <br/> |
| _ClientAccessServerEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ClientAccessServerEnabled_ parameter specifies whether to enable IRM for Outlook on the web (formerly known as Outlook Web App) and Exchange ActiveSync. Valid values are: <br/>  `$true`: IRM is enabled for Outlook on the web and Exchange ActiveSync. This is the default value. Note that enabling IRM in Outlook on the web requires additional configuration on AD RMS servers. For more information, see [Understanding IRM in OWA](http://technet.microsoft.com/library/60a49dab-17ac-4d2c-9b41-7d87250d6c00.aspx).  <br/>  `$false`: IRM is disabled for Outlook on the web and Exchange ActiveSync.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _EDiscoverySuperUserEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _EDiscoverySuperUserEnabled_ parameter specifies whether members of the Discovery Management role group can access IRM-protected messages in a discovery mailbox that were returned by a discovery search. Valid values are: <br/>  `$true`: Members of the Discovery Management role group can access IRM-protected messages in discovery mailboxes.  <br/>  `$false`: Members of the Discovery Management role group can't access IRM-protected messages in discovery mailboxes.  <br/>  For more information about In-Place eDiscovery and IRM-protected messages, see[In-Place eDiscovery](http://technet.microsoft.com/library/6377cb7a-3416-4e15-8571-c45d2160fc6f.aspx).  <br/> |
| _ExternalLicensingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _ExternalLicensingEnabled_ parameter specifies whether to enable IRM features for messages that are sent to external recipients. Valid values are: <br/>  `$true`: IRM features are enabled for external messages. This is the default value in Exchange Online.  <br/>  `$false`: IRM features are disabled for external messages. This is the default value in on-premises Exchange.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress the confirmation prompt that appears when you modify the _InternalLicensingEnabled_ parameter. You don't need to specify a value with this switch. <br/> |
| _InternalLicensingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _InternalLicensingEnabled_ parameter specifies whether to enable IRM features for messages that are sent to internal recipients. Valid values are: <br/>  `$true`: IRM features are enabled for internal messages. This is the default value in Exchange Online.  <br/>  `$false`: IRM features are disabled for internal messages. This is the default value in on-premises Exchange. Note that this value causes the **Get-RMSTemplate** to return no AD RMS templates. <br/> |
| _JournalReportDecryptionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _JournalReportDecryptionEnabled_ parameter specifies whether to enable journal report decryption. Valid values are: <br/>  `$true`: Journal report encryption is enabled. A decrypted copy of the IRM-protected message is attached to the journal report. This is the default value. Note that journal report decryption requires additional configuration on AD RMS servers. For more information, see [Understanding Journal Report Decryption](http://technet.microsoft.com/library/c063e2bd-2444-480d-8b35-73f31064a31b.aspx).  <br/>  `$false`: Journal report decryption is disabled.  <br/> |
| _LicensingLocation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _LicensingLocation_ parameter specifies the RMS licensing URLs. You can specify multiple URL values separated by commas. <br/> Typically, in on-premises Exchange, you only need to use this parameter in cross-forest deployments of AD RMS licensing servers.  <br/> |
| _PublishingLocation_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _PublishingLocation_ parameter specifies the AD RMS publishing URL. <br/> |
| _RefreshServerCertificates_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _RefreshServerCertificates_ switch clears all Rights Account Certificates (RACs), Computer Licensor Certificates (CLCs), and cached AD RMS templates from all Exchange servers in the organization. You don't need to specify a value with this switch. <br/> Clearing RACs, CLCs, and cached templates might be required during troubleshooting or after changing keys on the AD RMS cluster in your organization. For more information about RACs and CLCs, see [Understanding AD RMS Certificates](https://go.microsoft.com/fwlink/p/?linkId=197118).  <br/> |
| _RMSOnlineKeySharingLocation_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RMSOnlineKeySharingLocation_ parameter specifies the Azure Rights Management URL that's used to get the trusted publishing domain (TPD) for the Exchange Online organization. <br/> |
| _SearchEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _SearchEnabled_ parameter specifies whether to enable searching of IRM-encrypted messages in Outlook on the web. Valid values are: <br/>  `$true`: Searching IRM-encrypted messages in Outlook on the web is enabled. This is the default value.  <br/>  `$false`: Searching IRM-encrypted messages in Outlook on the web is disabled.  <br/> |
| _ServiceLocation_ <br/> |Optional  <br/> |System.Uri  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _ServiceLocation_ parameter specifies the AD RMS service URL. <br/> |
| _SimplifiedClientAccessEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _SimplifiedClientAccessEnabled_parameter specifies whether to enable the **Protect** button in Outlook on the web. Valid values are: <br/>  `$true`: The **Protect** button is enabled in Outlook on the web. <br/>  `$false`: The **Protect** button is disabled in Outlook on the web. This is the default value. <br/> |
| _TransportDecryptionSetting_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.TransportDecryptionSetting  <br/> | The _TransportDecryptionSetting_ parameter specifies the transport decryption configuration. Valid values are: <br/>  `Disabled`: Transport decryption is disabled for internal and external messages.  <br/>  `Mandatory`: Messages that can't be decrypted are rejected with a non-delivery report (also known as an NDR or bounce message).  <br/>  `Optional`: Messages are decrypted if possible, but are delivered even if decryption fails. This is the default value.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


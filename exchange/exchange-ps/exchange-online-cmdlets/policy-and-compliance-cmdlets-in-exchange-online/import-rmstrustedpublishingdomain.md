---
title: "Import-RMSTrustedPublishingDomain"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 7c5e7a0f-9c9d-4863-bab8-bcc729cc16a6
description: "This cmdlet is available only in the cloud-based service."
---

# Import-RMSTrustedPublishingDomain

This cmdlet is available only in the cloud-based service.
  
Use the **Import-RMSTrustedPublishingDomain** cmdlet to import a trusted publishing domain (TPD) from an on-premises server running Active Directory Rights Management Services (AD RMS) or from RMS Online into your cloud-based organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Import-RMSTrustedPublishingDomain -ExtranetLicensingUrl <Uri> -FileData <Byte[]> -IntranetLicensingUrl <Uri> -Password <SecureString> <COMMON PARAMETERS>
```

## Examples
<a name="Examples"> </a>

### Example 1

This example imports a TPD from an AD RMS server into a cloud-based organization. The TPD uses the following values:
  
- **Path to exported XML file**: C:\My Documents\Contoso.xml
    
- **Password of exported XML file**: Pa$$word1
    
- **External licensing URL**: https://rms.contoso.com/_wmcs/licensing
    
- **Internal licensing URL**: https://RMS01/_wmcs/licensing
    
- **TPD name**: Contoso TPD
    
```
Import-RMSTrustedPublishingDomain -Name "Contoso TPD" -FileData $([byte[]](Get-Content -Encoding byte -Path "C:\My Documents\Contoso.xml" -ReadCount 0)) -Password (ConvertTo-SecureString -String 'Pa$$word1' -AstPlainText -Force)-ExtranetLicensingUrl https://rms.contoso.com/_wmcs/licensing -IntranetLicensingUrl https://RMS01/_wmcs/licensing
```

## Detailed Description
<a name="DetailedDescription"> </a>

A TPD contains the settings needed to use RMS features in your organization. For example, users can apply RMS templates to email messages. After you export the TPD from an on-premises AD RMS server to an XML file, you can import the XML file into your cloud-based organization.
  
If the  _InternalLicensingEnabled_ parameter value is `$true` on the **Set-IRMConfiguration** cmdlet, all TPDs require a private key. If the _InternalLicensingEnabled_ parameter value is `$false`, TPDs don't require a private key. However, the only RMS feature available to the organization is Outlook protection rules. Typically, TPDs without private keys are created when the AD RMS server uses a hardware-based cryptographic service provider (CSP) or a custom CSP.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ExtranetLicensingUrl_ <br/> |Required  <br/> |System.Uri  <br/> |The  _ExtranetLicensingUrl_ parameter specifies the external licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content. <br/> By default, the value of the  _ExtranetLicensingUrl_ parameter is `https://<FQDN>/_` `wmcs/licensing`.  <br/> |
| _FileData_ <br/> |Required  <br/> |System.Byte[]  <br/> |The  _FileData_ parameter specifies the XML file you want to import. The XML file contains the TPD you exported from the on-premises AD RMS server. <br/> A valid value for this parameter requires you to read the file to a byte-encoded object using the **Get-Content** cmdlet. For example, `([Byte[]](Get-Content -Encoding Byte -Path "C:\My Documents\<filename>" -ReadCount 0))`.  <br/> |
| _IntranetLicensingUrl_ <br/> |Required  <br/> |System.Uri  <br/> |The  _IntranetLicensingUrl_ parameter specifies the internal licensing URL of the on-premises AD RMS server that's stamped into the publishing license. The publishing license specifies the users that can open the rights-protected content, under which conditions the content may be opened by the user, and the rights that each user will have to the rights-protected content. <br/> By default, the value of the  _IntranetLicensingUrl_ parameter is `https://<server name>/_wmcs/licensing`.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the name of the TPD. If you use the _RefreshTemplates_ switch, the value must match the name of the previously imported TPD. <br/> |
| _Password_ <br/> |Required  <br/> |System.Security.SecureString  <br/> |The  _Password_ parameter specifies the password of the TPD that you want to import. The password value must match the password in the XML file when you exported the TPD from the on-premises AD RMS server. <br/> This parameter uses the syntax  `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`. Or, to be prompted to enter the password and store it as a variable, run the command  `$password = Read-Host "Enter password" -AsSecureString`, and then use the value  `$password` for this parameter. <br/> |
| _RMSOnline_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in the cloud-based service.  <br/> The  _RMSOnline_ switch specifies that the TPD is imported from RMS Online. You don't need to specify a value with this switch. <br/> |
| _RMSOnlineConfig_ <br/> |Required  <br/> |System.Byte[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RMSOnlineKeys_ <br/> |Required  <br/> |System.Collections.Hashtable  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Default_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Default_ switch specifies that this is the default TPD. You don't need to specify a value with this switch. <br/> The default TPD displays RMS templates and provides rights protection to all new content. There can be only one default TPD in an organization.  <br/> The first TPD you import into your organization is automatically set as the default.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ExtranetCertificationUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _ExtranetCertificationUrl_ parameter specifies the external certification URL of the on-premises AD RMS server that's stamped into the Rights Account Certificate (RAC). The RAC establishes a user's identity in the AD RMS system, and is used to decrypt content. <br/> By default, the value of the  _ExtranetCertificationUrl_ parameter is `https://<FQDN>/_` `wmcs/certification/servercertification.asmx`.  <br/> |
| _IntranetCertificationUrl_ <br/> |Optional  <br/> |System.Uri  <br/> |The  _IntranetCertificationUrl_ parameter specifies the internal certification URL of the on-premises AD RMS server that's stamped into the RAC. The RAC establishes a user's identity in the AD RMS system, and is used to decrypt content. <br/> By default, the value of the  _IntranetCertificationUrl_ parameter is `https://<server name>/_wmcs/certification/servercertification.asmx`.  <br/> |
| _RefreshTemplates_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _RefreshTemplates_ switch specifies whether to update the RMS templates in a previously imported TPD. You don't need to specify a value with this switch. <br/>  When you add, modify, or remove RMS templates in a TPD on the AD RMS server, you export the updated TPD to a new XML file, and import the new XML file in your cloud-based organization. The _RefreshTemplates_ switch uses the following rules: <br/>  Only the _FileData_,  _Password_, and  _Name_ parameters are required. The value of the _Name_ parameter must match the name of the previously imported TPD. <br/>  If the new XML file doesn't contain an RMS template that was defined in the previously imported TPD, the RMS template is removed from the cloud-based organization. <br/>  If the new XML file contains an updated RMS template that was defined in the previously imported TPD, the RMS template settings are updated in the cloud-based organization. However, the RMS template isn't changed from `Archived` to `Distributed` or vice versa. <br/>  If the new XML file contains an RMS template that wasn't imported in the original TPD, the RMS template is added to the cloud-based organization in the `Archived` state. To make the new RMS template usable, you must change its state from `Archived` to `Distributed` using the **Set-RMSTemplate** cmdlet. <br/> |
| _RMSOnlineAuthCertThumbprintOverride_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RMSOnlineAuthorTest_ <br/> |Optional  <br/> |System.Collections.Hashtable  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _RMSOnlineOrgOverride_ <br/> |Optional  <br/> |System.Guid  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


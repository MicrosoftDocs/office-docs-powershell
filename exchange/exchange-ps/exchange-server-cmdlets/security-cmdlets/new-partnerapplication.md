---
title: "New-PartnerApplication"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: e7cce1f0-d4f1-4eb9-a136-551725a35599

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# New-PartnerApplication

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **New-PartnerApplication** cmdlet to create a partner application configuration.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-PartnerApplication -AuthMetadataUrl <String> [-TrustAnySSLCertificate <SwitchParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new HRApp partner application named HRApp.
  
```
New-PartnerApplication -Name HRApp -ApplicationIdentifier 00000006-0000-0dd1-ac00-000000000000
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can configure partner applications such as Microsoft SharePoint to access Exchange resources. Use the **New-PartnerApplication** cmdlet to create a partner application configuration for an application that needs to access Exchange resources. For details, see[Integration with SharePoint and Lync](https://technet.microsoft.com/library/056b29f6-e0e9-4974-b763-002518857a93.aspx).
  
We recommend that you use the  `Configure-EnterprisePartnerApplication.ps1` script in the `%ExchangeInstallPath%Scripts` folder to configure partner applications.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _ApplicationIdentifier_ <br/> |Required  <br/> |System.String  <br/> |The _ApplicationIdentifier_ parameter specifies a unique application identifier for the partner application that uses an authorization server. When specifying a value for the _ApplicationIdentifier_ parameter, you must also use the _UseAuthServer_ parameter. <br/> |
| _AuthMetadataUrl_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _AuthMetadataUrl_ parameter specifies the URL that Exchange can retrieve the AuthMetadata document from for a partner application that doesn't use an authorization server. When specifying the _AuthMetadataUrl_ parameter for a partner application, you can't specify the _ApplicationIdentifier_ and _UseAuthServer_ parameters. <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The _Name_ parameter specifies a name for the partner application. <br/> |
| _AcceptSecurityIdentifierInformation_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _AcceptSecurityIdentifierInformation_ parameter specifies whether Exchange should accept security identifiers (SIDs) from another trusted Active Directory forest for the partner application. By default, new partner applications are configured to not accept SIDs from another forest. If you're in deployment with a trusted forest, set the parameter to `$true`.  <br/> |
| _AccountType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.SupportedAccountType  <br/> | The _AccountType_parameter specifies the type of Microsoft account that's required for the partner application. Valid values are:  <br/>  `OrganizationalAccount`: This is the default value  <br/>  `ConsumerAccount` <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |The _Enabled_ parameter specifies whether the partner application is enabled. By default, new partner applications are enabled. Set the parameter to `$false` to create the application configuration in a disabled state. <br/> |
| _LinkedAccount_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.UserIdParameter  <br/> |The _LinkedAccount_ parameter specifies a linked Active Directory user account for the application. Exchange evaluates Role Based Access Control (RBAC) permissions for the linked account when authorizing a token used to perform a task. <br/> |
| _Realm_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _Realm_ parameter specifies a security realm for the partner application. If the token is from a domain that's not an accepted domain, Exchange checks the realm specified in the token. In such a scenario, only tokens with the same realm specified in the partner application can access Exchange resources. <br/> |
| _TrustAnySSLCertificate_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _TrustAnySSLCertificate_ switch specifies whether Exchange should trust certificates issued by a certification authority (CA) not trusted by the server. <br/> > [!CAUTION]> We don't recommend using this switch in a production environment.           |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


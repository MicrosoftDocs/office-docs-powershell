---
title: "Set-ManagementScope"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 568aa7c5-4b59-4e10-9139-782d49cd0969
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-ManagementScope

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-ManagementScope** cmdlet to change an existing management scope.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ManagementScope [-RecipientRestrictionFilter <String>] [-RecipientRoot <OrganizationalUnitIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the recipient restriction filter on the Seattle Mailboxes management scope to match all mailboxes that have Seattle in the **City** mailbox property.
  
```
Set-ManagementScope "Seattle Mailboxes" -RecipientRestrictionFilter { City -Eq "Seattle" -And RecipientType -Eq "UserMailbox" }
```

### Example 2

This example changes the recipient root for the Sales Recipients management scope to match only recipient objects contained under the contoso.com/Sales OU.
  
```
Set-ManagementScope "Sales Recipients" -RecipientRoot contoso.com/Sales
```

### Example 3

This example changes the Active Directory site used in the server restriction filter for the Vancouver Servers management scope to "NA-CDN-Vancouver,CN=Sites,CN=Configuration,DC=contoso,DC=com".
  
```
Set-ManagementScope "Vancouver Servers" -ServerRestrictionFilter {ServerSite -Eq "NA-CDN-Vancouver,CN=Sites,CN=Configuration,DC=contoso,DC=com"}
```

## Detailed Description
<a name="DetailedDescription"> </a>

If you change a scope that has been associated with management role assignments using the **New-ManagementRoleAssignment** cmdlet, the updated scope applies to all the associated role assignments. For more information about changing scopes, see[Change a Management Role Scope](https://technet.microsoft.com/library/9180e1e0-c352-4ccd-8da6-885a2e309867.aspx).
  
For more information about regular and exclusive scopes, see [Understanding Management Scopes](https://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _DatabaseRestrictionFilter_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DatabaseRestrictionFilter_ parameter specifies the filter to apply to database objects. When the _DatabaseRestrictionFilter_ parameter is specified, only database objects that match the filter are included in the scope. If you use the _DatabaseRestrictionFilter_ parameter, you can't use the _ServerRestrictionFilter_, _RecipientRestrictionFilter_ or _RecipientRoot_ parameters. For a list of filterable database properties, see[Understanding Management Role Scopes](https://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).  <br/> |
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.ManagementScopeIdParameter  <br/> |The _Identity_ parameter specifies the name of the management scope to modify. If the name contains spaces, enclose it in quotation marks ("). <br/> |
| _ServerRestrictionFilter_ <br/> |Required  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _ServerRestrictionFilter_ parameter specifies the filter to apply to server objects. When the _ServerRestrictionFilter_ parameter is specified, only recipient objects that match the filter are included in the scope. If you use the _ServerRestrictionFilter_ parameter, you can't use the _DatabaseRestrictionFilter_, _RecipientRestrictionFilter_, or _RecipientRoot_ parameters. For a list of filterable server properties, see[Understanding Management Role Scopes](https://technet.microsoft.com/library/24ed4a38-438a-4223-9f9c-5d4dea4b046b.aspx).  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The _Name_ parameter specifies the name of the management scope. The management scope name can be a maximum of 64 characters. If the name contains spaces, enclose it in quotation marks ("). <br/> |
| _RecipientRestrictionFilter_ <br/> |Optional  <br/> |System.String  <br/> |The _RecipientRestrictionFilter_ parameter specifies the filter to apply to recipient objects. When the _RecipientRestrictionFilter_ parameter is specified, only server objects that match the filter are included in the scope. If you use the _RecipientRestrictionFilter_ parameter, you can't use the _DatabaseRestrictionFilter_ or _ServerRestrictionFilter_ parameters. <br/> |
| _RecipientRoot_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> |The _RecipientRoot_ parameter specifies the organizational unit (OU) under which the filter specified with the _RecipientRestrictionFilter_ parameter should be applied. If you use the _RecipientRoot_ parameter, you can't use the _ServerRestrictionFilter_ or _DatabaseRestrictionFilter_ parameters. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


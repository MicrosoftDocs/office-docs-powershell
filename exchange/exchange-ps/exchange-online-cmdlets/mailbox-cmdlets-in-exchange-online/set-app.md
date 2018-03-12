---
title: "Set-App"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 2/1/2018
ms.audience: Developer
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 3506b2b9-dc23-4ed9-84f5-8839c4c3c974

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-App

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Set-App** cmdlet to modify the availability of organization apps.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-App -Identity <AppIdParameter> [-Confirm [<SwitchParameter>]] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>] [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-OrganizationApp <SwitchParameter>] [-PrivateCatalog <SwitchParameter>] [-ProvidedTo <Everyone | SpecificUsers>] [-UserList <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example changes the organization app named FinanceTestApp, which was installed to everyone in the organization, to be provided to members of the Finance Team group and to be enabled by default.
  
```
$a= Get-DistributionGroupMember -Identity "Finance Team"; Set-App -OrganizationApp -Identity 3f10017a-9bbe-4a23-834b-6a8fe3af0e37 -ProvidedTo SpecificUsers -UserList $a.Identity -DefaultStateForUser Enabled
```

For more information, see [Manage User Access to Apps for Outlook](http://technet.microsoft.com/library/e5833dec-a23a-439e-ac03-92671817bff8.aspx).
  
### Example 2

This example disables the organization app named FinanceTestApp across the organization and hides it from end user view.
  
```
Set-App -OrganizationApp -Identity 3f10017a-9bbe-4a23-834b-6a8fe3af0e37 -Enabled $false
```

For more information, see [Manage User Access to Apps for Outlook](http://technet.microsoft.com/library/e5833dec-a23a-439e-ac03-92671817bff8.aspx).
  
## Detailed Description
<a name="DetailedDescription"> </a>

The **Set-App** cmdlet can only be used when configuring the availability of an organization app. This task requires that the specified app has already been installed (for example, that the app has been installed with the **New-App** cmdlet, or that it's a default app for Outlook).
  
Default apps in Outlook on the web and apps that you've installed for use by users in your organization are known as organization apps. Organization apps can't be removed by end users, but can be enabled or disabled. If an app is an organization app (scope default or organization), the delete control on the toolbar is disabled for end users. Administrators are able to remove organization apps. Administrators can't remove default apps, but they can disable them for the entire organization.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Exchange.Configuration.Tasks.AppIdParameter  <br/> |The  _Identity_ parameter specifies the **AppID** (GUID value) of the app that you want to modify. To find the GUID value of an app, run the command `Get-App | Format-Table -Auto DisplayName,AppId`.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DefaultStateForUser_ <br/> |Optional  <br/> |Microsoft.Exchange.Management.Extension.DefaultStateForUser  <br/> | The _DefaultStateForUser_ parameter specifies the default initial state of the organization app for the specified users. Valid values are: <br/>  `Enabled`: The organization app is enabled.  <br/>  `Disabled`: The organization app is disabled. This is the default value.  <br/>  `AlwaysEnabled`: The organization app is enabled, and users can't disable it.  <br/>  You use this parameter with the _OrganizationApp_ switch. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Enabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Enabled_ parameter specifies whether the app is available to users in the organization. Valid values are: <br/>  `$true`: The app is enabled for the specified users. This is the default value.  <br/>  `$false`: The app isn't enabled for any users in the organization. This hides the app from user view for all users.  <br/> > [!CAUTION]>  This setting overrides the _ProvidedTo_,  _UserList_, and  _DefaultStateForUser_ settings. This setting doesn't prevent users from installing their own instance of the app if they have install permissions.          |
| _OrganizationApp_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _OrganizationApp_ switch specifies that the scope of the app is organizational (not bound to a specific user). You don't need to specify a value with this switch. <br/> |
| _PrivateCatalog_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _PrivateCatalog_ switch specifies that the app you want to modify is located in a private catalog. You don't need to specify a value with this switch. <br/> |
| _ProvidedTo_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ApplicationLogic.Extension.ClientExtensionProvidedTo  <br/> | The _ProvidedTo_ parameter specifies the availability of the app in your organization. Valid value are: <br/>  `Everyone`: The app is provided to every user in the organization. This is the default value. Every user sees this app listed in the **installed apps** list in Outlook on the web Options. When an app in the installed apps list is enabled, users can use the features of this app in their email. All users are blocked from installing their own instances of this app, including but not limited to users with install apps permissions. <br/>  `SpecificUsers`: This app is provided to only the users specified by the  _UserList_ parameter. All other users don't see this organizational app in their management view, nor will it activate in their mail or calendar items. The specified users are also blocked from installing their own instance of this app. Unlisted users aren't blocked from installing their own instance of this app. <br/>  You use this parameter with the _OrganizationApp_ switch. <br/> |
| _UserList_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UserList_ parameter specifies who can usean organizational app. Valid values are mailboxes or mail users in your organization. You can use any value that uniquely identifies the user. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/>  You use this parameter with the _OrganizationApp_ switch. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


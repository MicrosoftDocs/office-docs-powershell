---
title: "Set-AdminAuditLogConfig"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 9d77294d-a501-4af6-8c3b-753235c741a7

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Set-AdminAuditLogConfig

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.
  
Use the **Set-AdminAuditLogConfig** cmdlet to configure the administrator audit logging configuration settings.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx).
  
```
Set-AdminAuditLogConfig [-Identity <OrganizationIdParameter>] [-AdminAuditLogAgeLimit <EnhancedTimeSpan>] [-AdminAuditLogCmdlets <MultiValuedProperty>] [-AdminAuditLogEnabled <$true | $false>] [-AdminAuditLogExcludedCmdlets <MultiValuedProperty>] [-AdminAuditLogParameters <MultiValuedProperty>] [-Confirm [<SwitchParameter>]] [-DomainController <Fqdn>] [-Force <SwitchParameter>] [-LoadBalancerCount <Int32>] [-LogLevel <None | Verbose>] [-Name <String>] [-RefreshInterval <Int32>] [-TestCmdletLoggingEnabled <$true | $false>] [-UnifiedAuditLogIngestionEnabled <$true | $false>] [-WhatIf [<SwitchParameter>]]
```

## Examples
<a name="Examples"> </a>

### Example 1

This example enables administrator audit logging for every cmdlet and every parameter in the organization, with the exception of **Get** cmdlets.
  
```
Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets * -AdminAuditLogParameters *
```

### Example 2

This example enables administrator audit logging for specific cmdlets run in the organization. Any parameter used on the specified cmdlets is logged. Every time a specified cmdlet is run, a log entry is added to the audit log.
  
```
Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox, *Management*, *TransportRule* -AdminAuditLogParameters *
```

### Example 3

This example enables administrator audit logging only for specific parameters that are specified when running specific cmdlets. The parameter name and the cmdlet name must match the strings specified with the  _AdminAuditLogCmdlets_ and _AdminAuditLogParameters_ parameters. For example, a log entry is generated only when a parameter with the string "Address" in the name is run on a cmdlet with the string "Mailbox" in its name.
  
```
Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox* -AdminAuditLogParameters *Address*
```

## Detailed Description
<a name="DetailedDescription"> </a>

When audit logging is enabled, a log entry is created for each cmdlet run, excluding **Get** cmdlets. Log entries are stored in a hidden mailbox and accessed using the **Search-AdminAuditLog** or **New-AdminAuditLogSearch** cmdlets.
  
> [!IMPORTANT]
> The **Set-AdminAuditLogConfig**, **Enable-CmdletExtensionAgent**, and **Disable-CmdletExtensionAgent** cmdlets are logged when they're run regardless of whether administrator audit logging is enabled or disabled.> Administrator audit logging relies on Active Directory replication to replicate the configuration settings you specify to the domain controllers in your organization. Depending on your replication settings, the changes you make may not be immediately applied to all Exchange servers in your organization. > Changes to the audit log configuration may take up to 60 minutes to be applied on computers that have the Exchange Management Shell open at the time a configuration change is made. If you want to apply the changes immediately, close and reopen the Exchange Management Shell on each computer. 
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AdminAuditLogAgeLimit_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.EnhancedTimeSpan  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AdminAuditLogAgeLimit_ parameter specifies how long each log entry should be kept before it's deleted. The default age limit is 90 days. <br/> To specify a value, enter it as a time span:  `dd.hh:mm:ss` where `dd` = days, `hh` = hours, `mm` = minutes, and `ss` = seconds. <br/> For example, to set the audit log age limit to 120 days, use the syntax  `120.00:00:00`.  <br/> > [!CAUTION]> Setting the age limit to a value less than the current limit causes log entries older than the new limit to be deleted. > Setting the age limit to  `0` purges the audit log of all entries.          |
| _AdminAuditLogCmdlets_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AdminAuditLogCmdlets_ parameter specifies which cmdlets should be audited. You can specify one or more cmdlets, separated by commas. You can also use the wildcard character (*) to match multiple cmdlets in one or more of the entries in the cmdlet list. To audit all cmdlets, specify only the wildcard character (*). <br/> |
| _AdminAuditLogEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AdminAuditLogEnabled_ parameter specifies whether administrator audit logging is enabled. The default value is `$false`. The valid values are  `$true` and `$false`. You must specify an administrator audit log mailbox before you enable logging.  <br/> > [!NOTE]> Changes to the administrator audit log configuration are always logged, regardless of whether audit logging is enabled or disabled.           |
| _AdminAuditLogExcludedCmdlets_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AdminAuditLogExcludedCmdlets_ parameter specifies which cmdlets should be excluded from auditing. Use this parameter if you want to exclude specific cmdlets you don't want to audit even if they match a wildcard string specified in the _AdminAuditLogCmdlets_ parameter. <br/> You can specify one or more cmdlets, separated by commas. You can also use the wildcard character (\*) to match multiple cmdlets in one or more of the entries in the cmdlet list. You can't specify only the wildcard character (\*).  <br/> If you want to clear the list, specify a value of  `$null`.  <br/> |
| _AdminAuditLogParameters_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _AdminAuditLogParameters_ parameter specifies which parameters should be audited on the cmdlets you specified using the _AdminAuditLogCmdlets_ parameter. You can specify one or more parameters, separated by commas. You can also use the wildcard character (*) to match multiple parameters in one or more of the entries in the parameters list. To audit all parameters, specify only the wildcard character (*). <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Force_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _Force_ switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _LoadBalancerCount_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _LogLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.SystemConfiguration.AuditLogLevel  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _LogLevel_ parameter specifies whether additional properties should be included in the log entries. Valid values are `None` and `Verbose`.  <br/> By default, the  `CmdletName`,  `ObjectName`,  `Parameters` (values), and the `Caller`,  `Succeeded`, and  `RunDate` properties are included in log entries. When the `Verbose` value is used, the `ModifiedProperties` (old and new) and `ModifiedObjectResolvedName` properties are included in the log entries. <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Name_ parameter specifies the name of the **AdminAuditLogConfig** object. <br/> > [!NOTE]> You don't need to specify this parameter when you configure administrator audit logging. It doesn't affect your configuration or how administrator audit logging works.           |
| _RefreshInterval_ <br/> |Optional  <br/> |System.Int32  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _TestCmdletLoggingEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _TestCmdletLoggingEnabled_ parameter specifies whether the execution of test cmdlets should be logged. Test cmdlets begin with the verb **Test**. Valid values are `$true` and `$false`. The default value is  `$false`.  <br/> > [!IMPORTANT]> Test cmdlets can produce a large amount of information. As such, you should only enable logging of test cmdlets for a short period of time.           |
| _UnifiedAuditLogIngestionEnabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | This parameter is available only in the cloud-based service. <br/>  The _UnifiedAuditLogIngestionEnabled_ parameter specifies whether to enable or disable the recording of user and admin activities in the Office 365 audit log. Valid values are: <br/>  `$true`: User and admin activities are recorded in the Office 365 audit log, and you can search the Office 365 audit log.  <br/>  `$false`: User and admin activities aren't recorded in the Office 365 audit log, and you can't search the Office 365 audit log. This is the default value.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _WhatIf_ switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


---
title: "New-ActivityAlert"
ms.author: chrisda
author: chrisda
ms.date: 1/12/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: c84fb3ae-c608-4ff2-9d1b-3c423a815d9e
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# New-ActivityAlert

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **New-ActivityAlert** cmdlet to create activity alerts in the Security &amp; Compliance Center. Activity alerts send you email notifications when users perform specific activities in Office 365.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
New-ActivityAlert -Operation <MultiValuedProperty> [-Type <Custom | ElevationOfPrivilege | SimpleAggregation | AnomalousAggregation>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example creates a new activity alert named External Sharing Alert that has the following properties:
  
- **Operation**: `sharingset` and `sharinginvitationcreated`.
    
- **NotifyUser**: `chrisda@contoso.com` and `michelle@contoso.com`.
    
- **UserId**: `laura@contoso.com` and `julia@contoso.com`.
    
- **Description**: Notification for external sharing events by laura@contoso.com and julia@contoso.com.
    
```
New-ActivityAlert -Name "External Sharing Alert" -Operation sharingset,sharinginvitationcreated -NotifyUser chrisda@contoso.com,michelle@contoso.com -UserId laura@contoso.com,julia@contoso.com -Description "Notification for external sharing events by laura@contoso.com and julia@contoso.com"
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Multiplier_ <br/> |Required  <br/> |System.Double  <br/> |The  _Multiplier_parameter specifies the number of events that trigger an activity alert. The value of this parameter indicates a multiplier from a baseline value.  <br/> You can only use this parameter with the  _Type_ parameter value `AnomalousAggregation`.  <br/> |
| _Name_ <br/> |Required  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the activity alert. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _NotifyUser_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NotifyUser_ parameter specifies the email addressesfor notification messages. You can specify internal and external email addresses. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> |
| _Operation_ <br/> |Required  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Operation_ parameter specifies the activitiesthat trigger activity alerts. <br/> A valid value for this parameter is an activity that's available in the Office 365 audit log. For a description of these activities, see [Search the audit log in the Office 365 Security &amp; Compliance Center](http://go.microsoft.com/fwlink/p/?LinkId=824986).  <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> You can't use this parameter if the  _Type_ parameter value is `ElevationOfPrivilege`.  <br/> |
| _Threshold_ <br/> |Required  <br/> |System.Int32  <br/> |The  _Threshold_ parameter specifies the number of events that trigger an activity alert in the time interval that's specified by the _TimeWindow_ parameter. The minimum value for this parameter is 3. <br/> You can only use this parameter with the  _Type_ parameter value `SimpleAggregation`.  <br/> |
| _TimeWindow_ <br/> |Required  <br/> |System.Int32  <br/> |The  _TimeWindow_ parameter specifies the time window in minutes that's used by the _Threshold_ parameter. <br/> You can only use this parameter with the  _Type_ parameter value `SimpleAggregation`.  <br/> |
| _Type_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.AlertType  <br/> | The _Type_ parameter specifies the type alert. Valid values are: <br/>  `Custom`: An alert is created for the activities you specify with the  _Operation_ parameter. Typically, you don't need to use this value (if you don't use the _Type_ parameter, and you specify the activities with the _Operations_ parameter, the value `Custom` is automatically added to the **Type** property). <br/>  `ElevationOfPrivilege`: An alert is created for a predefined list of elevation of privilege activities ( _Operation_ parameter values). The activities are `Add-RoleGroupMember`,  `New-ManagementRoleAssignment`,  `Add member to role.`,  `Update-RoleGroupMember`,  `New-RoleGroup`,  `Set-RoleGroup`,  `Set-Mailbox`, and  `Set-ManagementRoleEntry`. You can't use the  _Operation_ parameter when you use the `ElevationOfPrivilege` value (on the **New-ActivityAlert** or **Set-ActivityAlert** cmdlets). <br/>  `SimpleAggregation`: An alert is created based on the activities defined by the  _Operation_ and _Condition_ parameters, the number of activities specified by the _Threshold_ parameter, and the time period specified by the _TimeWindow_ parameter. <br/>  `AnomalousAggregation`: An alert is created based the activities defined by the  _Operation_ and _Condition_ parameters, and the number of activities specified by the _Multiplier_ parameter. <br/> **Note**: You can't change the  _Type_ value in an existing activity alert. <br/> |
| _Category_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.AlertRuleCategory  <br/> | The _Category_ parameter specifies a category for the activity alert. Valid values are: <br/>  `None` (This is the default value) <br/>  `DataLossPrevention` <br/>  `ThreatManagement` <br/>  `DataGovernance` <br/>  `AccessGovernance` <br/>  `Others` <br/> |
| _Condition_ <br/> |Optional  <br/> |System.String  <br/> |The  _Condition_parameter specifies filter conditions for event aggregation.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the activity alert. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Disabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Disabled_ parameter specifies whether the activity alert is enabled or disabled. Valid values are: <br/>  `$true`: The activity alert is disabled.  <br/>  `$false`: The activity alert is enabled. This is the default value.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EmailCulture_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _EmailCulture_ parameter specifies the language of the notification email message. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _RecordType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ApplicationLogic.AuditRecordType  <br/> | The _RecordType_ parameter specifies a record type label for the activity alert. <br/>  Valid values are: <br/>  `AzureActiveDirectory` <br/>  `AzureActiveDirectoryAccountLogon` <br/>  `AzureActiveDirectoryStsLogon` <br/>  `ComplianceDLPExchange` <br/>  `ComplianceDLPSharePoint` <br/>  `CRM` <br/>  `DataCenterSecurityCmdlet` <br/>  `Discovery` <br/>  `ExchangeAdmin` <br/>  `ExchangeAggregatedOperation` <br/>  `ExchangeItem` <br/>  `ExchangeItemGroup` <br/>  `MicrosoftTeams` <br/>  `MicrosoftTeamsAddOns` <br/>  `MicrosoftTeamsSettingsOperation` <br/>  `OneDrive` <br/>  `PowerBIAudit` <br/>  `SecurityComplianceCenterEOPCmdlet` <br/>  `SharePoint` <br/>  `SharePointFileOperation` <br/>  `SharePointSharingOperation` <br/>  `SkypeForBusinessCmdlets` <br/>  `SkypeForBusinessPSTNUsage` <br/>  `SkypeForBusinessUsersBlocked` <br/>  `Sway` <br/>  `ThreatIntelligence` <br/>  `Yammer` <br/>  You can't use this parameter when the value of the _Type_ parameter is `ElevationOfPrivilege`.  <br/> |
| _ScopeLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Hygiene.Data.AlertScopeLevel  <br/> | The _ScopeLevel_ parameter specifies the scope for activity alerts that use the _Type_ parameter values `SimpleAggregation` or `AnomalousAggregation`. Valid values are:  <br/>  `SingleUser` (This is the default value) <br/>  `AllUsers` <br/> |
| _Severity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.RuleSeverity  <br/> | The _Severity_ parameter specifies a severity level for the activity alert. Valid values are: <br/>  `None` <br/>  `Low` (This is the default value) <br/>  `Medium` <br/>  `High` <br/> |
| _UserId_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UserId_ parameter specifies who you want to monitor. <br/>  If you specify a user's email address, you'll receive an email notification when the user performs the specified activity. You can specify multiple email addresses separated by commas. <br/>  If this parameter is blank ( `$null`), you'll receive an email notification when any user in your organization performs the specified activity.  <br/>  You can only use this parameter with the _Type_ parameter values `Custom` or `ElevationOfPrivilege`.  <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


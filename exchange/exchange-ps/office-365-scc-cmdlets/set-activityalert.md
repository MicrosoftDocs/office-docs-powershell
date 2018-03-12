---
title: "Set-ActivityAlert"
ms.author: chrisda
author: chrisda
ms.date: 1/27/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 798baa99-ff27-45e2-a19a-8c3d7b288a3d
description: "This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see Office 365 Security &amp; Compliance Center PowerShell."
---

# Set-ActivityAlert

This cmdlet is available only in the Office 365 Security &amp; Compliance Center. For more information, see [Office 365 Security &amp; Compliance Center PowerShell](https://technet.microsoft.com/library/mt587091.aspx). 
  
Use the **Set-ActivityAlert** cmdlet to modify activity alerts in the Security &amp; Compliance Center.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Set-ActivityAlert -Identity <ComplianceRuleIdParameter> [-Category <None | DataLossPrevention | ThreatManagement | DataGovernance | AccessGovernance | Others>] [-Condition <String>] [-Confirm [<SwitchParameter>]] [-Description <String>] [-Disabled <$true | $false>] [-DomainController <Fqdn>] [-EmailCulture <CultureInfo>] [-Multiplier <Double>] [-Name <String>] [-NotifyUser <MultiValuedProperty>] [-Operation <MultiValuedProperty>] [-RecordType <ExchangeAdmin | ExchangeItem | ExchangeItemGroup | SharePoint | SyntheticProbe | SharePointFileOperation | OneDrive | AzureActiveDirectory | AzureActiveDirectoryAccountLogon | DataCenterSecurityCmdlet | ComplianceDLPSharePoint | Sway | ComplianceDLPExchange | SharePointSharingOperation | AzureActiveDirectoryStsLogon | SkypeForBusinessPSTNUsage | SkypeForBusinessUsersBlocked | SecurityComplianceCenterEOPCmdlet | ExchangeAggregatedOperation | PowerBIAudit | CRM | Yammer | SkypeForBusinessCmdlets | Discovery | MicrosoftTeams | MicrosoftTeamsAddOns | MicrosoftTeamsSettingsOperation | ThreatIntelligence>] [-ScopeLevel <SingleUser | AllUsers>] [-Severity <Low | Medium | High | None>] [-Threshold <Int32>] [-TimeWindow <Int32>] [-UserId <MultiValuedProperty>] [-WhatIf [<SwitchParameter>]]

```

## Examples
<a name="Examples"> </a>

### Example 1

This example adds the external user chris@fabrikam.com to the list of recipients that email notifications are sent to for the activity alert named Contoso Elevation of Privilege.
  
```
$NU = Get-ActivityAlert "Contoso Elevation of Privilege"; $NU.NotifyUser.Add("chris@fabrikam.com"); Set-ActivityAlert "Contoso Elevation of Privilege" -NotifyUser $NU.NotifyUser
```

 **Note**: To remove an existing email address from the list of recipients, change the value  `NotifyUser.Add` to `NotifyUser.Remove`.
  
### Example 2

This example disables the existing activity alert named External Sharing Alert.
  
```
Set-ActivityAlert -Identity "External Sharing Alert" -Disabled $true
```

## Detailed Description
<a name="DetailedDescription"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Identity_ <br/> |Required  <br/> |Microsoft.Office.CompliancePolicy.Tasks.ComplianceRuleIdParameter  <br/> | The _Identity_ parameter specifies the activity alert that you want to modify. You can use any value that uniquely identifies the activity alert. For example: <br/>  Name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Category_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.AlertRuleCategory  <br/> | The _Category_ parameter specifies a category for the activity alert. Valid values are: <br/>  `None` (This is the default value) <br/>  `DataLossPrevention` <br/>  `ThreatManagement` <br/>  `DataGovernance` <br/>  `AccessGovernance` <br/>  `Others` <br/> |
| _Condition_ <br/> |Optional  <br/> |System.String  <br/> |The  _Condition_parameter specifies filter conditions for event aggregation.  <br/> |
| _Confirm_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _Confirm_ switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding. <br/>  Destructive cmdlets (for example, **Remove-\*** cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.  <br/>  Most other cmdlets (for example, **New-\*** and **Set-\*** cmdlets) don't have a built-in pause. For these cmdlets, specifying the _Confirm_ switch without a value introduces a pause that forces you acknowledge the command before proceeding. <br/> |
| _Description_ <br/> |Optional  <br/> |System.String  <br/> |The  _Description_ parameter specifies an optional description for the activity alert. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _Disabled_ <br/> |Optional  <br/> |System.Boolean  <br/> | The _Disabled_ parameter specifies whether the activity alert is enabled or disabled. Valid values are: <br/>  `$true`: The activity alert is disabled.  <br/>  `$false`: The activity alert is enabled. This is the default value.  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _EmailCulture_ <br/> |Optional  <br/> |System.Globalization.CultureInfo  <br/> |The  _EmailCulture_ parameter specifies the language of the notification email message. <br/> Valid input for this parameter is a supported culture code value from the Microsoft .NET Framework **CultureInfo** class. For example, `da-DK` for Danish or `ja-JP` for Japanese. For more information, see[CultureInfo Class](https://go.microsoft.com/fwlink/p/?linkId=184859).  <br/> |
| _Multiplier_ <br/> |Optional  <br/> |System.Double  <br/> |The  _Multiplier_parameter specifies the number of events that trigger an activity alert. The value of this parameter indicates a multiplier from a baseline value.  <br/> You can only use this parameter on activity alerts that have the **Type** property value `AnomalousAggregation`.  <br/> |
| _Name_ <br/> |Optional  <br/> |System.String  <br/> |The  _Name_ parameter specifies the unique name of the activity alert. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks ("). <br/> |
| _NotifyUser_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _NotifyUser_ parameter specifies the email address of the recipients who will receive the notification emails. You can specify internal and external email addresses. <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> To modify the existing list of recipients, see the Examples section.  <br/> |
| _Operation_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |The  _Operation_ parameter specifies the activitiesthat trigger activity alerts. <br/> A valid value for this parameter is an activity that's available in the Office 365 audit log. For a description of these activities, see [Search the audit log in the Office 365 Security &amp; Compliance Center](http://go.microsoft.com/fwlink/p/?LinkId=824986).  <br/> To enter multiple values, use the following syntax:  `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/> For the syntax that you use to modify an existing list of **Operations** values, see the Examples section. <br/> |
| _RecordType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.ApplicationLogic.AuditRecordType  <br/> | The _RecordType_ parameter specifies a record type label for the activity alert. <br/>  Valid values are: <br/>  `AzureActiveDirectory` <br/>  `AzureActiveDirectoryAccountLogon` <br/>  `AzureActiveDirectoryStsLogon` <br/>  `ComplianceDLPExchange` <br/>  `ComplianceDLPSharePoint` <br/>  `CRM` <br/>  `DataCenterSecurityCmdlet` <br/>  `Discovery` <br/>  `ExchangeAdmin` <br/>  `ExchangeAggregatedOperation` <br/>  `ExchangeItem` <br/>  `ExchangeItemGroup` <br/>  `MicrosoftTeams` <br/>  `MicrosoftTeamsAddOns` <br/>  `MicrosoftTeamsSettingsOperation` <br/>  `OneDrive` <br/>  `PowerBIAudit` <br/>  `SecurityComplianceCenterEOPCmdlet` <br/>  `SharePoint` <br/>  `SharePointFileOperation` <br/>  `SharePointSharingOperation` <br/>  `SkypeForBusinessCmdlets` <br/>  `SkypeForBusinessPSTNUsage` <br/>  `SkypeForBusinessUsersBlocked` <br/>  `Sway` <br/>  `ThreatIntelligence` <br/>  `Yammer` <br/>  You can't use this parameter when the value of the _Type_ parameter is `ElevationOfPrivilege`.  <br/> |
| _ScopeLevel_ <br/> |Optional  <br/> |Microsoft.Exchange.Hygiene.Data.AlertScopeLevel  <br/> | The _ScopeLevel_ parameter specifies the scope for activity alerts that use the _Type_ parameter values `SimpleAggregation` or `AnomalousAggregation`. Valid values are:  <br/>  `SingleUser` (This is the default value) <br/>  `AllUsers` <br/> |
| _Severity_ <br/> |Optional  <br/> |Microsoft.Office.CompliancePolicy.PolicyEvaluation.RuleSeverity  <br/> | The _Severity_ parameter specifies a severity level for the activity alert. Valid values are: <br/>  `None` <br/>  `Low` (This is the default value) <br/>  `Medium` <br/>  `High` <br/> |
| _Threshold_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _Threshold_ parameter specifies the number of events that trigger an activity alert in the time interval that's specified by the _TimeWindow_ parameter. The minimum value for this parameter is 3. <br/> You can only use this parameter on activity alerts that have the **Type** property value `SimpleAggregation`.  <br/> |
| _TimeWindow_ <br/> |Optional  <br/> |System.Int32  <br/> |The  _TimeWindow_ parameter specifies the time window in minutes that's used by the _Threshold_ parameter. <br/> You can only use this parameter on activity alerts that have the **Type** property value `SimpleAggregation`.  <br/> |
| _UserId_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> | The _UserId_ parameter specifies who you want to monitor. <br/>  If you specify a user's email address, you'll receive an email notification when the user performs the specified activity. You can specify multiple email addresses separated by commas. <br/>  If this parameter is blank ( `$null`), you'll receive an email notification when any user in your organization performs the specified activity.  <br/>  To enter multiple values, use the following syntax: `<value1>,<value2>,...<valueX>`. If the values contain spaces or otherwise require quotation marks, use the following syntax:  `"<value1>","<value2>",..."<valueX>"`.  <br/>  You can only use this parameter on activity alerts that have the **Type** property values `Custom` or `ElevationOfPrivilege`.  <br/>  For the syntax that you use to modify an existing list of **UserId** values, see the Examples section. <br/> |
| _WhatIf_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
   
## Input Types
<a name="InputTypes"> </a>

You need to be assigned permissions in the Office 365 Security &amp; Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920). 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  


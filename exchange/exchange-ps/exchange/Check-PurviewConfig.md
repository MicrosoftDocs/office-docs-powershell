---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/check-purviewconfig
applicable: Security & Compliance
title: Check-PurviewConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Check-PurviewConfig

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Check-PurviewConfig cmdlet to validate and review your organization's configuration settings in Microsoft Purview.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Check-PurviewConfig
 [[-Component] <PurviewConfigComponent>]
 [[-DateTimeUTC] <String>]
 [[-File] <String>]
 [[-IncidentId] <String>]
 [[-ItemId] <String>]
 [[-MessageId] <String>]
 [[-RecordId] <String>]
 [[-RuleName] <String>]
 [[-TestCases] <String[]>]
 [[-Theme] <PurviewConfigTheme>]
 [[-UserPrincipalName] <SmtpAddress>]
 [[-Workload] <String>]
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Check-PurviewConfig cmdlet to run Microsoft Information Protection diagnostic test cases for your organization and check the results.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned Global Administrator permission.

## EXAMPLES

### Example 1
```powershell
Check-PurviewConfig
```

This example runs all Microsoft Information Protection test cases that don't require additional parameters.

### Example 2
```powershell
Check-PurviewConfig -Component Encryption
```

This example runs all test cases for the Encryption component.

### Example 3
```powershell
Check-PurviewConfig -Component Encryption -Theme LicenseAvailability
```

This example runs all cases for the LicenseAvailability theme in the Encryption component.

### Example 4
```powershell
Check-PurviewConfig -TestCases "MipLabels_EnabledEntities_ScopedLabels" -UserPrincipalName sathya@contoso.onmicrosoft.com
```

This example runs the test case named MipLabels_EnabledEntities_ScopedLabels, which requires a UserPrincipalName value.

### Example 5
```powershell
Check-PurviewConfig -TestCases "MipLabels_EnabledEntities_ScopedLabels","MipLabels_EnabledEntities_CompareSyncStatus" -UserPrincipalName sathya@contoso.onmicrosoft.com
```

This example runs the specified test cases. A UserPrincipalName value is required for the MipLabels_EnabledEntities_ScopedLabels test case.

## PARAMETERS

### -Component
The Component parameter specifies the component to analyze in the test case. Valid values are:

- DLP
- DLPAlerts
- Encryption
- MIPLabels

```yaml
Type: PurviewConfigComponent
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DateTimeUTC
The DateTimeUTC specifies the date-time of the test case in Coordinated Universal Time (UTC). For example, "2025-06-05 14:30:00".

This parameter is required for the following TestCases values:

- DlpAlerts_CheckAlertsCreated
- DlpAlerts_FindAlertForActivity

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -File
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncidentId
The IncidentId parameter specifies the incident to analyze in the test case.

You can find a value for this parameter in audit log searches filtered by the operation DLPRuleMatch in the IncidentId property.

This parameter is required for the TestCases value DlpAlerts_FindAlertForActivity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordId
The RuleName parameter specifies the record to analyze in the test case.

You can find a value for this parameter in Activity Explorer filtered by the activity type DLPRuleMatch in the RecordId property.

This parameter is optional with the TestCases value DlpAlerts_FindAlertForActivity.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RuleName
The RuleName parameter specifies the DLP rule to analyze in the test case.

This parameter is optional with the TestCases value DlpAlerts_CheckAlertsCreated.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestCases
The TestCases parameter specifies the name of the test case to analyze. The available test cases and their required parameters are described in the following list:

- **Encryption_EvaluationDetails**: Validates email encryption evaluation details. No other parameters are required.
- **Encryption_LicenseAvailability**: Checks email encryption configurations. No other parameters are required.
- **MipLabels_EnabledEntities_ScopedLabels**: Shows the labels and label settings that apply to a user. Requires the UserPrincipalName parameter.
- **MipLabels_LicenseAvailability**: Verifies whether the MIP Label feature is enabled. No other parameters required.
- **DlpAlerts_CheckAlertsCreated**: Validates the DLP rule configuration for alerts created in last 5 days. Requires the DateTimeUTC parameter. The RuleName parameter is optional.
- **DlpAlerts_FindAlertForActivity**: Identifies missing alerts for an activity. Requires the DateTimeUTC parameter. The IncidentId and RecordId parameters are optional.
- **DLP_ScopedEntities**: Returns all DLP policies and rules that apply to a user or a site. Requires the Workload parameter. The SiteUrl and UserPrincipalName parameters are optional.

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Theme
The Theme parameter filters specifies the them to analyze in the test case. Valid values are:

- EnabledEntities
- EvaluationDetails
- LicenseAvailability

```yaml
Type: PurviewConfigTheme
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the user account to analyze in the test case (for example, `sathya@contoso.onmicrosoft.com`).

- Required for the TestCases value MipLabels_EnabledEntities_ScopedLabels.
- Optional for the TestCases value DLP_ScopedEntities.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch doesn't work in Security & Compliance PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Workload
The Workload parameter specifies the service workload. Value values are:

- EndpointDevices
- Exchange
- OneDriveForBusiness
- SharePoint
- Teams

This parameter is required for the TestCases value DLP_ScopedEntities.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: 11
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

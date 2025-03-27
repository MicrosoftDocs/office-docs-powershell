---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-featureconfiguration
applicable: Security & Compliance
title: Set-FeatureConfiguration
schema: 2.0.0
---

# Set-FeatureConfiguration

## SYNOPSIS
**Note**: This cmdlet is available in Public Preview.

This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Set-FeatureConfiguration cmdlet to modify Microsoft Purview feature configurations within your organization, including:
- Collection policies
- Endpoint DLP trust container

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-FeatureConfiguration [-Identity] <PolicyIdParameter> [-Locations <String>]
 [-Comment <String>]
 [-Confirm]
 [-GeneralDiscovery]
 [-IrmDiscovery]
 [-Mode <PolicyMode>]
 [-ScenarioConfig <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
Set-FeatureConfiguration "DSPM for AI - Capture interactions for Copilot experiences" -ScenarioConfig '{"Activities":["UploadText","DownloadText"],"EnforcementPlanes":["CopilotExperiences"],"SensitiveTypeIds":["All"],"IsIngestionEnabled":false}'
```

This example updates a collection policy named "DSPM for AI - Capture interactions for Copilot experiences" to disable content capture.

### Example 2
```powershell
Set-FeatureConfiguration "Microsoft Copilot collection policy for Contoso Sales" -Locations '[{"Workload":"Applications","Location":"52655","AddInclusions":[{"Type":"Group","Identity":"USSales@contoso.com"}]}]'
```

This example updates a collection policy named "Microsoft Copilot collection policy for Contoso Sales" to include the USSales@contoso.com group.

### Example 3
```powershell
Set-FeatureConfiguration "Microsoft Copilot collection policy for Contoso Sales" -Locations '[{"Workload":"Applications","Location":"52655","AddExclusions":[{"Type":"IndividualResource","Identity":"adele@contoso.com"}]}]'
```

This example updates a collection policy named "Microsoft Copilot collection policy for Contoso Sales" to exclude the adele@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the feature configuration that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: PolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
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

### -GeneralDiscovery
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmDiscovery
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Locations
The locations parameter specifies where the feature configuration applies.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mode
The Mode parameter specifies feature configuration mode. Valid values are:

- Enable: The feature configuration is enabled.
- Disable: The feature configuration is disabled.

```yaml
Type: PolicyMode
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScenarioConfig
The ScenarioConfig parameter specifies additional information about the feature configuration.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-featureconfiguration
applicable: Security & Compliance
title: New-FeatureConfiguration
schema: 2.0.0
---

# New-FeatureConfiguration

## SYNOPSIS
**Note**: This cmdlet is available in Public Preview.

This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the New-FeatureConfiguration cmdlet to create Microsoft Purview feature configurations within your organization, including:
- Collection policies
- Endpoint DLP trust container

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-FeatureConfiguration [-Name] <String> -Mode <PolicyMode> -FeatureScenario <PolicyScenario> -ScenarioConfig <String>
 [-Comment <String>]
 [-Confirm]
 [-GeneralDiscovery]
 [-IrmDiscovery]
 [-Locations <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in Security & Compliance](https://go.microsoft.com/fwlink/p/?LinkId=511920).

## EXAMPLES

### Example 1
```powershell
New-FeatureConfiguration -Name "Collection policy for supported Copilots" -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig '{"Activities":["UploadText","DownloadText"],"EnforcementPlanes":["CopilotExperiences","Browser"],"SensitiveTypeIds":["All"],"IsIngestionEnabled":true}' –Locations '[{"Workload":"Applications","Location":"52655","LocationSource":"SaaS","LocationType":"Individual","Inclusions":[{"Type":"Tenant","Identity":"All","DisplayName":"All","Name":"All"}]},{"Workload":"Applications","Location":"49baeafd-1a6b-4c58-be55-75ae6d1dff6a","LocationSource":"PurviewConfig","LocationType":"Group","Inclusions":[{"Type":"Tenant","Identity":"All","DisplayName":"All","Name":"All"}]}]'
```

This example creates an enabled collection policy named "Collection policy for supported Copilots" that:
- Includes UploadText & DownloadText activity for all supported classifiers
- Captures all AI prompts
- Includes Microsoft Copilot & Copilot Experiences locations, both scoped to all users & groups

### Example 2
```powershell
New-FeatureConfiguration -Name "Scoped browser collection policy for Microsoft Copilot" -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig '{"Activities":["UploadText"],"EnforcementPlanes":["Browser"],"SensitiveTypeIds":["All"],"ExcludedSensitiveTypeIds":["50b8b56b-4ef8-44c2-a924-03374f5831ce","8548332d-6d71-41f8-97db-cc3b5fa544e6"],"IsIngestionEnabled":false}' –Locations '[{"Workload":"Applications","Location":"52655","LocationDisplayName":null,"LocationSource":"SaaS","LocationType":"Individual","Inclusions":[{"Type":"Tenant","Identity":"All","DisplayName":"All","Name":"All"}],"Exclusions":[{"Type":"Group","Identity":"db458ddb-4f56-4d88-a4f7-e29545560839","DisplayName":"Contoso Executives","Name":"Executives@contoso.com"}]}]'
```

This example creates an enabled collection policy named "Scoped browser collection policy for Microsoft Copilot" that:
- Includes UploadText activity for all supported classifiers except "All Full Names" and "All Physical Addresses"
- Includes Microsoft Copilot location, for all users & groups except the "Contoso Executives Group"

### Example 3
```powershell
New-FeatureConfiguration -Name "Scoped collection policies for browser and devices" -FeatureScenario KnowYourData -Mode Disable -ScenarioConfig '{"Activities":["UploadText","filecreated","filedeleted","filemodified"],"EnforcementPlanes":["Devices","Browser"],"SensitiveTypeIds":["a44669fe-0d48-453d-a9b1-2cc83f2cba77","cb353f78-2b72-4c3c-8827-92ebe4f69fdf"],"FileExtensions":["pdf"],"IsIngestionEnabled":false}' –Locations '[{"Workload":"EndpointDevices","Location":"","Inclusions":[{"Type":"Group","Identity":"db458ddb-4f56-4d88-a4f7-e29545560839","DisplayName":"All Company","Name":"allcompany@contoso.com"}],"Exclusions":[{"Type":"IndividualResource","Identity":"a828f25a-cede-4d0e-97e6-b0b0c913732a","DisplayName":"Alex Wilber","Name":"alex@contoso.com"}]},{"Workload":"Applications","Location":"52655","LocationSource":"SaaS","LocationType":"Individual","Inclusions":[{"Type":"IndividualResource","Identity":"84f9af2e-b224-4cb8-b9cd-bc531bb07a48","DisplayName":"Adele Vance","Name":"adele@contoso.com"}]}]'
```

This example creates a disabled collection policy named "Scoped collection policies for browser and devices" that:
- Includes UploadText (for browser) and filecreated, filedeleted, and filemodified activities (for devices)
- Includes "U.S. Social Security Number (SSN)" and "ABA Routing Number" classifiers only
- Detects files on devices with "pdf" file extension only
- Includes devices location, scoped to the "All company" group, excluding the user "Alex Wilber"
- Includes Microsoft Copilot location, scoped only to the user "Adele Vance"

## PARAMETERS

### -Name
The Name parameter specifies the unique name for the feature configuration. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FeatureScenario
The FeatureScenario parameter specifies the scenario for the feature configuration. Currently, the only valid values are:
- `KnowYourData` for collection policies
- `TrustContainer` for Endpoint DLP trust container

```yaml
Type: PolicyScenario
Parameter Sets: (All)
Aliases:
Applicable: Security & Compliance

Required: True
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

Required: True
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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
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
{{ Fill GeneralDiscovery Description }}

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
{{ Fill IrmDiscovery Description }}

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

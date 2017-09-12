---
applicable: SharePoint Online
schema: 2.0.0
---

# Set-SPOTenantSyncClientRestriction

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### Blocking
```
Set-SPOTenantSyncClientRestriction [-BlockMacSync] [-DomainGuids <String>] [-Enable] [<CommonParameters>]
```

### ReportProblemDialogFeature
```
Set-SPOTenantSyncClientRestriction -DisableReportProblemDialog <Boolean> [<CommonParameters>]
```

### FileExclusion
```
Set-SPOTenantSyncClientRestriction [-ExcludedFileExtensions <String>] [<CommonParameters>]
```

### GrooveBlockOptions
```
Set-SPOTenantSyncClientRestriction [-GrooveBlockOption <String>] [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 (SharePoint Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -BlockMacSync
{{Fill BlockMacSync Description}}

```yaml
Type: SwitchParameter
Parameter Sets: Blocking
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableReportProblemDialog
{{Fill DisableReportProblemDialog Description}}

```yaml
Type: Boolean
Parameter Sets: ReportProblemDialogFeature
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainGuids
{{Fill DomainGuids Description}}

```yaml
Type: String
Parameter Sets: Blocking
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
{{Fill Enable Description}}

```yaml
Type: SwitchParameter
Parameter Sets: Blocking
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedFileExtensions
{{Fill ExcludedFileExtensions Description}}

```yaml
Type: String
Parameter Sets: FileExclusion
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GrooveBlockOption
{{Fill GrooveBlockOption Description}}

```yaml
Type: String
Parameter Sets: GrooveBlockOptions
Aliases: 
Accepted values: OptOut, HardOptIn, SoftOptIn
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS


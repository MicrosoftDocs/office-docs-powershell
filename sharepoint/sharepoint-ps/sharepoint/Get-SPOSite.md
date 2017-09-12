---
applicable: SharePoint Online
schema: 2.0.0
---

# Get-SPOSite

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### ParamSet1
```
Get-SPOSite [[-Identity] <SpoSitePipeBind>] [-Detailed] [-Limit <String>] [<CommonParameters>]
```

### ParamSet2
```
Get-SPOSite [-Detailed] [-Filter <String>] [-IncludePersonalSite <Boolean>] [-Limit <String>]
 [-Template <String>] [<CommonParameters>]
```

### ParamSet3
```
Get-SPOSite [-Identity] <SpoSitePipeBind> [-DisableSharingForNonOwnersStatus] [<CommonParameters>]
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

### -Detailed
{{Fill Detailed Description}}

```yaml
Type: SwitchParameter
Parameter Sets: ParamSet1, ParamSet2
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableSharingForNonOwnersStatus
{{Fill DisableSharingForNonOwnersStatus Description}}

```yaml
Type: SwitchParameter
Parameter Sets: ParamSet3
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
{{Fill Filter Description}}

```yaml
Type: String
Parameter Sets: ParamSet2
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: SpoSitePipeBind
Parameter Sets: ParamSet1
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SpoSitePipeBind
Parameter Sets: ParamSet3
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IncludePersonalSite
{{Fill IncludePersonalSite Description}}

```yaml
Type: Boolean
Parameter Sets: ParamSet2
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Limit
{{Fill Limit Description}}

```yaml
Type: String
Parameter Sets: ParamSet1, ParamSet2
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Template
{{Fill Template Description}}

```yaml
Type: String
Parameter Sets: ParamSet2
Aliases: 
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

### Microsoft.Online.SharePoint.PowerShell.SpoSitePipeBind

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS


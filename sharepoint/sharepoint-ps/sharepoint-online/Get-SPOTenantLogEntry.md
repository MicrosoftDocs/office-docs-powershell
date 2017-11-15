---
external help file: 
applicable: SharePoint Online
title: Get-SPOTenantLogEntry
schema: 2.0.0
---

# Get-SPOTenantLogEntry

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### CorrelationId
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -CorrelationId <Guid> [<CommonParameters>]
```

### Source
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -Source <Int32> [<CommonParameters>]
```

### User
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -User <String> [<CommonParameters>]
```

## DESCRIPTION
{{Fill in the Description}}

## EXAMPLES

### Example 1 
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -CorrelationId
{{Fill CorrelationId Description}}

```yaml
Type: Guid
Parameter Sets: CorrelationId
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTimeInUtc
{{Fill EndTimeInUtc Description}}

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRows
{{Fill MaxRows Description}}

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Source
{{Fill Source Description}}

```yaml
Type: Int32
Parameter Sets: Source
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTimeInUtc
{{Fill StartTimeInUtc Description}}

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
{{Fill User Description}}

```yaml
Type: String
Parameter Sets: User
Aliases: 
Applicable: SharePoint Online

Required: True
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


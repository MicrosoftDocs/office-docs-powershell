---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPOTenantLogEntry

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -CorrelationId <Guid>
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -Source <Int32>
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPOTenantLogEntry [[-StartTimeInUtc] <DateTime>] [[-EndTimeInUtc] <DateTime>] [[-MaxRows] <UInt32>]
 -User <String>
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

### -CorrelationId
{{Fill CorrelationId Description}}

```yaml
Type: Guid
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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
Parameter Sets: UNNAMED_PARAMETER_SET_3
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS


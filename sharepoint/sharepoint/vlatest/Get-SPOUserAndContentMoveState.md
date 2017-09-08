---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPOUserAndContentMoveState

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPOUserAndContentMoveState [-Limit <UInt32>] [-MoveDirection <Direction>] [-MoveEndTime <DateTime>]
 [-MoveStartTime <DateTime>] [-MoveState <State>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPOUserAndContentMoveState -OdbMoveId <Guid>
```

### UNNAMED_PARAMETER_SET_3
```
Get-SPOUserAndContentMoveState -UserPrincipalName <String>
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

### -Limit
{{Fill Limit Description}}

```yaml
Type: UInt32
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveDirection
{{Fill MoveDirection Description}}

```yaml
Type: Direction
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 
Accepted values: All, MoveIn, MoveOut

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveEndTime
{{Fill MoveEndTime Description}}

```yaml
Type: DateTime
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveStartTime
{{Fill MoveStartTime Description}}

```yaml
Type: DateTime
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveState
{{Fill MoveState Description}}

```yaml
Type: State
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 
Accepted values: All, NotStarted, Scheduled, InProgress, Stopped, Success, Failed

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OdbMoveId
{{Fill OdbMoveId Description}}

```yaml
Type: Guid
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
{{Fill UserPrincipalName Description}}

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


---
applicable: SharePoint Online
schema: 2.0.0
---

# Get-SPOUserAndContentMoveState

## SYNOPSIS
{{Fill in the Synopsis}}

## SYNTAX

### MoveReport
```
Get-SPOUserAndContentMoveState [-Limit <UInt32>] [-MoveDirection <Direction>] [-MoveEndTime <DateTime>]
 [-MoveStartTime <DateTime>] [-MoveState <State>] [<CommonParameters>]
```

### OdbMoveId
```
Get-SPOUserAndContentMoveState -OdbMoveId <Guid> [<CommonParameters>]
```

### UserPrincipalName
```
Get-SPOUserAndContentMoveState -UserPrincipalName <String> [<CommonParameters>]
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
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

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
Parameter Sets: MoveReport
Aliases: 
Accepted values: All, MoveIn, MoveOut
Applicable: SharePoint Online

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
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

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
Parameter Sets: MoveReport
Aliases: 
Applicable: SharePoint Online

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
Parameter Sets: MoveReport
Aliases: 
Accepted values: All, NotStarted, Scheduled, InProgress, Stopped, Success, Failed
Applicable: SharePoint Online

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
Parameter Sets: OdbMoveId
Aliases: 
Applicable: SharePoint Online

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
Parameter Sets: UserPrincipalName
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


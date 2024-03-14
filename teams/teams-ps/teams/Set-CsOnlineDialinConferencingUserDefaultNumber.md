---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/set-csonlinedialinconferencinguserdefaultnumber
schema: 2.0.0
---

# Set-CsOnlineDialinConferencingUserDefaultNumber

## SYNOPSIS
Replace the default toll or toll-free number for all users.

## SYNTAX

### SetExpanded (Default)
```
Set-CsOnlineDialinConferencingUserDefaultNumber [-Skiptoken <String>] [-AreaOrState <String>]
 [-BridgeId <String>] [-BridgeName <String>] [-CapitalOrMajorCity <String>] [-CountryOrRegion <String>]
 [-FromNumber <String>] [-NumberType <String>] [-RescheduleMeetings] [-ToNumber <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Set
```
Set-CsOnlineDialinConferencingUserDefaultNumber [-Skiptoken <String>] -Body <IUsersDefaultNumberUpdateRequest>
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Provide the detailed description here.

## EXAMPLES

### Example 1
```
Set-CsOnlineDialInConferencingUserDefaultNumber -FromNumber 14255550100 -ToNumber 14255550101 -NumberType Toll -RescheduleMeetings -BridgeId 9884626f-dcfb-49f4-8025-912f5bc68fdc
```

This example replaces the default toll or toll-free number for all users who have the number 14255550100 as a default number to the number 14255550101 and starts the process of rescheduling their meetings.

## PARAMETERS

### -AreaOrState
A String representing the Area or State this Dial In Conferencing Default number belongs to.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Body
{{ Fill Body Description }}

```yaml
Type: IUsersDefaultNumberUpdateRequest
Parameter Sets: Set
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BridgeId
The Bridge Id results from running Get-CsOnlineDialInConferencingBridge (https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingbridge)For example "9884626f-dcfb-49f4-8025-912f5bc68fdc".
You can either specify BridgeName or BridgeId.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeName
The Bridge Name results from running Get-CsOnlineDialInConferencingBridge (https://learn.microsoft.com/powershell/module/skype/get-csonlinedialinconferencingbridge)For example "Conference Bridge".
You can either specify BridgeName or BridgeId.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapitalOrMajorCity
A String representing the Capital or Major City this Dial In Conferencing Default number belongs to.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
A String representing the Country or Region this Dial In Conferencing Default number belongs to.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromNumber
The current default number defined.
$null if no number defined.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberType
The type of number this Dial In Conferencing Default number has.
Valid values are

- Toll
- TollFree

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RescheduleMeetings
Sends e-mail notifications to Meeting attendes with the updated settings.

```yaml
Type: SwitchParameter
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skiptoken
{{ Fill Skiptoken Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ToNumber
The new number to assign, without the + sign, for example 14255550101.

```yaml
Type: String
Parameter Sets: SetExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

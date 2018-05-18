---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Reset-CsRoutingGroup
schema: 2.0.0
---

# Reset-CsRoutingGroup

## SYNOPSIS
Enables administrators to reset a Windows fabric routing group that is not working correctly.

## SYNTAX

```
Reset-CsRoutingGroup [-RoutingGroup] <String> [-Binding <String>] [-Confirm] [-Force]
 [-HostNameStorageService <String>] [-Lyss] [-ResetType <RgResetType>] [-TargetFqdn <Fqdn>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The `Reset-CsRoutingGroup` cmdlet provides a way for administrators to reset Windows Fabric routing groups that are "missing" or are otherwise not working correctly.
Missing routing groups can be identified by using the `Get-CsPoolFabricState` cmdlet and the FilterOnMissingReplicas parameter.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Reset-CsRoutingGroup -RoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c" -Type "Transient"
```

The command shown in Example 1 performs a transient on the routing group with the identity bef5fa3b-3c97-4af0-abe7-611deee7616c.


## PARAMETERS

### -RoutingGroup
Globally unique identifier (GUID) of the routing group that needs to be reset.
For example:

`-RoutingGroup "bef5fa3b-3c97-4af0-abe7-611deee7616c"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Binding
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: b
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostNameStorageService
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: h
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Lyss
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetType
Type of reset to be performed.
Allowed values are:

Invalid

Permanent

Transient

```yaml
Type: RgResetType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name of the pool containing the routing group that needs to be reset.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Reset-CsRoutingGroup` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
The `Reset-CsRoutingGroup` cmdlet does return objects or data.

## NOTES

## RELATED LINKS


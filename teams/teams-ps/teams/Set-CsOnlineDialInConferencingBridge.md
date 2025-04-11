---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinedialinconferencingbridge
applicable: Microsoft Teams
title: Set-CsOnlineDialInConferencingBridge
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsOnlineDialInConferencingBridge

## SYNOPSIS
Use the `Set-CsOnlineDialInConferencingBridge` cmdlet to modify the settings of a Microsoft audio conferencing bridge.

## SYNTAX

### UniqueBridgeParams (Default)
```
Set-CsOnlineDialInConferencingBridge [-Identity] <Guid> [-Tenant <Guid>] [-TenantDomain <String>]
 [-DefaultServiceNumber <String>] [-SetDefault] [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### BridgeNameParams
```
Set-CsOnlineDialInConferencingBridge -Name <String> [-Tenant <Guid>] [-TenantDomain <String>]
 [-DefaultServiceNumber <String>] [-SetDefault] [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### InstanceParams
```
Set-CsOnlineDialInConferencingBridge [-Instance] <ConferencingBridge> [-Tenant <Guid>]
 [-TenantDomain <String>] [-DefaultServiceNumber <String>] [-SetDefault] [-DomainController <Fqdn>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsOnlineDialInConferencingBridge` cmdlet can be used to set the default dial-in service phone number for a given audio conferencing bridge.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineDialInConferencingBridge -Name "Conference Bridge" -DefaultServiceNumber 14255551234
```

This example sets the default dial-in phone number to 14255551234 for the audio conferencing bridge named "Conference Bridge".

### -------------------------- Example 2 --------------------------
```
$bridge = Get-CsOnlineDialInConferencingBridge -Name "Conference Bridge"

$Bridge.Name = "O365 Bridge"

Set-CsOnlineDialInConferencingBridge -Instance $bridge
```

This example changes the name of a conference bridge by creating a conference bridge instance, changing the instance's name and then setting the conference bridge to the instance.

## PARAMETERS

### -Identity
Specifies the globally-unique identifier (GUID) for the audio conferencing bridge to be modified.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to a Microsoft audio conferencing bridge object to the cmdlet rather than set individual parameter values.

```yaml
Type: ConferencingBridge
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the audio conferencing bridge to be modified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultServiceNumber
Specifies the default phone number to be used on the Microsoft audio conferencing bridge.
The default number is used in meeting invitations.

The DefaultServiceNumber must be assigned to the audio conferencing bridge.
Also, when the default service number is changed, the service number of existing users will not be changed.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Specifies the domain controller that's used by the cmdlet to read or write the specified data.
Valid inputs for this parameter include:

Fully qualified domain name (FQDN): -DomainController atl-cs-001.Contoso.com.

Computer name: -DomainController atl-cs-001

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetDefault
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

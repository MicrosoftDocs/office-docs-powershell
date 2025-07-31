---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/register-csonlinedialinconferencingservicenumber
schema: 2.0.0
title: Register-CsOnlineDialInConferencingServiceNumber
---

# Register-CsOnlineDialInConferencingServiceNumber

## SYNOPSIS
The Register-CsOnlineDialInConferencingServiceNumber command allows you to assign any additional service number that you may have acquired to your conference bridge.

## SYNTAX

### UniqueNumberParams
```
Register-CsOnlineDialInConferencingServiceNumber [-Identity] <String> [-BridgeId <Guid>]
 [-BridgeName <String>] [-Tenant <Guid>] [-TenantDomain <String>] [-DomainController <Fqdn>] [-Force]
 [<CommonParameters>]
```

### InstanceParams
```
Register-CsOnlineDialInConferencingServiceNumber [-Instance] <ConferencingServiceNumber>
 [-BridgeId <Guid>] [-BridgeName <String>] [-Tenant <Guid>] [-TenantDomain <String>]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Register-CsOnlineDialInConferencingServiceNumber command allows you to assign any additional service number that you may have acquired to your conference bridge.

When you buy Audio Conferencing licenses, Microsoft is hosting your audio conferencing bridge for your organization. The audio conferencing bridge gives out dial-in phone numbers from different locations so that meeting organizers and participants can use them to join Microsoft Teams meetings using a phone.
In addition to the phone numbers already assigned to your conferencing bridge, you can get additional service numbers (toll and toll-free numbers used for audio conferencing) from other locations, and then assign them to the conferencing bridge so you can expand coverage for your users.

## EXAMPLES

### Example 1
```
Register-CsOnlineDialinConferencingServiceNumber -Identity +1425555XXX -BridgeId fb91u3e9-5c2a-42c3-8yy5-ec02beexxx09
```

This command registers the telephone number +1425555XXX to your conference bridge. To find the bridge ID associated with your conference bridge you can use the command Get-CsOnlineDialInConferencingBridge.

## PARAMETERS

### -BridgeId

> Applicable: Microsoft Teams

PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeName

> Applicable: Microsoft Teams

PARAMVALUE: String

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

### -DomainController

> Applicable: Microsoft Teams

PARAMVALUE: Fqdn

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Microsoft Teams

PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Microsoft Teams

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

> Applicable: Microsoft Teams

PARAMVALUE: ConferencingServiceNumber

```yaml
Type: ConferencingServiceNumber
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

> Applicable: Microsoft Teams

PARAMVALUE: Guid

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantDomain

> Applicable: Microsoft Teams

PARAMVALUE: String

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

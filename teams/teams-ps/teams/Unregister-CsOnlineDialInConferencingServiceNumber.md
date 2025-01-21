---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/unregister-csonlinedialinconferencingservicenumber
applicable: Microsoft Teams
title: Unregister-CsOnlineDialInConferencingServiceNumber
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Unregister-CsOnlineDialInConferencingServiceNumber

## SYNOPSIS
Unassigns the previously assigned service number as default Conference Bridge number.

## SYNTAX

```
Unregister-CsOnlineDialInConferencingServiceNumber [-Identity] <String> [-BridgeId <Guid>]
 [-BridgeName <String>] [-Tenant <Guid>] [-TenantDomain <String>] [-RemoveDefaultServiceNumber]
 [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Unassigns the previously assigned service number as default Conference Bridge number.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Unregister-CsOnlineDialInConferencingServiceNumber -BridgeName "Conference Bridge" -RemoveDefaultServiceNumber 1234
```

Unassigns the 1234 Service Number to the given Conference Bridge.

## PARAMETERS

### -Identity
PARAMVALUE: String

```yaml
Type: String
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
PARAMVALUE: ConferencingServiceNumber

```yaml
Type: ConferencingServiceNumber
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BridgeId
PARAMVALUE: Guid

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

### -BridgeName
PARAMVALUE: String

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
PARAMVALUE: Fqdn

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

### -RemoveDefaultServiceNumber
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
PARAMVALUE: Guid

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
PARAMVALUE: String

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
